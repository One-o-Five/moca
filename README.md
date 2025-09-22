# Moca Project

Moca는 차량 렌탈 서비스를 위한 종합 웹 애플리케이션입니다. 사용자들이 편리하게 차량을 예약하고 관리할 수 있는 통합 플랫폼을 제공하며, AI 챗봇을 통한 고객 지원까지 포함합니다.

## 🚀 주요 기능

### 👤 사용자 기능
- **카카오 소셜 로그인** - 간편한 소셜 로그인
- **차량 예약 시스템** - 직관적인 예약 인터페이스
- **보험 선택** - 베이직/스탠다드/프리미엄 보험 옵션
- **결제 시스템** - 카카오페이 통합 결제
- **마이페이지** - 예약 현황 조회 및 관리, 예약 취소
- **면허증 인증** - OCR 기반 자동 인증
- **AI 챗봇** - 실시간 고객 지원 및 문의 응답
- **공지사항 및 FAQ** - 최신 정보 확인

### 👨‍💼 관리자 기능
- **관리자 대시보드** - 통합 관리 인터페이스
- **차량 관리** - 등록, 수정, 삭제
- **예약 현황 모니터링** - 실시간 예약 상태 확인
- **면허증 승인 관리** - 사용자 면허증 검토 및 승인
- **공지사항 관리** - 카테고리별 공지사항 작성, 수정, 삭제
- **챗봇 학습 데이터 관리** - AI 응답 품질 향상

### 🤖 AI 챗봇 기능
- **자연어 처리** - Google Gemini API 기반 대화
- **의도 분류** - 머신러닝 기반 사용자 의도 파악
- **세션 관리** - 대화 컨텍스트 유지
- **실시간 응답** - 즉시 고객 문의 처리
- **성능 모니터링** - 응답 품질 및 정확도 추적

### 📋 OCR 기능
- **운전면허증 인식** - 면허 정보 자동 인식
- **신용카드 인식** - 결제 정보 입력 지원

## 🛠 기술 스택

### Backend (Spring Boot)
- **Framework**: Spring Boot 2.7+
- **Language**: Java 17
- **Database**: Oracle Database
- **Authentication**: JWT, Kakao OAuth 2.0
- **OCR**: EasyCodef API

### AI Chatbot Backend (Flask)
- **Framework**: Flask
- **Language**: Python 3.13
- **AI**: Google Gemini API (Vertex AI)
- **ML**: Scikit-learn, TensorFlow
- **Features**: AutoML, Intent Classification, Session Management

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Styled Components
- **State Management**: Redux Toolkit
- **Icons**: React Icons, Phosphor Icons
- **HTTP Client**: Axios

## 📁 프로젝트 구조

```
moca/
├── back/                           # Spring Boot 백엔드
│   ├── src/main/java/com/moca/app/
│   │   ├── config/                 # 설정 클래스
│   │   ├── controller/             # REST API 컨트롤러
│   │   ├── service/                # 비즈니스 로직
│   │   ├── login/                  # 인증 관련
│   │   └── ocr/                    # OCR 관련
│   ├── src/main/resources/
│   │   ├── db/                     # 데이터베이스 스크립트
│   │   └── js/                     # JavaScript 유틸리티
│   └── src/test/                   # 테스트 코드
├── chatbot-back/                   # Flask AI 챗봇 백엔드
│   ├── app.py                      # Flask 애플리케이션
│   ├── requirements.txt            # Python 의존성
│   ├── models/                     # ML 모델 저장소
│   └── templates/                  # HTML 템플릿
├── front/                          # React 프론트엔드
│   ├── src/
│   │   ├── components/             # React 컴포넌트
│   │   │   ├── notices/            # 공지사항 컴포넌트
│   │   │   ├── reservation/        # 예약 관련 컴포넌트
│   │   │   └── chatbot/            # 챗봇 컴포넌트
│   │   ├── pages/                  # 페이지 컴포넌트
│   │   ├── contexts/               # React Context
│   │   └── utils/                  # 유틸리티 함수
│   └── public/                     # 정적 파일
└── README.md
```

## ⚙️ 설치 및 실행

### 사전 요구사항
- Java 17 이상
- Node.js 16 이상
- Python 3.13
- Oracle Database
- Git

### 1. 프로젝트 클론
```bash
git clone <repository-url>
cd moca
```

### 2. 데이터베이스 설정
Oracle 데이터베이스에 다음 스크립트를 실행하여 테이블을 생성합니다:
```bash
# 렌탈 시스템 테이블 생성
@back/src/main/resources/db/rental.sql

# 공지사항 테이블 생성
@back/src/main/resources/db/notices.sql
```

### 3. Spring Boot 백엔드 설정
```bash
cd back

# application.properties 파일 설정
cp src/main/resources/application.properties.example src/main/resources/application.properties
```

`application.properties` 파일에서 다음 설정을 수정하세요:
```properties
# 데이터베이스 설정
spring.datasource.url=jdbc:oracle:thin:@localhost:1521:xe
spring.datasource.username=your_username
spring.datasource.password=your_password

# 카카오 OAuth 설정
kakao.client.id=your_kakao_client_id
kakao.client.secret=your_kakao_client_secret

# JWT 설정
jwt.secret=your_jwt_secret_key
```

### 4. EasyCodef OCR API 설정
`back/src/main/java/com/moca/app/ocr/api/EasyCodefClientInfo.java` 파일에서 API 정보를 설정하세요:
```java
public static final String CLIENT_ID = "your_codef_client_id";
public static final String CLIENT_SECRET = "your_codef_client_secret";
public static final String PUBLIC_KEY = "your_codef_public_key";
```

