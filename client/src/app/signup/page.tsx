"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      toast("SignUp Success");
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);

      toast(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div>
      <ToastContainer />
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
                User Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded bg-slate-600"
              />
            </div>
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
                className="w-full p-2 border border-gray-300 rounded   bg-slate-600"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                name="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="********"
                className="w-full p-2 border border-gray-300 rounded  bg-slate-600"
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                onClick={onSignup}
                className="w-full bg-blue-500 text-white p-3 rounded"
              >
                {buttonDisabled ? "Sign Up" : "Sign Up"}
              </button>
            </div>
          </form>
          {/* register */}
          <div className="">
            <p className="text-center gap-4">
              have an account?
              <Link
                href="/login"
                style={{
                  marginLeft: ".5rem",
                }}
                className="text-blue-500 gap-x-4"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
