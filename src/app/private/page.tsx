import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { logout } from '../auth/logout';


export default async function PrivatePage() {
  const supabase = createClient()

  const { data: peroperty, error:err } = await supabase.from("tbl_properties").select();

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  const userId = data.user.id
  const { data: userdata } = await supabase.from("tbl_users").select().eq('user_id', userId);


  return <div>
    <p>Hello {data.user.email}</p>
    {userdata[0].fullname}
    <form action="">
     <button formAction={logout}>logout account</button>
    </form>
  </div>
}