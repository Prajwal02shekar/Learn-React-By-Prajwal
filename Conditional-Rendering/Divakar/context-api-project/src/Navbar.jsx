import React, { useContext } from 'react'
import { MyContext } from './context/GlobalContext';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
    let { DarkMode, setDarkMode } = useContext(MyContext)
    let navArray = [
        { text: "Home", path: "/home" },
        { text: "Service", path: "/service" },
        { text: "Contact", path: "/contact" },
        { text: "About Us", path: "/About" },

    ]
    return (
        <main className={`${DarkMode ? "bg-gradient-to-r  from-slate-800 to-slate-950" : ""}`}>
        <div className={`bg-gradient-to-r from-blue-500 to-blue-700 h-[70px] px-7 ${DarkMode ? "from-slate-800 to-slate-950" : ""}`}>
            <section className='flex justify-between text-white h-full items-center'>
                {/* <ul className='flex justify-between gap-5'>
                    <li className='hover:text-cyan-400'>Home</li>
                    <li className='hover:text-cyan-400'>Service</li>
                    <li className='hover:text-cyan-400'>Contact</li>
                    <li className='hover:text-cyan-400'>About us</li>
                </ul> */}
                <ul className='flex gap-4'>
                    {navArray?.map(ele => {
                        return (
                            <li className='text-white hover:text-[#efefef] cursor-pointer'>{ele.text}</li>
                        )
                    })}
                </ul>
                <aside>
                    <button className={`px-4 py-1 m-4 rounded ${DarkMode ? "bg-slate-500 text-[#efefef]" : "bg-black text-white"}`} onClick={() => { setDarkMode(!DarkMode) }}>{DarkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}</button>
                    <button className='bg-black text-white   rounded'>Login</button>
                </aside>
            </section>
            </div>
        </main>
    )
}

export default Navbar 