### 5. Flask 챗봇 백엔드 설정
```bash
cd chatbot-back

# Python 가상환경 생성 및 활성화
python -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate  # Windows

# 의존성 설치
pip install -r requirements.txt

# Google Cloud 인증 설정
# application_default_credentials.json 파일을 chatbot-back/ 디렉토리에 배치
```

### 6. 백엔드 실행

**Spring Boot 서버 실행 (포트 8080)**
```bash
cd back
./gradlew bootRun
```

**Flask 챗봇 서버 실행 (포트 5000)**
```bash
cd chatbot-back
python app.py
```

### 7. 프론트엔드 실행
새 터미널에서:
```bash
cd front

# 의존성 설치
npm install

# 개발 서버 실행 (포트 3000)
npm run dev
```

## 🌐 API 엔드포인트

### Spring Boot API (포트 8080)

#### 인증
- `POST /api/auth/kakao` - 카카오 로그인
- `POST /api/auth/refresh` - 토큰 갱신

#### 사용자 관리
- `GET /api/users/profile` - 사용자 프로필 조회
- `PUT /api/users/profile` - 사용자 프로필 수정

#### 차량 관리
- `GET /api/cars` - 차량 목록 조회
- `GET /api/cars/{id}` - 특정 차량 조회
- `POST /api/cars` - 차량 등록 (관리자)
- `PUT /api/cars/{id}` - 차량 수정 (관리자)
- `DELETE /api/cars/{id}` - 차량 삭제 (관리자)

#### 예약 관리
- `GET /api/reservations` - 예약 목록 조회
- `GET /api/reservations/my-reservations` - 내 예약 현황 조회
- `POST /api/reservations` - 예약 생성
- `PUT /api/reservations/{id}` - 예약 수정
- `PUT /api/reservations/{id}/cancel` - 예약 취소
- `DELETE /api/reservations/{id}` - 예약 삭제

#### 면허증 관리
- `POST /api/licenses` - 면허증 등록
- `GET /api/licenses/{id}` - 면허증 조회
- `PUT /api/licenses/{id}/approve` - 면허증 승인 (관리자)

#### OCR
- `POST /api/ocr/process` - OCR 처리

#### 공지사항
- `GET /api/notices` - 공지사항 목록 조회
- `GET /api/notices/{id}` - 특정 공지사항 조회
- `POST /api/notices` - 공지사항 생성 (관리자)
- `PUT /api/notices/{id}` - 공지사항 수정 (관리자)
- `DELETE /api/notices/{id}` - 공지사항 삭제 (관리자)

#### FAQ
- `GET /api/faqs` - FAQ 목록 조회
- `GET /api/faqs/{id}` - 특정 FAQ 조회

### Flask 챗봇 API (포트 5000)

#### 챗봇 서비스
- `GET /` - 챗봇 서버 상태 확인
- `GET /test` - 테스트 엔드포인트
- `POST /get_response` - 챗봇 응답 요청
- `POST /feedback` - 챗봇 응답 피드백
- `GET /session/{session_id}` - 특정 세션 조회
- `GET /sessions` - 모든 세션 조회

#### 챗봇 요청 예시
```json
{
  "message": "차량 예약하고 싶어요",
  "session_id": "optional_session_id"
}
```

## 🧪 테스트

### Spring Boot 백엔드 테스트
```bash
cd back
./gradlew test
```

### React 프론트엔드 테스트
```bash
cd front
npm test
```

### Flask 챗봇 테스트
```bash
cd chatbot-back
python -m pytest tests/  # 테스트 파일이 있는 경우
```

## 🚀 배포

### Spring Boot 백엔드 빌드
```bash
cd back
./gradlew build

# JAR 파일 실행
java -jar build/libs/app-0.0.1-SNAPSHOT.jar
```

### React 프론트엔드 빌드
```bash
cd front
npm run build

# 빌드된 파일이 dist/ 디렉토리에 생성됩니다
```

### Flask 챗봇 프로덕션 실행
```bash
cd chatbot-back

# Gunicorn을 사용한 프로덕션 실행
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## 🔧 환경 변수

### Spring Boot 백엔드
- `DB_URL` - 데이터베이스 URL
- `DB_USERNAME` - 데이터베이스 사용자명
- `DB_PASSWORD` - 데이터베이스 비밀번호
- `KAKAO_CLIENT_ID` - 카카오 클라이언트 ID
- `KAKAO_CLIENT_SECRET` - 카카오 클라이언트 시크릿
- `JWT_SECRET` - JWT 비밀키
- `CODEF_CLIENT_ID` - EasyCodef 클라이언트 ID
- `CODEF_CLIENT_SECRET` - EasyCodef 클라이언트 시크릿

### Flask 챗봇 백엔드
- `GOOGLE_APPLICATION_CREDENTIALS` - Google Cloud 서비스 계정 키 파일 경로
- `PROJECT_ID` - Google Cloud 프로젝트 ID
- `LOCATION` - Vertex AI 지역 설정

### React 프론트엔드
- `VITE_API_BASE_URL` - API 서버 기본 URL
- `VITE_CHATBOT_API_URL` - 챗봇 API 서버 URL
- `VITE_KAKAO_APP_KEY` - 카카오 앱 키

## 🆕 최신 업데이트 (v2.0)
- AI 챗봇 시스템 - Google Gemini 기반 실시간 고객 지원
### 새로운 기능
- **AI 챗봇 시스템** - Google Gemini 기
