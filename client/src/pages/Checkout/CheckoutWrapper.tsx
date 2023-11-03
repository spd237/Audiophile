import { Navigate } from 'react-router-dom';

function CheckoutWrapper({ children }: { children: JSX.Element }) {
  if (localStorage.getItem('sb-gfgywzotuybpcpuqczfi-auth-token')) {
    return children;
  }
  return <Navigate to="/auth" />;
}

export default CheckoutWrapper;
