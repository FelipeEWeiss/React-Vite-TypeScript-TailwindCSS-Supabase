import { Outlet, useNavigate } from 'react-router-dom';
import BackgroundImg from '../../assets/background.jpg';
import ReactImg from '../../assets/react.svg';
import { useAuth } from '../../features/auth/hooks/useAuth';
import { useEffect } from 'react';

export const AuthLayout = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate('/', { replace: true });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return null;
  }

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <div className="flex flex-col border border-gray-300 absolute w-100 rounded-xl p-8 gap-4 bg-white right-[10%] top-1/2 -translate-y-1/2">
        <div className="flex gap-2 items-center">
          <img src={ReactImg} />
          <h3 className="font-medium text-xl text-gray-900">Project name</h3>
        </div>

        <Outlet />
      </div>
    </div>
  );
};
