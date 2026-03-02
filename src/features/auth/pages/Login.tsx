import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "../../../shared/components/Button";
import { useAuth } from "../hooks/useAuth";
import BackgroundImg from "../../../assets/background.jpg";
import ReactImg from "../../../assets/react.svg";

export const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    
    if (!email || !password) {
      alert("All inputs must be completed");
      return;
    }

    try {
      await signIn(email, password);
      navigate("/");
    } catch {
      console.log("Error to login");
    }
  }

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

        <div>
          <h1 className="font-bold text-3xl pb-1">Welcome</h1>
          <h2 className="font-extralight text-lg text-gray-500">
            Enter your credentials to access your workspace
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
            <div className="flex justify-between">
              <label className="font-semibold text-sm text-gray-900">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="font-semibold text-xs text-blue-800 hover:opacity-75 duration-200"
              >
                Forgot Password?
              </Link>
            </div>
            <input
              ref={passwordRef}
              type="password"
              className="border border-gray-300 rounded-lg p-3 text-sm text-gray-700"
            />
          </div>

          <Button buttonType="submit" text="Sign in" />
        </form>

        <div className="flex items-center w-full my-4">
          <div className="grow border-t border-gray-300" />
          <span className="mx-4 text-sm text-gray-400">OR</span>
          <div className="grow border-t border-gray-300" />
        </div>

        <Button text="Continue with Google" variant="secondary">
          <FaGoogle className="w-5 h-5" />
        </Button>

        <Button text="Continue with GitHub" variant="secondary">
          <FaGithub className="w-5 h-5" />
        </Button>

        <div className="flex justify-center gap-1">
          <span className="text-sm text-gray-500">Don't have an account?</span>
          <Link
            to="/register"
            className="font-semibold text-sm text-blue-800 hover:opacity-75 duration-200"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};
