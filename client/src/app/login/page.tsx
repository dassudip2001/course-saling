"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex mt-[15%]  md:mt-[10%] ml-[40%]">
      <div className="w-1/2 bg-gray-200 p-8 dark:bg-slate-600 md:w-1/3">
        {/* logo */}
        <div className="mb-2">
          <Image
            src="/vercel.svg"
            alt="logo"
            width="80"
            height="80"
            className=" mx-auto rounded"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
              placeholder="Enter your email address"
              className="w-full p-2 border border-gray-300 rounded  bg-slate-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
              name="password"
              placeholder="********"
              className="w-full p-2 border border-gray-300 rounded  bg-slate-500"
            />
          </div>
          {/* forgot password */}
          <div className="flex">
            {/* checkbox */}
            <div className="flex items-center mb-4 me-6">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="mr-2"
              />
              <label htmlFor="remember" className="text-sm">
                Remember me
              </label>
            </div>
            <div className="mb-4 float-end">
              <Link href="/dashboard" className="text-blue-500">
                Forgot your password?
              </Link>
            </div>
          </div>
          <div className="mb-4">
            <button
              type="button"
              onClick={onLogin}
              className="w-full bg-blue-500 text-white p-3 rounded"
            >
              {buttonDisabled ? "Login" : "Login"}
            </button>
          </div>
        </form>
        {/* register */}
        <div className="">
          <p className="text-center gap-4">
            Don't have an account?
            <Link
              href="/signup"
              style={{
                marginLeft: "0.5rem",
              }}
              className="text-blue-500 gap-x-4"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
