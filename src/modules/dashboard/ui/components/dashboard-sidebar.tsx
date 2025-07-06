'use client'

import { Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
 } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Separator } from "@radix-ui/react-context-menu"
import { BotIcon, StarIcon, VideoIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const firstSection = [
    {
        icon: VideoIcon,
        label: 'Meetings',
        href: '/meetings',
        
        
    },
    {
        icon: BotIcon,
        label:'Agents',
        href: '/agents',
    }
]
const secondSection = [
    {
        icon: StarIcon,
        label: 'Upgrade',
        href: '/upgrade',
        
        
    },
  
]


export const DashboardSidebar = () => {
    const pathname = usePathname();
    

return (
    <Sidebar>
        <SidebarHeader className="text-sidebar-accent-foreground ">
               <Link href='/' className="flex items-center px-2 gap-2 pt-2">
                  <Image src='/logo.webp' height={36} width={36} alt="logo"  />
                  <p className="text-2xl font-semibold">Meet AI</p>
               </Link>
        </SidebarHeader>
        <div className="px-4 py-2 ">
            <Separator className="opacity-10 text-[#5D6B68]"/>
        </div>
        <SidebarContent>

            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {firstSection.map((item)=>(
                            <SidebarMenuItem key={item.href}>
                                <SidebarMenuButton
                                asChild
                                className={cn(
                                    "h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6B68] hover:shadow-sm hover:shadow-[#5D6B68]/10 focus:bg-linear-to-r/oklch focus:border-[#5D6B68] focus:shadow-sm focus:shadow-[#5D6B68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50",
                                    pathname===item.href && "bg-linear-to-r/oklch border-[#5D6B68]/30  "
                                )}
                                isActive={pathname===item.href}
                                >
                                      <Link className="flex gap-2" href={item.href}>
                                      <item.icon className="size-5" />
                                          <span className="text-sm font-medium tracking-tight">
                                            {item.label}
                                          </span>
                                      </Link>
                                </SidebarMenuButton>

                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
             <div className="px-4 py-2 ">
            <Separator className="opacity-10 text-[#5D6B68]"/>
        </div>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {secondSection.map((item)=>(
                            <SidebarMenuItem key={item.href}>
                                <SidebarMenuButton
                                asChild
                                className={cn(
                                    "h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#5D6B68] hover:shadow-sm hover:shadow-[#5D6B68]/10 focus:bg-linear-to-r/oklch focus:border-[#5D6B68] focus:shadow-sm focus:shadow-[#5D6B68]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50",
                                    pathname===item.href && "bg-linear-to-r/oklch border-[#5D6B68]/30  "
                                )}
                                isActive={pathname===item.href}
                                >
                                      <Link className="flex gap-2" href={item.href}>
                                      <item.icon className="size-5" />
                                          <span className="text-sm font-medium tracking-tight">
                                            {item.label}
                                          </span>
                                      </Link>
                                </SidebarMenuButton>

                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
)
}