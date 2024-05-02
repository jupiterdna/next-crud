'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'


export async function submitForm(formData: FormData) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const property_name =formData.get('property_name') as string
  const description =formData.get('description') as string

    const { data, error } = await supabase.from('tbl_properties').insert([
        {
          property_name: property_name,
          description: description,
          user_id: 'a62a0c45-7965-4394-b2fa-c680c1c70571'
        }
      ])


  console.log("data", data, error)
  redirect('/properties')
}

export const handleDelete = async (id: string) => { 
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
    const { error } = await supabase.from('tbl_properties').delete().eq('id', id)
    if (error) {
      console.error('error', error)
    }
    return null
  }


  export const UpdateProperties = async (id: string) => { 
    const cookieStore = cookies()
  const supabase = createClient(cookieStore)
    const { data, error } = await supabase.from('tbl_properties').update({ property_name: 'updated' }).eq('id', id)
    if (error) {
      console.error('error', error)
    }
    return null
  }
