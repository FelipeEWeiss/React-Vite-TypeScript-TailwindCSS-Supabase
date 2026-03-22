import { useNavigate } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';
import { useAuth } from '../../features/auth/hooks/useAuth';
import ReactImg from '../../assets/react.svg';

export const Header = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  async function handleSignOut() {
    await signOut();
    navigate('/signin');
  }

  return (
    <header className="w-full h-16 border-b border-gray-200 bg-white px-4 md:px-8 flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <img src={ReactImg} alt="Logo" className="w-8 h-8" />
        <h3 className="font-medium text-lg md:text-xl text-gray-900">
          Project name
        </h3>
      </div>

      <button
        onClick={handleSignOut}
        className="flex items-center gap-2 p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-red-600 transition-colors cursor-pointer"
        title="Sign out"
      >
        <span className="hidden md:inline text-sm font-medium">Sign out</span>
        <HiOutlineLogout className="w-6 h-6" />
      </button>
    </header>
  );
};
