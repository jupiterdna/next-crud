import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";
import { cookies } from 'next/headers'

export default async function Home() {

  const cookieStore = cookies()

  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.auth.getUser()


  return (
    <main className="p-4 items-center justify-center flex flex-col">
      <div className="w-full flex justify-end mb-6 px-7">
        {data?.user ? ( <Link href={'/properties'} className="self-end">Go to Properties</Link> ) : <Link href={'/login'} className="self-end">Login Account</Link>}
        
      </div>
      <h1 className="text-xl mb-4">Home Page</h1>
      <div>eee</div>
    </main>
  );
}
