'use client'

import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Plus } from 'lucide-react'

export default function Navbar() {
    return (
        <nav>
            <ul className="flex flex-row justify-around p-4 mb-2">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <div className="flex flex-row justify-end gap-6">
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger>Projects</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Projects</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link href="/project">All projects</Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <Link href="/myproject">My projects</Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />

                                <DropdownMenuItem>
                                    <Plus />
                                    <Link href="/createproject">Add new</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                    <li>
                        <Link href="/myprofile">Profile</Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}
