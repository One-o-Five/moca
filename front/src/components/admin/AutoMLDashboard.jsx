import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AutoMLDashboard = () => {
  const [stats, setStats] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [retraining, setRetraining] = useState(false);
  const [error, setError] = useState(null);
  const [selectedSession, setSelectedSession] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const apiCall = async (endpoint, options = {}) => {
    const baseURL =
      process.env.NODE_ENV === 'development'
        ? 'https://moca8.com/'
        : 'https://moca8.com/';

    const response = await fetch(`${baseURL}${endpoint}`, {
      timeout: 30000,
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  };

  const loadData = async () => {
    setLoading(true);
    setError(null);

    try {
      const [statsRes, sessionsRes] = await Promise.all([
        apiCall('/ml_stats'),
        apiCall('/sessions'),
      ]);

      setStats(statsRes);
      setSessions(sessionsRes.sessions || []);
    } catch (err) {
      console.error('데이터 로드 실패:', err);
      setError('데이터를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleRetrain = async () => {
    try {
      setRetraining(true);
      const response = await apiCall('/retrain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 'retrain completed') {
        alert('모델 재훈련이 완료되었습니다!');
        loadData();
      } else {
        alert('재훈련에 실패했습니다: ' + response.error);
      }
    } catch (err) {
      console.error('재훈련 실패:', err);
      alert('재훈련 중 오류가 발생했습니다.');
    } finally {
      setRetraining(false);
    }
  };

  const viewSessionDetails = (session) => {
    setSelectedSession(session);
    setShowModal(true);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleString('ko-KR');
  };

  const getAccuracyColor = (accuracy) => {
    if (accuracy >= 0.8) return '#10b981';
    if (accuracy >= 0.6) return '#f59e0b';
    return '#ef4444';
  };

  const getPerformanceLevel = (accuracy) => {
    if (accuracy >= 0.8) return '우수';
    if (accuracy >= 0.6) return '보통';
    return '개선필요';
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <MobileContainer>
        <PageHeader>
          <PageTitle>AutoML 관리</PageTitle>
        </PageHeader>
        <LoadingContainer>
          {[...Array(4)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </LoadingContainer>
      </MobileContainer>
    );
  }

  return (
    <MobileContainer>
      <PageHeader>
        <PageTitle>AutoML 관리</PageTitle>
        <TotalCount>활성 세션 {sessions.length}개</TotalCount>
      </PageHeader>

      <FilterSection>
        <RefreshButton onClick={loadData} disabled={loading}>
          🔄 새로고침
        </RefreshButton>
      </FilterSection>

      {error && <ErrorMessage>⚠️ {error}</ErrorMessage>}

      {/* 통계 카드 영역 */}
      <StatsGrid>
        <StatCard>
          <StatHeader>
            <StatIcon>📚</StatIcon>
            <StatTitle>훈련 데이터</StatTitle>
          </StatHeader>
          <StatValue>{stats?.training_data_count || 0}</StatValue>
          <StatUnit>개 샘플</StatUnit>
        </StatCard>

        <StatCard>
          <StatHeader>
            <StatIcon>🎯</StatIcon>
            <StatTitle>예측 정확도</StatTitle>
          </StatHeader>
          <StatValue
            style={{ color: getAccuracyColor(stats?.recent_accuracy || 0) }}
          >
            {((stats?.recent_accuracy || 0) * 100).toFixed(1)}%
          </StatValue>
          <StatUnit
            style={{ color: getAccuracyColor(stats?.recent_accuracy || 0) }}
          >
            {getPerformanceLevel(stats?.recent_accuracy || 0)}
          </StatUnit>
        </StatCard>

        <StatCard>
          <StatHeader>
            <StatIcon>💬</StatIcon>
            <StatTitle>총 예측 수</StatTitle>
          </StatHeader>
          <StatValue>{stats?.prediction_count || 0}</StatValue>
          <StatUnit>회 처리</StatUnit>
        </StatCard>

        <StatCard>
          <StatHeader>
            <StatIcon>📈</StatIcon>
            <StatTitle>피드백 데이터</StatTitle>
          </StatHeader>
          <StatValue>{stats?.feedback_count || 0}</StatValue>
          <StatUnit>개 수집</StatUnit>
        </StatCard>
      </StatsGrid>

      {/* 모델 재훈련 카드 */}
      <ActionCard>
        <ActionHeader>
          <ActionIcon>🤖</ActionIcon>
          <ActionTitle>모델 재훈련</ActionTitle>
        </ActionHeader>
        <ActionDescription>
          새로운 데이터로 AI 모델을 재훈련하여 성능을 향상시킵니다.
        </ActionDescription>
        <ActionButton onClick={handleRetrain} disabled={retraining}>
          {retraining ? '재훈련 중...' : '🚀 모델 재훈련 시작'}
        </ActionButton>
      </ActionCard>

      {/* 활성 세션 목록 */}
      <SessionList>
        {sessions.length === 0 ? (
          <EmptyState>
            <EmptyIcon>💤</EmptyIcon>
            <EmptyText>현재 활성 세션이 없습니다.</EmptyText>
          </EmptyState>
        ) : (
          sessions.map((session) => (
            <SessionCard
              key={session.session_id}
              onClick={() => viewSessionDetails(session)}
            >
              <CardHeader>
                <SessionInfo>
                  <SessionId>
                    세션 ID: {session.session_id.slice(-12)}...
                  </SessionId>
                  <SessionMeta>메시지 {session.message_count}개</SessionMeta>
                </SessionInfo>
                <StatusBadge type={session.is_expired ? 'error' : 'success'}>
                  {session.is_expired ? '⏰ 만료됨' : '🟢 활성'}
                </StatusBadge>
              </CardHeader>
              <SessionDetails>
                <DetailItem>
                  <DetailLabel>생성 시간:</DetailLabel>
                  <DetailValue>{formatDate(session.created_at)}</DetailValue>
                </DetailItem>
                <DetailItem>
                  <DetailLabel>마지막 활동:</DetailLabel>
                  <DetailValue>{formatDate(session.last_activity)}</DetailValue>
                </DetailItem>
              </SessionDetails>
            </SessionCard>
          ))
        )}
      </SessionList>

      {/* 세션 상세 모달 */}
      {showModal && selectedSession && (
        <Modal onClick={() => setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>세션 상세 정보</ModalTitle>
              <CloseButton onClick={() => setShowModal(false)}>✕</CloseButton>
            </ModalHeader>
            <ModalBody>
              <SessionDetailGrid>
                <DetailRow>
                  <DetailLabel>세션 ID:</DetailLabel>
                  <DetailValue>{selectedSession.session_id}</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>메시지 수:</DetailLabel>
                  <DetailValue>{selectedSession.message_count}개</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>생성 시간:</DetailLabel>
                  <DetailValue>
                    {formatDate(selectedSession.created_at)}
                  </DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>마지막 활동:</DetailLabel>
                  <DetailValue>
                    {formatDate(selectedSession.last_activity)}
                  </DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>상태:</DetailLabel>
                  <DetailValue>
                    <StatusBadge
                      type={selectedSession.is_expired ? 'error' : 'success'}
                    >
                      {selectedSession.is_expired ? '⏰ 만료됨' : '🟢 활성'}
                    </StatusBadge>
                  </DetailValue>
                </DetailRow>
              </SessionDetailGrid>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </MobileContainer>
  );
};

export default AutoMLDashboard;

// Moca Color Scheme Mobile-First Styled Components (기존 패턴 동일)
const MobileContainer = styled.div`
  padding: 0;
  background: transparent;
  width: 100%;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const PageTitle = styled.h1`
  margin: 0;
  color: #5d4037; /* Moca: Dark Brown */
  font-size: 1.5rem;
  font-weight: 700;
`;

const TotalCount = styled.div`
  background: linear-gradient(
    135deg,
    #a47551,
    #795548
  ); /* Moca: Primary to Medium Brown */
  color: white;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(164, 117, 81, 0.3); /* Moca: Shadow */
`;

const FilterSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;
`;

const RefreshButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background: #f7f5f3; /* Moca: Light Background */
  color: #5d4037; /* Moca: Dark Brown */
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */

  &:hover {
    background: #e7e0d9; /* Moca: Beige Border */
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  background: #fef2f2;
  color: #dc2626;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  border: 1px solid #fecaca;
  font-size: 0.9rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkeletonCard = styled.div`
  height: 100px;
  background: linear-gradient(
    90deg,
    #f5f1ed 25%,
    #e7e0d9 50%,
    #f5f1ed 75%
  ); /* Moca: Light Colors */
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 16px;

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

// 통계 카드 관련
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
`;

const StatCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 16px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  box-shadow: 0 4px 12px rgba(164, 117, 81, 0.08); /* Moca: Shadow */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(164, 117, 81, 0.15); /* Moca: Shadow */
  }
`;

const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const StatIcon = styled.span`
  font-size: 1.2rem;
`;

const StatTitle = styled.div`
  font-size: 0.8rem;
  color: #795548; /* Moca: Medium Brown */
  font-weight: 600;
`;

const StatValue = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: #5d4037; /* Moca: Dark Brown */
  margin-bottom: 4px;
`;

const StatUnit = styled.div`
  font-size: 0.7rem;
  color: #795548; /* Moca: Medium Brown */
  font-weight: 500;
`;

// 액션 카드
const ActionCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  box-shadow: 0 4px 12px rgba(164, 117, 81, 0.08); /* Moca: Shadow */
  margin-bottom: 20px;
`;

const ActionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

const ActionIcon = styled.span`
  font-size: 1.5rem;
`;

const ActionTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #5d4037; /* Moca: Dark Brown */
`;

const ActionDescription = styled.div`
  font-size: 0.85rem;
  color: #795548; /* Moca: Medium Brown */
  margin-bottom: 16px;
  line-height: 1.4;
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(
    135deg,
    #a47551,
    #795548
  ); /* Moca: Primary to Medium Brown */
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: linear-gradient(135deg, #795548, #6d4c41);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(164, 117, 81, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

// 세션 목록
const SessionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SessionCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  box-shadow: 0 4px 12px rgba(164, 117, 81, 0.08); /* Moca: Shadow */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(164, 117, 81, 0.15); /* Moca: Shadow */
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SessionInfo = styled.div`
  flex: 1;
`;

const SessionId = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #5d4037; /* Moca: Dark Brown */
  margin-bottom: 4px;
  font-family: 'Monaco', 'Menlo', monospace;
`;

const SessionMeta = styled.div`
  font-size: 0.8rem;
  color: #795548; /* Moca: Medium Brown */
  font-weight: 500;
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  background: ${(props) => (props.type === 'success' ? '#d1fae5' : '#fecaca')};
  color: ${(props) => (props.type === 'success' ? '#065f46' : '#991b1b')};
  border: 1px solid
    ${(props) => (props.type === 'success' ? '#a7f3d0' : '#fca5a5')};
`;

const SessionDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailLabel = styled.span`
  font-size: 0.8rem;
  color: #795548; /* Moca: Medium Brown */
  font-weight: 500;
`;

const DetailValue = styled.span`
  font-size: 0.8rem;
  color: #5d4037; /* Moca: Dark Brown */
  font-weight: 600;
`;

// 빈 상태
const EmptyState = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 40px 20px;
  border: 1px solid #e7e0d9; /* Moca: Beige Border */
  text-align: center;
`;

const EmptyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 12px;
`;

const EmptyText = styled.div`
  font-size: 1rem;
  color: #795548; /* Moca: Medium Brown */
`;

// 모달
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #ffffff;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 0 20px;
  border-bottom: 1px solid #e7e0d9; /* Moca: Beige Border */
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: #5d4037; /* Moca: Dark Brown */
  font-size: 1.2rem;
  font-weight: 700;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #795548; /* Moca: Medium Brown */
  padding: 4px;

  &:hover {
    color: #5d4037; /* Moca: Dark Brown */
  }
`;

const ModalBody = styled.div`
  padding: 0 20px 20px 20px;
`;

const SessionDetailGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f5f1ed; /* Moca: Light */

  &:last-child {
    border-bottom: none;
  }
`;
