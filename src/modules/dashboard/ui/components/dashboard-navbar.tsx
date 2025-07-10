'use client';

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeft, PanelLeftCloseIcon, PanelLeftIcon, PanelTopCloseIcon, SearchIcon } from "lucide-react";
import { DashboardCommand } from "./dashboard-command";
import { useEffect, useState } from "react";

export const DashboardNavbar = () => {
    const {state, toggleSidebar, isMobile} = useSidebar()
    const [commandOpen, setCommandOpen] = useState(false)

    useEffect(()=>{
            const down = (e: KeyboardEvent)=>{
                if(e.key==="k" && (e.metaKey || e.ctrlKey)){
                    e.preventDefault();
                    setCommandOpen((open)=> !open)
                }
            }
            document.addEventListener("keydown", down)
            return () => document.removeEventListener("keydown", down)
    },[])
    return (
        <>
        <DashboardCommand open={commandOpen} setOpen={setCommandOpen}/>
        <nav className="flex px-4 items-center gap-x-2 py-3 border-b bg-background"> 
            <Button onClick={toggleSidebar}  className="size-9 cursor-pointer"  variant='outline' >
             {
             (state === 'collapsed' || isMobile)  ? 
              <PanelLeftIcon className="size-4"/>   :
              <PanelLeftCloseIcon className="size-4"/>}
             </Button>

             <Button className="h-9 w-[240px] justify-start font-normal text-muted-foreground hover:text-muted-foreground cursor-pointer" variant='outline' size='sm' onClick={() => setCommandOpen((open)=> !open)}>

                <SearchIcon/>
                Search
                <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px1.5
                 font-mono text[10px] text-muted-foreground  font-medium">
                    <span className="text-xs ">&#8984;</span>
                </kbd>
             </Button>
        </nav>
        </>
    )
}