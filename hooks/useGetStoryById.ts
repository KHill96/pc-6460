import { Story } from "@/types"
import { useSessionContext } from "@supabase/auth-helpers-react"
import { useEffect, useMemo, useState } from "react"
import toast from "react-hot-toast"

const useGetStoryById = (id: string) => {
    const [isLoading, setIsLoading] = useState(false)
    const [story, setStory] = useState<Story|undefined>(undefined)
    const {supabaseClient} = useSessionContext()
    useEffect(() => {
        
        setIsLoading(true)

        const fetchAudio = async () => {

            const { data, error} = await supabaseClient.from('stories').select('*').eq('id',id).single()
            if (error){
                setIsLoading(false)
                return toast.error(error.message)
            }
            setStory(data as Story)
            setIsLoading(false)
        }
        fetchAudio()
    },[id, supabaseClient])
    
    return useMemo(() => ({
        isLoading, story
    }),[isLoading, story])
}

export default useGetStoryById