"use client"

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { TbCaretLeftFilled, TbCaretRightFilled } from "react-icons/tb";
import { ImLibrary } from "react-icons/im";
import { FaSearch, FaUserAstronaut } from "react-icons/fa";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import toast from "react-hot-toast";

interface HeaderProps{
    children: React.ReactNode;
    className?: string;
}

const Header:React.FC<HeaderProps> = ({children, className}) => {
    const router = useRouter()
    const { onOpen } = useAuthModal()
    const supabaseClient = useSupabaseClient()
    const { user } = useUser()

    const handleLogout = async () => {
        const { error } = await supabaseClient.auth.signOut()
        router.refresh();
        if (error) toast.error(error.message)
        else toast.success("Logged out")
    }
    var inputValue : string
    return ( 
        <div className={twMerge(`h-fit p-6 bg-gradient-to-b from-sky-800`, className)}>
            <div className="w-full mb-4 flex items-center justify-between ">
                <div className="max-lg:hidden md:flex gap-x-10 items-center scale-110 px-4">
                <a href="/">
                        <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <ImLibrary className="text-black" size={20}/>
                        </button>
                    </a>  
                    <form className='flex flex-row gap-x-2' onSubmit={(e) => {
                        e.preventDefault()
                        router.push(inputValue)
                        }}>
                      <input className="rounded-lg bg-white text-black py-1 px-1" placeholder="Search" onChange={(e) => {inputValue= '/search/'+ e.target.value}}/>
                    <button type='submit' className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition" onClick={() => {router.push(inputValue)}}>
                        <FaSearch className="text-black" size={20}/>
                    </button>
                    </form>
                </div>
                <div className="flex md:hidden gap-x-5 pb-5 items-center justify-center">
                    <a href="/">
                        <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <ImLibrary className="text-black" size={20}/>
                        </button>
                    </a>
                    <form className='flex flex-row gap-x-10' onSubmit={(e) => { e.preventDefault()
                        router.push(inputValue)}}>
                      <input className="rounded-lg bg-white text-black py-1 px-1 w-3/4 sm:text-black" placeholder="Search" onChange={(e) => {inputValue= '/search/'+ e.target.value}}/>
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition" onClick={() => {router.push(inputValue)}}>
                        <FaSearch className="text-black" size={20}/>
                    </button>
                    </form>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                {/* {user ? (
                            <div className="flex gap-x-4 items-center">
                                <Button onClick={handleLogout} className="bg-white px-6 py-2 text-black">Logout</Button>
                                <Button className="bg-white text-black rounded-full" onClick={() => router.push('/account')}>
                                    <FaUserAstronaut />
                                </Button>
                            </div>
                        ) : (
                            <>
                            <div className="flex md:hidden gap-x-5 pb-5 items-center justify-center text-sm">
                                <div>
                                <Button onClick={onOpen} className="bg-transparent font-medium text-neutral-300">Sign Up</Button>
                                </div>
                                <div>
                                    <Button onClick={onOpen} className="px-4 py-1 text-black">Log In</Button>
                                </div>
                            </div>
                            <div className="max-lg:hidden flex gap-x-5">
                                    <div>
                                        <Button onClick={onOpen} className="bg-transparent font-medium text-neutral-300">Sign Up</Button>
                                    </div>
                                    <div>
                                        <Button onClick={onOpen} className="px-6 py-2 text-black">Log In</Button>
                                    </div>
                                </div></>
                        )
                    
                    } */}
                </div>
            </div>
            {children}
        </div>
     );
}
 
export default Header;