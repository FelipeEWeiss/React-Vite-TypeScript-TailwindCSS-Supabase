import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../shared/components/Button';
import { useAuth } from '../hooks/useAuth';

export const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    const email = emailRef.current?.value;

    if (!email) {
      alert('All inputs must be completed');
      return;
    }

    try {
      await resetPassword(email);
      navigate('/login');
    } catch {
      console.log('Error to login');
    }
  }

  return (
    <>
      <div>
        <h1 className="font-bold text-3xl pb-1">Reset Password</h1>
        <h2 className="font-extralight text-lg text-gray-500">
          Enter your email details below to reset your password
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-0.5">
          <label className="font-semibold text-sm text-gray-900">Email</label>
          <input
            ref={emailRef}
            className="border border-gray-300 rounded-lg p-3 text-sm text-gray-700"
          />
        </div>

        <Button buttonType="submit" text="Reset" />
      </form>

      <div className="flex items-center w-full my-4">
        <div className="grow border-t border-gray-300" />
        <span className="mx-4 text-sm text-gray-400">OR</span>
        <div className="grow border-t border-gray-300" />
      </div>

      <div className="flex justify-center gap-1">
        <span className="text-sm text-gray-500">Already have an account?</span>
        <Link
          to="/login"
          className="font-semibold text-sm text-blue-800 hover:opacity-75 duration-200"
        >
          Sign In
        </Link>
      </div>
    </>
  );
};
