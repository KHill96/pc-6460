"use client"

import StoryItem from "@/components/StoryItem"
import { Story } from "@/types"

interface PageContentProps {
    stories: Story[]
}

const PageContent:React.FC<PageContentProps> = ({stories}) => {
    // If our returned stories list == 0
    if (stories.length === 0){
        return (
            <div className="mt-4 text-neutral-400">
                Stories Unavailable
            </div>
        )
    }


    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
            {stories.map((item) => (
                <StoryItem key={item.id} data={item} />
            ))}
        </div>
    );
}
 
export default PageContent;