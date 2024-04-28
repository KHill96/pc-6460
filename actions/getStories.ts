import { Story } from "@/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { headers, cookies } from "next/headers"

const getStories = async(): Promise<Story[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })
    const { data, error } = await (await supabase.from('stories').select('*').order('created_at', {ascending: false}).limit(8))
    
    if (error) console.log(error)
    // console.log(data)
    return (data as any) || []
}

export default getStories