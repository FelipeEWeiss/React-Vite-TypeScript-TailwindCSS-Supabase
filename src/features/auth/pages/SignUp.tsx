import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@felipeeweiss/react-toast-message';
import { z } from 'zod';
import { Button } from '../../../shared/components/Button';
import { useAuth } from '../hooks/useAuth';

const signUpSchema = z
  .object({
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmationPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmationPassword, {
    message: "Passwords don't match",
    path: ['confirmationPassword'],
  });

export const SignUp = () => {
  const { signUp } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmationPasswordRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    const data = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      confirmationPassword: confirmationPasswordRef.current?.value,
    };

    const result = signUpSchema.safeParse(data);

    if (!result.success) {
      const errorMessage = result.error.issues[0].message;
      addToast(errorMessage);
      return;
    }

    try {
      await signUp(result.data.email, result.data.password);
      navigate('/signin');
    } catch {
      addToast('Error creating account. Please, try again.', 'error');
    }
  }

  return (
    <>
      <div>
        <h1 className="font-bold text-3xl pb-1">Sign Up</h1>
        <h2 className="font-extralight text-lg text-gray-500">
          Create a new account to access your workspace
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

        <div className="flex flex-col gap-0.5">
          <label className="font-semibold text-sm text-gray-900">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            className="border border-gray-300 rounded-lg p-3 text-sm text-gray-700"
          />
        </div>

        <div className="flex flex-col gap-0.5">
          <label className="font-semibold text-sm text-gray-900">
            Confirm your Password
          </label>
          <input
            ref={confirmationPasswordRef}
            type="password"
            className="border border-gray-300 rounded-lg p-3 text-sm text-gray-700"
          />
        </div>

        <Button type="submit" text="Sign Up" />
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
