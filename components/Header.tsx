"use client"

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { TbCaretLeftFilled, TbCaretRightFilled } from "react-icons/tb";
import { ImLibrary } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";

interface HeaderProps{
    children: React.ReactNode;
    className?: string;
}

const Header:React.FC<HeaderProps> = ({children, className}) => {
    const router = useRouter()
    const handleLogout = () => {}
    const { onOpen } = useAuthModal()
    
    return ( 
        <div className={twMerge(`h-fit p-6 bg-gradient-to-b from-sky-800`, className)}>
            <div className="w-full mb-4 flex items-center justify-between ">
                <div className="max-lg:hidden md:flex gap-x-2 items-center">
                    <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition" onClick={() => router.back()}>
                        <TbCaretLeftFilled className="text-white" size={30}/>    
                    </button>
                    <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition" onClick={() => router.forward()}>
                        <TbCaretRightFilled className="text-white" size={30}/>    
                    </button>  
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <ImLibrary className="text-black" size={20}/>
                    </button>
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <FaSearch className="text-black" size={20}/>
                    </button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    <div>
                        <Button onClick={onOpen}className="bg-transparent font-medium text-neutral-300">Sign Up</Button>
                    </div>
                    <div>
                        <Button onClick={onOpen} className="px-6 py-2 text-black">Log In</Button>
                    </div>
                </div>
            </div>
            {children}
        </div>
     );
}
 
export default Header;