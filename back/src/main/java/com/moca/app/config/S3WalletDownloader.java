package com.moca.app.config;

import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import software.amazon.awssdk.core.sync.ResponseTransformer;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.zip.ZipInputStream;

@Component
public class S3WalletDownloader {

    // 1. 설정 정보: S3 버킷, 파일 이름, 다운로드 및 압축 해제할 경로
    private final String BUCKET_NAME = "moca-oracle-wallet"; // 본인의 버킷 이름
    private final String WALLET_ZIP_KEY = "Wallet_GE1UPT447T1Q9Y2W.zip"; // S3에 올린 Wallet 파일 이름
    private final String DOWNLOAD_DIR = "/tmp/oracle_wallet/Wallet_GE1UPT447T1Q9Y2W/"; // EC2 인스턴스 내부에 저장될 디렉토리

    @EventListener(ApplicationReadyEvent.class)
    public void downloadAndUnzipWallet() {
        // IAM 역할 덕분에 Access Key 없이도 자동으로 자격 증명을 사용합니다.
        S3Client s3Client = S3Client.builder()
                .region(Region.AP_NORTHEAST_1) // 본인의 리전
                .build();

        try {
            Path downloadDirPath = Paths.get(DOWNLOAD_DIR);
            Files.createDirectories(downloadDirPath); // 디렉토리가 없으면 생성 (있으면 아무것도 안 함)
            Path downloadFilePath = downloadDirPath.resolve(WALLET_ZIP_KEY);

            // --- 이 부분을 추가하세요! ---
            // 만약 Wallet zip 파일이 이미 존재하면, 다운로드와 압축 해제를 건너뜁니다.
            if (Files.exists(downloadFilePath)) {
                System.out.println("Wallet 파일이 이미 존재하므로 다운로드를 건너뜁니다: " + downloadFilePath);
                return; // 메소드를 여기서 종료
            }

            // 2. S3에서 Wallet.zip 파일 다운로드
            System.out.println("S3에서 Wallet 다운로드를 시작합니다...");
            s3Client.getObject(GetObjectRequest.builder()
                            .bucket(BUCKET_NAME)
                            .key(WALLET_ZIP_KEY)
                            .build(),
                    ResponseTransformer.toFile(downloadFilePath));
            System.out.println("Wallet 다운로드 완료: " + downloadFilePath);

            // 3. 다운로드한 .zip 파일 압축 해제
            System.out.println("Wallet 압축 해제를 시작합니다...");
            unzip(downloadFilePath.toString(), DOWNLOAD_DIR);
            System.out.println("Wallet 압축 해제 완료.");

        } catch (Exception e) {
            System.err.println("S3 Wallet 처리 중 오류 발생: " + e.getMessage());
            // 애플리케이션을 시작하면 안 되므로, 런타임 예외를 발생시켜 앱을 중단시킵니다.
            throw new RuntimeException("Failed to initialize Oracle Wallet from S3", e);
        }
    }

    // 간단한 압축 해제 유틸리티 메소드
    private void unzip(String zipFilePath, String destDirectory) throws IOException {
        File destDir = new File(destDirectory);
        byte[] buffer = new byte[1024];
        ZipInputStream zis = new ZipInputStream(new FileInputStream(zipFilePath));
        var zipEntry = zis.getNextEntry();
        while (zipEntry != null) {
            File newFile = new File(destDir, zipEntry.getName());
            if (zipEntry.isDirectory()) {
                if (!newFile.isDirectory() && !newFile.mkdirs()) {
                    throw new IOException("Failed to create directory " + newFile);
                }
            } else {
                // 부모 디렉토리가 존재하도록 보장
                File parent = newFile.getParentFile();
                if (!parent.isDirectory() && !parent.mkdirs()) {
                    throw new IOException("Failed to create directory " + parent);
                }

                FileOutputStream fos = new FileOutputStream(newFile);
                int len;
                while ((len = zis.read(buffer)) > 0) {
                    fos.write(buffer, 0, len);
                }
                fos.close();
            }
            zipEntry = zis.getNextEntry();
        }
        zis.closeEntry();
        zis.close();
    }
}
