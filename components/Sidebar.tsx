"use client"

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import SidebarEntryContainer from "./SidebarEntryContainer";
import { ImLibrary } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import SidebarEntry from "./SidebarEntry";
import Library from "./Library";
import { twMerge } from "tailwind-merge";
import { Lato } from "next/font/google";

const lato = Lato({ weight:'700', subsets: ["latin"]})

interface SidebarProps {
    children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {
    
    const pathName = usePathname()
    const route = useMemo(() => [
        {
            icon: ImLibrary,
            label: 'Home',
            active: pathName !== '/search',
            href: '/'
        },
        {   
            icon: FaSearch,
            label: 'Search',
            active: pathName === '/search',
            href: '/search'
        }
    ],[pathName])
   
    return ( 
        <div className={twMerge(`flex h-full`,lato.className)}>
            <div className="max-lg:hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
                <SidebarEntryContainer>
                    <div className="flex flex-col gap-y-4 px-5 py-4">
                        {route.map((entry) => (
                            <SidebarEntry key={entry.label} {...entry}/>
                        ))}
                    </div>
                </SidebarEntryContainer>
                <SidebarEntryContainer className="overflow-y-auto h-full">
                    <Library />
                </SidebarEntryContainer>
            </div>
            <main className="h-full flex-1 overflow-y-auto py-2">
                {children}
            </main>
        </div> 
    );
}

export default Sidebar;