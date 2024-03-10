"use client"
import { IoLibrary } from "react-icons/io5";
import { MdOutlineLibraryAdd } from "react-icons/md";
const Library = () => {
    return ( 
        <div className="flex flex-col">
            <div className="inline-flex gap-x-2 items-center justify-between px-4 py-5">
                <IoLibrary className="text-neutral-400" size={25}/>
                <p className="text-neutral-400 font-medium text-md">My Library</p>
                <MdOutlineLibraryAdd className="text-neutral-400 cursor-pointer hover:text-white transition" size={20}/>
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">
               Collections
            </div>
        </div>
     );
}
 
export default Library;