"use client" 
import { Story } from "@/types"
import parse from 'html-react-parser' 
import Image from "next/image"

import LikeButton from "./LikeButton"
interface StoryContentPropts {
    details: Story,
}



const StoryContent:React.FC<StoryContentPropts> = ({details}) => {
    return ( 
        <div className="pt-10 flex-column">
            <div className="flex">
                <Image 
                    src={details.cover_url}
                    alt={details.title}
                    width={240}
                    height={400}
                    className="px-5 object-cover"
                />
                <div>
                    <div>
                        <span className="md:text-4xl sm:text-white">{details.title} </span>
                    </div>
                    <div className="pt-2">
                        <span className="text-2xl text-neutral-400">By</span>
                    </div>
                    <div className="pt-2">
                        <span className="md:text-2xl sm:text-white">{details.author} </span>
                    </div>
                    <div>
                        <span className="text-xs">
                            {details.description}
                        </span>
                    </div>
                    <div className="pt-4 pb-10">
                            <LikeButton storyId={details.id}/>
                    </div>
                   
                </div>
            
            </div>
            <div className="py-5"></div>
            <div className="pt-15 m-auto overflow-y-scroll h-80 w-10/12">
                {parse(details.text)}
            </div>            
        </div>
    );
}
export default StoryContent;