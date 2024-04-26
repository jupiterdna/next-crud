import { createClient } from '@/utils/supabase/server';


export default async function About() {

    const supabase = createClient();

    const { data: props } = await supabase.from("tbl_properties").select();

    console.log("properties", props)

    return(
        <div>
            <h1>About</h1>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
    )
}