import React, { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';

import {
    FaCaretRight,
    FaFacebookF,
    FaXTwitter,
    FaLinkedinIn,
    FaInstagram,
} from 'react-icons/fa6';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [teamOpen, setTeamOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileSubMenu, setMobileSubMenu] = useState(null);
    const [mobileTeamOpen, setMobileTeamOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveDropdown(null);
                setTeamOpen(false);
                setIsMobileMenuOpen(false);
                setMobileSubMenu(null);
                setMobileTeamOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleDropdown = (menu) => {
        setActiveDropdown((prev) => (prev === menu ? null : menu));
        setTeamOpen(false);
    };

    const handleTeamToggle = () => {
        setTeamOpen((prev) => !prev);
    };

    return (
        <nav className="bg-[#ffbb00ef] shadow-md  w-full  font-['Roboto']" ref={navRef}>
            {/* Top Section */}

            <div className="flex justify-between items-start px-6 py-3 bg-white w-full flex-col md:flex-row border-b-4 border-[#ffbb00ef]">
                {/* Left logo section */}
                <div className="flex items-center gap-4">
                    <img src="../../public/img/ieee_logo.png" alt="IEEE Logo" className="w-60" />
                </div>

                {/* Right icons + auth buttons */}
                <div className="flex sm:flex-row lg:flex-col items-center gap-4 mt-4 md:mt-0">

                    {/* Social Icons */}
                    <div className="flex gap-5 mt-3 justify-center content-center items-center text-[#00457C] text-lg ">
                        <div className='gap-3 flex '>
                            <FaFacebookF />
                            <FaLinkedinIn />
                            <FaXTwitter />
                            <FaInstagram />

                        </div>

                        {/* User Profile */}
                        <div>
                            <img
                                src="../../public/img/user.png"
                                alt="User"
                                className="w-14 h-14 rounded-full border-2 border-[#00457C]"
                            />
                            <p className='w-full text-center items-center'>John Doe</p>

                        </div>
                    </div>


                    {/* Auth Buttons
                    {!isLoggedIn && (
                        <div className="flex gap-2">
                            <button className="px-4 py-1 bg-[#ea8800] text-white rounded-lg sm:text-sm lg:text-lg">
                                Sign Up
                            </button>
                            <button className="px-4 py-1 border border-[#ea8800] text-black rounded-lg sm:text-sm lg:text-lg">
                                Log In
                            </button>
                        </div>
                    )} */}
                </div>
            </div>

            {/* Marquee */}
            {/* <div className="text-white py-2">
                <Marquee pauseOnHover={true} gradient={false} speed={65}>
                    <span className='text-white font-bold'>Leading University IEEE Club</span>
                </Marquee>
            </div> */}

            {/* Navigation for pc */}
            <div className="md:flex  hidden w-full mx-auto py-4 justify-center items-center">
                <ul className="flex flex-wrap gap-10 items-center text-white font-semibold text-2xl relative">
                    <li><a href="/">Home</a></li>

                    <li className="relative">
                        <button onClick={() => handleDropdown('activities')}>Activities</button>
                        {activeDropdown === 'activities' && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-black text-white rounded shadow-lg z-20">
                                <ul>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">Events</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">News</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">Achievements</a></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li className="relative">
                        <button onClick={() => handleDropdown('members')}>Members</button>
                        {activeDropdown === 'members' && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-black text-white rounded shadow-lg z-20">
                                <ul>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">Panels</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">Volunteers</a></li>
                                    <li className="relative">
                                        <div
                                            className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-yellow-500"
                                            onClick={handleTeamToggle}
                                        >
                                            <span>Team</span>
                                            <FaCaretRight className={`ml-2 transform ${teamOpen ? 'rotate-90' : ''}`} />
                                        </div>
                                        {teamOpen && (
                                            <div className="absolute left-full top-0 ml-2 w-64 max-h-64 overflow-y-auto bg-black rounded shadow-lg z-30">
                                                <ul>
                                                    {[
                                                        "Program Coordinator",
                                                        "Publication & Newsletter Coordinator",
                                                        "Publicity Coordinator",
                                                        "Chief Reporting Executive",
                                                        "Photography Executive",
                                                        "Logistic Executive",
                                                        "ACM Coordinator",
                                                        "Membership Development Coordinator",
                                                        "Webmaster",
                                                        "Graphics Design Executive",
                                                        "Video Content Executive",
                                                    ].map((item) => (
                                                        <li key={item}>
                                                            <a href="#" className="block px-4 py-2 hover:bg-yellow-500">
                                                                {item}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li className="relative">
                        <button onClick={() => handleDropdown('about')}>About</button>
                        {activeDropdown === 'about' && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-black text-white rounded shadow-lg z-20">
                                <ul>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">IEEE</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">IEEE Region 10</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">IEEE Bangladesh Section</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">IEEE LU Student Branch</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">FAQ</a></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li className="relative">
                        <button onClick={() => handleDropdown('publications')}>Publications</button>
                        {activeDropdown === 'publications' && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-black text-white rounded shadow-lg z-20">
                                <ul>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">Blogs</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">Research Papers</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">Magazines</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">Gallery</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">Toolkit</a></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li><a href="#">Contact</a></li>

                    <li className="relative">
                        <button onClick={() => handleDropdown('getinvolved')}>Get Involved</button>
                        {activeDropdown === 'getinvolved' && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-black text-white rounded shadow-lg z-20">
                                <ul>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">Join IEEE LU SB</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">Write A Blog</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">Add Research Paper</a></li>
                                </ul>
                            </div>
                        )}
                    </li>

                    {/* <li>
                        <a
                            href="#"
                            className="bg-white text-black px-4 py-1.5 rounded hover:bg-yellow-400"
                        >
                            IEEE LU SBC Portal
                        </a>
                    </li> */}
                </ul>
            </div>

            {/* Mobile navigation */}
            <div className="md:hidden flex justify-end px-6 py-2 bg-[#00457C]">
                <button
                    className="text-white text-2xl focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#00457C] text-white px-6 py-4 space-y-3">
                    <ul className="space-y-3 text-base font-semibold">
                        <li><a href="#">Home</a></li>

                        <li>
                            <button onClick={() => setMobileSubMenu(mobileSubMenu === 'activities' ? null : 'activities')} className="w-full text-left">Activities</button>
                            {mobileSubMenu === 'activities' && (
                                <ul className="pl-4 mt-1 space-y-1 text-sm">
                                    <li><a href="#">Events</a></li>
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">Achievements</a></li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <button onClick={() => setMobileSubMenu(mobileSubMenu === 'members' ? null : 'members')} className="w-full text-left">Members</button>
                            {mobileSubMenu === 'members' && (
                                <ul className="pl-4 mt-1 space-y-1 text-sm">
                                    <li><a href="#">Panels</a></li>
                                    <li><a href="#">Volunteers</a></li>
                                    <li>
                                        <button onClick={() => setMobileTeamOpen(!mobileTeamOpen)} className="w-full text-left">Team</button>
                                        {mobileTeamOpen && (
                                            <div className="max-h-48 overflow-y-auto pl-4 mt-1 space-y-1 text-xs">
                                                {[
                                                    "Program Coordinator",
                                                    "Publication & Newsletter Coordinator",
                                                    "Publicity Coordinator",
                                                    "Chief Reporting Executive",
                                                    "Photography Executive",
                                                    "Logistic Executive",
                                                    "ACM Coordinator",
                                                    "Membership Development Coordinator",
                                                    "Webmaster",
                                                    "Graphics Design Executive",
                                                    "Video Content Executive",
                                                ].map((item) => (
                                                    <li key={item}><a href="#">{item}</a></li>
                                                ))}
                                            </div>
                                        )}
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <button onClick={() => setMobileSubMenu(mobileSubMenu === 'about' ? null : 'about')} className="w-full text-left">About</button>
                            {mobileSubMenu === 'about' && (
                                <ul className="pl-4 mt-1 space-y-1 text-sm">
                                    <li><a href="#">IEEE</a></li>
                                    <li><a href="#">IEEE Region 10</a></li>
                                    <li><a href="#">IEEE Bangladesh Section</a></li>
                                    <li><a href="#">IEEE LU Student Branch</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <button onClick={() => setMobileSubMenu(mobileSubMenu === 'publications' ? null : 'publications')} className="w-full text-left">Publications</button>
                            {mobileSubMenu === 'publications' && (
                                <ul className="pl-4 mt-1 space-y-1 text-sm">
                                    <li><a href="#">Blogs</a></li>
                                    <li><a href="#">Research Papers</a></li>
                                    <li><a href="#">Magazines</a></li>
                                    <li><a href="#">Gallery</a></li>
                                    <li><a href="#">Toolkit</a></li>
                                </ul>
                            )}
                        </li>

                        <li><a href="#">Contact</a></li>

                        <li>
                            <button onClick={() => setMobileSubMenu(mobileSubMenu === 'getinvolved' ? null : 'getinvolved')} className="w-full text-left">Get Involved</button>
                            {mobileSubMenu === 'getinvolved' && (
                                <ul className="pl-4 mt-1 space-y-1 text-sm">
                                    <li><a href="#">Join IEEE LU SB</a></li>
                                    <li><a href="#">Write A Blog</a></li>
                                    <li><a href="#">Add Research Paper</a></li>
                                </ul>
                            )}
                        </li>

                        {/* <li>
                            <a
                                href="#"
                                className="block bg-white text-black text-xl px-4 py-1.5 rounded hover:bg-yellow-400"
                            >
                                <span className='text-xl'>IEEE LU SBC Portal</span>
                            </a>
                        </li> */}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
