'use client'

import { Plus } from 'lucide-react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from './ui/navigation-menu'

export default function Navbar() {
    return (
        <div className="flex justify-center p-4">
            <NavigationMenu>
                <NavigationMenuList className="flex gap-8">
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/myprofile">
                            Home
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="flex flex-col items-start gap-4 p-6">
                                <NavigationMenuLink
                                    href="/project"
                                    className="w-full text-left"
                                >
                                    All projects
                                </NavigationMenuLink>
                                <NavigationMenuLink
                                    href="/myproject"
                                    className="w-full text-left"
                                >
                                    My projects
                                </NavigationMenuLink>
                                <NavigationMenuLink
                                    href="/createproject"
                                    className="w-full text-left"
                                >
                                    <Plus />
                                    Add new
                                </NavigationMenuLink>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="/myprofile">
                            Profile
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
