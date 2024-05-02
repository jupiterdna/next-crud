import { redirect } from "next/navigation";
import { createClient } from "../supabase/server";
import { cookies } from "next/headers";

export const getUser = async () => {
    const cookieStore = cookies()
  const supabase = createClient(cookieStore)
    const { data: user, error } = await supabase.auth.getUser();
    if (error || !user?.user) {
        redirect("/login");
        return null;
    }

    const { data: userdata } = await supabase
    .from("tbl_users")
    .select().eq("user_id", user.user.id)
    
    return userdata ? {
        auth: user?.user,
        meta: userdata[0]
    } : {};
    

}