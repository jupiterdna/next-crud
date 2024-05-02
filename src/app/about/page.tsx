import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';


export default async function About() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore);

    const { data: props } = await supabase.from("tbl_properties").select();

    console.log("properties", props)

    return(
        <div>
            <h1>About</h1>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
    )
}