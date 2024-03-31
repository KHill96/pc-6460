"use client"

import useAuthModal from "@/hooks/useAuthModal"
import { useUser } from "@/hooks/useUser"
import { useSessionContext } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import toast from "react-hot-toast"
import { FaHeart, FaRegHeart } from "react-icons/fa"

interface LikeButtonProps {
    storyId: string
}

const LikeButton:React.FC<LikeButtonProps> = ({storyId}) => {
    const router = useRouter()
    const {supabaseClient} = useSessionContext()
    const authModal = useAuthModal()
    const {user} = useUser()

    const [isLiked, setIsLiked] = useState(false)

    useEffect (() => {
        if (!user?.id){
            return
        }
        const fetchData = async () => {
            const { data, error } = await supabaseClient.from('saved_stories').select('*').eq('user_id', user.id).eq('story_id',storyId).single()
            if(!error && data){
                setIsLiked(true)
            }
        }
        fetchData()
    }, [storyId, supabaseClient, user?.id])

    const Icon = isLiked ? FaHeart : FaRegHeart

    const handleLike = async () => {
        if (!user) return authModal.onOpen()
        if (isLiked) {
            const { error } = await supabaseClient.from('saved_stories').delete().eq('user_id', user.id).eq('story_id',storyId).single()
            if (error) toast.error(error.message)
            else setIsLiked(false)
        }
        else{
            const { error } = await supabaseClient.from('saved_stories').insert({'story_id': storyId, 'user_id':user.id})
            if (error) toast.error(error.message)
            else {
                setIsLiked(true)
                toast.success('Saved to your stories')
            }
        }
        
        router.refresh()

    }

    return (
        <button onClick={handleLike}className="absolute transition flex items-center bg-white drop-shadow-md rounded-full p-2">
            <Icon className="text-black" size={25}/>
        </button>
    );
}
 
export default LikeButton;