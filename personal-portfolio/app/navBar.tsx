"use client";
import React, { useState, useEffect } from 'react';
import './globals.css';
import Link from 'next/link';
import { usePathname } from "next/navigation"
import Image from 'next/image';
import light from '../public/day-mode.png';
import dark from '../public/night-mode.png';

export default function NavBar() {
    type Theme = 'light' | 'dark';
    type Img = typeof light | typeof dark;
    const [theme, setTheme] = useState<Theme>('dark');
    const [img,setImg] = useState<Img>(dark);
    const toggleTheme = () => {
        const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
        const newImg: Img = newTheme === 'light' ? light : dark;
        setTheme(newTheme);
        setImg(newImg);
        changeTheme(newTheme);
    };
    const changeTheme = (newTheme: Theme) => {
        const Body = document.querySelector('body');
        const nav = document.querySelector('header');
        const button = document.querySelector('button');
        if (newTheme === 'light') {
            Body?.classList.remove('bg-gray-900');
            Body?.classList.add('bg-gray-100');
            Body?.classList.add('text-gray-900');
            Body?.classList.remove('text-white');
            Body?.classList.remove('dark');
            nav?.classList.remove('bg-gray-800');
            nav?.classList.add('bg-gray-200');
            nav?.classList.add('text-gray-900');
            nav?.classList.remove('text-white');
            button?.classList.remove('bg-gray-500');
            button?.classList.add('bg-gray-300');
        } else {
            Body?.classList.remove('bg-gray-100');
            Body?.classList.add('bg-gray-900');
            Body?.classList.remove('text-gray-900');
            Body?.classList.add('text-white');
            Body?.classList.add('dark');
            nav?.classList.remove('bg-gray-200');
            nav?.classList.add('bg-gray-800');
            nav?.classList.remove('text-gray-900');
            nav?.classList.add('text-white');
            button?.classList.remove('bg-gray-300');
            button?.classList.add('bg-gray-500');
        }
    }
    const pathname = usePathname();

    // ensure initial theme class is applied when component mounts
    useEffect(() => {
        changeTheme(theme);
    }, []);

    return(
        <header className = "flex flex-col items-top p-4 bg-gray-800 text-white ml-4 mr-4 mt-4 rounded-xl border-2 border-gray-700">
            <div className = "flex items-center justify-between">
                <div className = "flex items-center gap-8">
                    <Link href="/About" className={`hover:text-gray-300 ${pathname === '/About' ? 'bg-gray-700 dark:bg-gray-300 px-2 py-1 rounded' : ''}`}>About Me</Link>
                    <a href="#experiences" className={`hover:text-gray-300 ${pathname === '/Experiences' ? 'bg-gray-700 dark:bg-gray-300 px-2 py-1 rounded' : ''}`}>Experiences</a>
                    <Link href="/contact" className={`hover:text-gray-300 ${pathname === '/contact' ? 'bg-gray-700 dark:bg-gray-300 px-2 py-1 rounded' : ''}`}>Contact Me</Link>
                </div>
                    <button onClick={toggleTheme} className = "w-10 h-10 bg-gray-500 rounded-full" aria-label="Toggle Theme">
                        <Image src={img} alt="Dark mode" className="object-cover" />
                    </button>
                </div>
      </header>
    )
}
