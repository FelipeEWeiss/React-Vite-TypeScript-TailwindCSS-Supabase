import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@felipeeweiss/react-toast-message';
import { z } from 'zod';
import { Button } from '../../../shared/components/Button';
import { useAuth } from '../hooks/useAuth';

const forgotPasswordSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
});

export const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    const data = {
      email: emailRef.current?.value,
    };

    const result = forgotPasswordSchema.safeParse(data);

    if (!result.success) {
      const errorMessage = result.error.issues[0].message;
      addToast(errorMessage);
      return;
    }

    try {
      await resetPassword(result.data.email);
      addToast(
        "We've sent you a password reset link. Please, check your inbox.",
        'success',
      );
      navigate('/signin');
    } catch {
      addToast('Error to reset your password. Please, try again.', 'error');
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
          to="/signin"
          className="font-semibold text-sm text-blue-800 hover:opacity-75 duration-200"
        >
          Sign In
        </Link>
      </div>
    </>
  );
};
