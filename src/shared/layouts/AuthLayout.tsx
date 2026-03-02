import { Outlet } from "react-router-dom";

export const AuthLayout = () => (
  <div className="min-h-screen flex bg-gray-200">
    <Outlet />
  </div>
);
