import { Story } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadStoryAudioUrl = (story: Story) => {
    if (!story) return ''
    return story.audio_url
}
 
export default useLoadStoryAudioUrl;