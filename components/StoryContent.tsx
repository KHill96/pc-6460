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
        <>
       <div className="text-2xl">
            <p className="text-center">{details.title}</p>
       </div>
       <div className="pt-10 flex-column">
                <div className="flex">
                    <Image
                        src={details.cover_url}
                        alt={details.title}
                        width={200}
                        height={100}
                        className="px-5 object-fit max-h-[400px] max-w-[500px]" />
                    <div>
                        <div className="md:text-md sm:text-lg">
                            <span className="text-xs m-5">
                                {details.description}
                            </span>
                        </div>

                    </div>
                </div>
                <div className="py-5"></div>
                <div className="flex flex-row gap-x-5">
                    <Link href={details.epub_url} className="my-auto py-2 rounded-lg px-2 bg-neutral-400/10 scale-100 hover:bg-neutral-400/20 hover:scale-110 transition"> <span> Download epub</span>  </Link>
                    <Link href={details.pdf_url} className="text-lg my-auto py-2 rounded-lg px-2 bg-neutral-400/10 scale-100 hover:bg-neutral-400/20 hover:scale-110 transition"> <span> Download pdf</span>  </Link>
                </div>
            </div></>
    );
}
export default StoryContent;