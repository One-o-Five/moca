import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import RentalAdminDashboard from './RentalAdminDashboard.jsx';
import AdminReservationManagement from './AdminReservationManagement.jsx';
import AdminUserManagement from './AdminUserManagement.jsx';
import AdminVehicleManagement from './AdminVehicleManagement.jsx';
import AutoMLDashboard from './AutoMLDashboard.jsx';

// 임시 컴포넌트
const Placeholder = ({ title }) => (
  <PlaceholderContainer>
    <h2>{title}</h2>
    <p>이 페이지는 현재 개발 중입니다.</p>
  </PlaceholderContainer>
);

function AdminDashboard() {
  return (
    <MobileContainer>
      <MobileNav>
        <NavTitle>MOCA 관리자</NavTitle>
        <TabNavigation>
          <StyledNavLink to="/admin" end>
            대시보드
          </StyledNavLink>
          <StyledNavLink to="/admin/reservations">예약관리</StyledNavLink>
          <StyledNavLink to="/admin/users">사용자</StyledNavLink>
          <StyledNavLink to="/admin/vehicles">차량관리</StyledNavLink>
          <StyledNavLink to="/admin/automl">AutoML</StyledNavLink>
        </TabNavigation>
      </MobileNav>

      <MobileContent>
        <Routes>
          <Route index element={<RentalAdminDashboard />} />
          <Route path="reservations" element={<AdminReservationManagement />} />
          <Route path="users" element={<AdminUserManagement />} />
          <Route path="vehicles" element={<AdminVehicleManagement />} />
          <Route path="automl" element={<AutoMLDashboard />} />
        </Routes>
      </MobileContent>
    </MobileContainer>
  );
}

export default AdminDashboard;

// 수정된 스타일 컴포넌트들
const MobileContainer = styled.div`
  min-height: 100vh;
  background: #f7f5f3; /* Moca: Light Background */
  display: flex;
  flex-direction: column;
`;

// ✅ 상단 고정 제거 및 패딩 줄임
const MobileNav = styled.div`
  background: #ffffff;
  padding: 12px 16px; /* 패딩 줄임 */
  box-shadow: 0 2px 8px rgba(164, 117, 81, 0.1); /* 그림자 줄임 */
  position: relative; /* sticky 제거 */
  z-index: 50; /* z-index 낮춤 */
  border-bottom: 1px solid #e7e0d9;
`;

const NavTitle = styled.h1`
  margin: 0 0 12px 0; /* 여백 줄임 */
  color: #5d4037;
  font-size: 1.3rem; /* 폰트 크기 줄임 */
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
`;

// ✅ 탭 크기 줄이고 컴팩트하게 변경
const TabNavigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 6px; /* 간격 줄임 */
  justify-content: center;

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
  }
`;

// ✅ 탭 버튼 크기 줄임
const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px; /* 패딩 대폭 줄임 */
  color: #795548;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px; /* 보더 반경 줄임 */
  text-decoration: none;
  font-weight: 500;
  font-size: 13px; /* 폰트 크기 줄임 */
  transition: all 0.2s ease;
  text-align: center;
  white-space: nowrap;
  min-width: 65px; /* 최소 너비 설정 */

  &:hover {
    background: #f5f1ed;
    color: #5d4037;
    border-color: #e7e0d9;
  }

  &.active {
    background: #a47551;
    color: #ffffff;
    border-color: #8d5f3b;
    box-shadow: 0 1px 4px rgba(164, 117, 81, 0.3); /* 그림자 줄임 */
  }

  &:active {
    transform: translateY(1px);
    transition-duration: 0.05s;
  }

  @media (max-width: 480px) {
    padding: 10px 6px;
    font-size: 12px;
    min-width: auto;
  }
`;

const MobileContent = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  background: #f7f5f3;
`;

const PlaceholderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  text-align: center;
  color: #795548;

  h2 {
    color: #5d4037;
    margin-bottom: 16px;
  }

  p {
    color: #8d6e63;
  }
`;
