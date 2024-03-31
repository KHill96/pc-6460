import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { Story } from "@/types"
import { cookies } from "next/headers"
const getStoriesSearch = async (term: string | null): Promise<Story[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })

    const { data, error } = await supabase.from('stories').select().order('created_at', {ascending: false}).textSearch('title_author_description',``+term)
    
    if (error) console.log(error)
    // console.log(data)
    return (data as any) || []
}
 
export default getStoriesSearch;