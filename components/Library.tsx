"use client"
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import { IoLibrary } from "react-icons/io5";
const Library = () => {
    const {supabaseClient} = useSessionContext()
    const {user} = useUser()

    const [savedStories, setSavedStories] = useState([])

    useEffect(() => {
        if (!user?.id){
            return
        }
        const fetchData = async () => {
            const { data, error } = await supabaseClient.from('saved_stories').select(`user_id, stories(title, author, cover_url)`).eq('user_id',user.id)
            if(!error && data){
                console.log(error)
            }
            console.log(data)
            setSavedStories(data as [])
        }
        fetchData()

    }, [user?.id, supabaseClient])

    return ( 
        <div className="flex flex-col">
            <div className="inline-flex gap-x-2 items-center justify-between px-4 py-5">
                <IoLibrary className="text-neutral-400" size={25}/>
                <p className="text-neutral-400 font-medium text-md text-center">My Library</p>
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">
                {user ? (
                    <div>
                        {savedStories ? (
                            savedStories.map((item) => (
                             <div>{item.stories.title}</div>
                            //  <div>{item}</div>
                        ))):
                        (
                            <div>No list</div>
                        )
                        }
                    </div>
               ):(
                    <div>
                        Sign in to save the books and stories you enjoy!
                    </div>
               )}
            </div>
        </div>
     );
}
 
export default Library;