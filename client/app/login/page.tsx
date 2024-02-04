import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
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
              required
              placeholder="Enter your email address"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              name="password"
              placeholder="********"
              className="w-full p-2 border border-gray-300 rounded"
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
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded"
            >
              Login
            </button>
          </div>
        </form>
        {/* register */}
        <div className="">
          <p className="text-center gap-4">
            Don't have an account?
            <Link
              href="/register"
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
