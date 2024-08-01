"use client"
import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

function SideBar() {
    const pathname = usePathname();
  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-3'>
            <Link href="/"  className='sidebar-logo'>
            <Image src="/logo.png" alt='logo' width={180} height={280} />
            </Link>

            <nav className='sidebar-nav '>
                <ul className='sidebar-nav_elements'>
                    {
                        navLinks.map((link)=> {
                            const isActive = link.route === pathname;
                            return(
                            <li key={link.label} className={`sidebar-nav_element group ${isActive ? "bg-purple-gradient text-white " : "text-gray-700"}`}>
                                <Link href={link.route}>
                                <Image src={link.icon} alt='icon' width={24} height={24} className={` ${isActive && 'brightness-200'}`}/>
                                {link.label}
                                </Link>
                            </li>
                        )})
                           
                    }
                </ul>
            </nav>
        </div>

    </aside>
  )
}

export default SideBar