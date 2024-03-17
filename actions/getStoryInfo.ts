import { Story } from "@/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const getStoryInfo = async(id: string | null): Promise<Story[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })
    const { data, error } = await supabase.from('stories').select('*').order('created_at', {ascending: false}).eq("id",id)
    
    if (error) console.log(error)
    
    return (data as any) || []
}

export default getStoryInfo