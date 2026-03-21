import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignIn } from '../features/auth/pages/SignIn';
import { SignUp } from '../features/auth/pages/SignUp';
import { ForgotPassword } from '../features/auth/pages/ForgotPassword';

import { ProtectedRoute } from '../shared/components/ProtectedRoute';
import { MainLayout } from '../shared/layouts/MainLayout';
import { AuthLayout } from '../shared/layouts/AuthLayout';
// import { DashboardPage } from '../features/dashboard/pages/DashboardPage';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout>
              {/* <DashboardPage /> */}
              <div>
                <h1>Main</h1>
              </div>
            </MainLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);
