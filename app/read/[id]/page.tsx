import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "@/components/PageContent";
import getStories from "@/actions/getStories";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";

import { useRouter } from "next/navigation";
import StoryContent from "@/components/StoryContent";
import getStoryInfo from "@/actions/getStoryInfo";

export const revalidate = 0;

export default async function Read({params} : {params: {id:string}}) {
    const storyDetails = await getStoryInfo(params.id)
    const story = storyDetails[0]
    return (

        <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        
        <Header className="">
            <div className="mb-4"></div>
        </Header>
        <div className="mt-2 mb-7 px-6">
        <div>          
            <StoryContent details={story} />
        </div>
        </div>
        </div>
    )
}