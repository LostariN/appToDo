import React, { useEffect, useState } from 'react'

import IconMoon from './icons/IconMoon'
import IconSun from './icons/iconSun'


const initialStateDarkMode = localStorage.getItem('theme') === 'dark'

function Header() {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode)
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }

    }, [darkMode])

    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="uppercase text-white tracking-[0.3em] text-2xl font-semibold">Todo</h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {
                        darkMode ? <IconSun /> : <IconMoon />
                    }
                </button>
            </div>
        </header>
    )
}

export default Header