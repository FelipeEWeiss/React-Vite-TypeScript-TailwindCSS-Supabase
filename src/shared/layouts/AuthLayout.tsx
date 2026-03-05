import { Outlet } from 'react-router-dom';
import BackgroundImg from '../../assets/background.jpg';
import ReactImg from '../../assets/react.svg';

export const AuthLayout = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <div className="flex flex-col border border-gray-300 absolute w-100 rounded-xl p-8 gap-4 bg-white right-[10%] top-1/2 -translate-y-1/2">
        <div className="flex gap-2 items-center">
          <img src={ReactImg} />
          <h3 className="font-medium text-xl text-gray-900">App name</h3>
        </div>

        <Outlet />
      </div>
    </div>
  );
};
