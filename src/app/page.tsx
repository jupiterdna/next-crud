import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4 items-center justify-center flex flex-col">
      <div className="w-full flex justify-end mb-6 px-7">
        <Link href={'/login'} className="self-end">Login Account</Link>
      </div>
      <h1 className="text-xl mb-4">Home Page</h1>
      <div>eee</div>
    </main>
  );
}
