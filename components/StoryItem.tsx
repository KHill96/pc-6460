"use client"

import Image from "next/image"

import { Story } from "@/types"
import { FaPlay } from "react-icons/fa"
import Link from "next/link"

interface StoryItemProps {
    data: Story
}

const StoryItem:React.FC<StoryItemProps> = ({data}) => {
    const imagePath = data.cover_url
    return (
        <div className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 hover:scale-110 transition p-3">
                <Link className="relative aspect-[7/10] w-full h-full rounded-md oveflow-hidden" href={"/read/"+data.id}>
                <Image className="object-cover" src={imagePath || "/images/book-cover-placeholder.png"} fill alt={data.title}/>
                
                </Link>
                <div className="flex flex-col items-start w-full pt-4 gap-y-1">
                <Link  href={"/read/"+data.id} >
                    <p className="tex-center m-auto pb-2">{data.title}</p>
                    <p className="text-neutral-400 text-sm w-full truncate">By {data.author}</p>
                </Link>
                </div>
                <div  className="absolute bottom-24 right-5">
                    {/* <button  className="transition scale-75 opacity-0 rounded-full flex items-center bg-white p-4 drop-shadow-md transltate translate-y-1/
                    4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-90">
                        <FaPlay className="text-black"/>
                        <span className="px-4 text-black">Play Now</span>
                    </button> */}
                </div>
            </div>
    );
}
 
export default StoryItem;