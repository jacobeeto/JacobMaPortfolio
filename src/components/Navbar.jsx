import React, {useState} from 'react'
import {FaBars,FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/jacoblogo2.png'
import {Link} from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            {/**Logo Info*/}
            <img src={Logo} alt="Logo Image" style ={{ width: '100px' }} />
        </div>

        {/* Menu about experiences */}
            <ul className = 'hidden md:flex'>
                <li>
                <Link to="home" smooth={true} offset = {50} duration={500}>
                Home</Link>
                </li>
                <li>
                <Link to="about" smooth={true} duration={500}>
                About</Link>
                </li>
                <li>
                <Link to="skills" smooth={true} offset = {-50} duration={500}>
                Skills</Link>
                </li>
                <li>
                <Link to="contact" smooth={true} offset = {-50} duration={500}>
                Contact</Link>
                </li>
            </ul>

         {/**Hamburger */} 
        <div onClick={handleClick} className = 'md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/**Mobile Menu */}
        <ul className = {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Skills</Link></li>
            <li onClick={handleClick}className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact</Link></li>
        </ul>

        {/**Social icons left-5 instead of left-0 might need to fix*/}
        <div className = 'hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className ='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#528AAE]'>
                    <a className = 'flex justify-between items-center w-full text-gray-300'
                    href = "https://www.linkedin.com/in/jacob-ma/" target="_blank">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>

                <li className ='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#808080]'>
                    <a className = 'flex justify-between items-center w-full text-gray-300'
                    href = "https://github.com/jacobeeto" target="_blank">
                        Github <FaGithub size={30}/>
                    </a>
                </li>

                <li className ='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F47174]'>
                    <a className = 'flex justify-between items-center w-full text-gray-300'
                    href = "mailto:jacobma1118@gmail.com">
                    
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>

                <li className ='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className = 'flex justify-between items-center w-full text-gray-300'
                    href = "https://drive.google.com/file/d/1vp3sbEflpB_KARfYJrMyURqPcTcmbmz9/view?usp=sharing" target="_blank">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>

        </div>

    </div>
  )
}

export default Navbar