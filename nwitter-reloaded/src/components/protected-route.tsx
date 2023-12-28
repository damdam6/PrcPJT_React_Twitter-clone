//로그인 한 사용자만 볼 수 있는 페이지

import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = auth.currentUser;

  if (user === null) {
    return <Navigate to="/login" />;
  }
  return children;
}
