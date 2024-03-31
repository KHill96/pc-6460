import { Story } from "@/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const getStoryHTML = async(id: string | null): Promise<Story[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })
    const { data, error } = await supabase.from('stories').select('text, title, author').order('created_at', {ascending: false}).eq("id",id)
    
    if (error) console.log(error)
    
    return (data as any) || []
}

export default getStoryHTML