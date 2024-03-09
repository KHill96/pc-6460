import { twMerge } from "tailwind-merge";

interface SidebarEntryContainerProps {
    children: React.ReactNode;
    className?: string;
}

const SidebarEntryContainer: React.FC<SidebarEntryContainerProps> = ({children, className}) => {
    return ( 
        <div className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`,className)}>
            {children}
        </div>
     );
}
 
export default SidebarEntryContainer;