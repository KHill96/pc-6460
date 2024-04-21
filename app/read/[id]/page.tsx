import Header from "@/components/Header";


import StoryContent from "@/components/StoryContent";
import getStoryInfo from "@/actions/getStoryInfo";

export const revalidate = 0;

export default async function Read({params} : {params: {id:string}}) {
    const storyDetails = await getStoryInfo(params.id)
    const story = storyDetails[0]
    return (

        <div className="bg-neutral-900 rounded-lg h-full overflow-hidden overflow-y-auto">
        
        <Header className="">
            <div className="mb-4"></div>
        </Header>
        <div className="mt-2 mb-7 px-6">
        <div>          
            <StoryContent details={story}/>
        </div>
        </div>
        </div>
    )
}