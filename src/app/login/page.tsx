import Link from "next/link";
import { login, signup } from "./actions";

export default function About() {
  return (
    <div className="p-4 items-center justify-center flex">
      <div className="bg-gray-700 w-[600px] rounded-md p-3 py-7">
        <h1 className="text-xl mb-4">Login Account</h1>
        <form action="">
          <div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email">Email / Username</label>
              <input
                id="email" name="email" type="email" 
                placeholder="email"
                className="p-2 rounded-md text-gray-600"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <label htmlFor="password">Password</label>
              <input
                id="password" name="password" type="password" required 
                placeholder="Password"
                className="p-2 rounded-md text-gray-600"
              />
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="mt-6">
                <div>
                <button
                    formAction={login}
                  type="submit"
                  className="bg-orange-500 p-2 min-w-[130px] rounded-md block"
                >
                  Login
                </button>
                </div>
              </div>
              <div className="mt-5">
                <Link href="/">Back to Home</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
