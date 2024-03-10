"use client"
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface ListItemProps {
    description: string;
    name: string;
    href: string;
}

const ListItem:React.FC<ListItemProps> = ({description, name, href}) => {
    const router = useRouter()
    const onClick = () => {
        // Auth goes here
        router.push(href)
    }
    
    return ( 
        <button onClick={onClick} className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100 hover: bg-neutral-100/20 transition pr-4">
            <div className="relative min-h-[64px] min-w-[64px]">
                <p className="align-middle text-xl px-3 py-5"> {description} </p>
            </div>
            <div className="scale-75 absolute transition opacity-0 rounded-full flex items-center justify-center bg-white p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-100">
                <FaArrowRight className="text-black text-xl" />
            </div>
        </button>
    );
}
 
export default ListItem;