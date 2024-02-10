import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full p-4 mx-auto bg-red-200 dark:bg-gray-800">
      <div className="flex items-center gap-x-4 ml-3">
        <Link
          href="/dashboard"
          className="mr-5 text-xl font-bold text-gray-800 dark:text-white"
        >
          Dev
          <span className="ml-4 text-gray-800 dark:text-white">
            Challenges.io
          </span>
        </Link>
      </div>
      <div className="">
        <ThemeToggle />
      </div>
    </nav>
  );
}
