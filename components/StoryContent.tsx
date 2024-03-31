"use client" 
import { Story } from "@/types"
import parse from 'html-react-parser' 
import Image from "next/image"

import LikeButton from "./LikeButton"
import Link from "next/link"
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
                        <span className="text-md">
                            {details.description}
                        </span>
                    </div>
                    <div className="flex flex-row gap-4 pt-5">
                        <Link className="text-lg my-auto py-2 rounded-lg px-2 bg-neutral-400/10 scale-100 hover:bg-neutral-400/20 hover:scale-110 transition" href={'/render/'+details.id}>
                               <span>Read Now</span>
                        </Link>
                        <Link href={details.epub_url} className="text-lg my-auto py-2 rounded-lg px-2 bg-neutral-400/10 scale-100 hover:bg-neutral-400/20 hover:scale-110 transition"> <span> Download epub</span>  </Link>
                        <Link href={details.pdf_url} className="text-lg my-auto py-2 rounded-lg px-2 bg-neutral-400/10 scale-100 hover:bg-neutral-400/20 hover:scale-110 transition"> <span> Download pdf</span>  </Link>

                        <div className="pb-10">
                            <LikeButton storyId={details.id}/>
                        </div>  
                </div>
                    </div>
            </div>
            <div className="py-5"></div>
                        
        </div>
    );
}
export default StoryContent;