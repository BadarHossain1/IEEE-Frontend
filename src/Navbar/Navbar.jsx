import React, { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';

import {
    FaCaretRight,
    FaFacebookF,
    FaXTwitter,
    FaLinkedinIn,
    FaInstagram,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navbar = () => {

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




    useEffect(() => {
        if (!isMobileMenuOpen) {
            setMobileSubMenu(null);
            setMobileTeamOpen(false);
        }
    }, [isMobileMenuOpen]);




    return (
        <nav className="bg-[#f7a320] shadow-md  w-full  font-['Roboto']" ref={navRef}>
            {/* Top Section */}



            {/* Marquee */}
            {/* <div className="text-white py-2">
                <Marquee pauseOnHover={true} gradient={false} speed={65}>
                    <span className='text-white font-bold'>Leading University IEEE Club</span>
                </Marquee>
            </div> */}

            {/* Navigation for pc */}
            <div className="lg:flex p-2  hidden  justify-between w-full mx-auto ">
                <ul className="flex flex-wrap  w-[95%] mx-auto justify-between items-center  text-white font-semibold  relative">
                    <div className="flex items-center gap-4">
                        <img src="../../public/img/ieee_logo.png" alt="IEEE Logo" className=" w-60" />
                    </div>
                    <li><a href="/" className='md:text-xl text-2xl lg:text-2xl hover:border-b-2 hover:rounded-xl hover:p-3 hover:shadow-black hover:shadow-lg shadow- hover:border-black'>Home</a></li>


                    {/* Activities Dropdown */}
                    <li className="relative group">
                        <button className="md:text-xl text-2xl lg:text-2xl hover:border-b-2 hover:rounded-xl hover:p-3 hover:shadow-black hover:shadow-lg shadow- hover:border-black">Activities</button>

                        <div className="absolute top-full left-0 mt-2 w-64  bg-black text-white rounded shadow-lg z-20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                            <ul>
                                <li>
                                    <Link to="/event" className="block px-4 py-2 hover:bg-[#f7a320]">
                                        Events
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/news" className="block px-4 py-2 hover:bg-[#f7a320]">
                                        News
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/achievement" className="block px-4 py-2 hover:bg-[#f7a320]">
                                        Achievements
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>


                    {/* ---------------------------------------------- */}


                    <li className="relative group">
                        <button className="md:text-xl text-2xl lg:text-2xl hover:border-b-2 hover:rounded-xl hover:p-3 hover:shadow-black hover:shadow-lg shadow- hover:border-black">Members</button>
                        {/* Dropdown on hover */}
                        <div className="absolute top-full left-0 mt-2 w-64 bg-black text-white rounded shadow-lg z-20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                            <ul>
                                <li>
                                    <Link to={"/panel"} className="block px-4 py-2 hover:bg-[#f7a320]">Panels</Link>
                                </li>
                                <li>
                                    <Link to={"/volunteers"} className="block px-4 py-2 hover:bg-[#f7a320]">Volunteers</Link>
                                </li>

                                {/* Team submenu */}
                                <li className="relative group/team">
                                    <div className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-[#f7a320]">
                                        <span>Team</span>
                                        <FaCaretRight className="ml-2" />
                                    </div>
                                    {/* Submenu on hover */}
                                    <div className="absolute top-0 left-full ml-2 w-64 max-h-64 overflow-y-auto bg-black rounded shadow-lg z-30 opacity-0 group-hover/team:opacity-100 invisible group-hover/team:visible transition-all duration-300">
                                        <ul>
                                            {[
                                                { name: "Program Coordinator", path: "/programCoordinator" },
                                                { name: "Publication & Newsletter Coordinator", path: "/publication-newsletter-coordinator" },
                                                { name: "Publicity Coordinator", path: "/publicity-coordinator" },
                                                { name: "Chief Reporting Executive", path: "/chief-reporting-executive" },
                                                { name: "Photography Executive", path: "/photography-executive" },
                                                { name: "Logistic Executive", path: "/logistic-executive" },
                                                { name: "ACM Coordinator", path: "/acm-coordinator" },
                                                { name: "Membership Development Coordinator", path: "/membership-development-coordinator" },
                                                { name: "Webmaster", path: "/webmaster" },
                                                { name: "Graphics Design Executive", path: "/graphics-design-executive" },
                                                { name: "Video Content Executive", path: "/video-content-executive" },
                                            ].map((role) => (
                                                <li key={role.name}>
                                                    <Link to={role.path} className="block px-4 py-2 hover:bg-[#f7a320]">
                                                        {role.name}
                                                    </Link>
                                                </li>

                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>





                    {/* ---------------------------------------------- */}


                    <li className="relative group">
                        <button className="md:text-xl text-2xl lg:text-2xl hover:border-b-2 hover:rounded-xl hover:p-3 hover:shadow-black hover:shadow-lg shadow- hover:border-black ">About</button>

                        {/* Dropdown on hover */}
                        <div className="absolute top-full left-0 mt-2 w-64 bg-black text-white rounded shadow-lg z-20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                            <ul>
                                <li>
                                    <Link to="/join" className="block px-4 py-2 hover:bg-[#f7a320]">
                                        Join With Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/IEEE" className="block px-4 py-2 hover:bg-[#f7a320]">
                                        IEEE
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/IEEE-REGION-10" className="block px-4 py-2 hover:bg-[#f7a320]">
                                        IEEE Region 10
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/IEEE-Bangladesh-section" className="block px-4 py-2 hover:bg-[#f7a320]">
                                        IEEE Bangladesh Section
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/IEEE-LU-BRANCH" className="block px-4 py-2 hover:bg-[#f7a320]">
                                        IEEE LU Student Branch
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/faq" className="block px-4 py-2 hover:bg-[#f7a320]">
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="relative group">
                        <button className="md:text-xl text-2xl lg:text-2xl hover:border-b-2 hover:rounded-xl hover:p-3 hover:shadow-black hover:shadow-lg shadow- hover:border-black">Publications</button>

                        {/* Dropdown on hover */}
                        <div className="absolute top-full left-0 mt-2 w-64 bg-black text-white rounded shadow-lg z-20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                            <ul>
                                <li>
                                    <Link to="/blog" className="block px-4 py-2 hover:bg-[#f7a320]">
                                        Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/researchPapers" className="block px-4 py-2 hover:bg-[#f7a320]">
                                        Research Papers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/megazine" className="block px-4 py-2 hover:bg-[#f7a320]">
                                        Magazines
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/gallery" className="block px-4 py-2 hover:bg-[#f7a320]">
                                        Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/toolkit" className="block px-4 py-2 hover:bg-[#f7a320]">
                                        Toolkit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li><Link to={"/contact"} className='md:text-xl text-2xl lg:text-2xl hover:border-b-2 hover:rounded-xl hover:p-3 hover:shadow-black hover:shadow-lg shadow- hover:border-black' >Contact</Link></li>

                    <li className="relative group">
                        <button className="md:text-xl text-2xl lg:text-2xl hover:border-b-2 hover:rounded-xl hover:p-3 hover:shadow-black hover:shadow-lg shadow- hover:border-black">Get Involved</button>

                        {/* Dropdown on hover */}
                        <div className="absolute top-full left-0 mt-2 w-64 bg-black text-white rounded shadow-lg z-20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                            <ul>
                                <li>
                                    <Link to="/joinIEEE" className="block px-4 py-2 hover:bg-[#f7a320]">
                                        Join IEEE LU SB
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blogWriting" className="block px-4 py-2 hover:bg-[#f7a320]">
                                        Write A Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/addResearch" className="block px-4 py-2 hover:bg-[#f7a320]">
                                        Add Research Paper
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>






                    <li>
                        <Link
                            to={"/signin"}
                            className="block bg-white text-black text-xl px-4 py-1.5 rounded hover:bg-yellow-400"
                        >
                            <span className='text-xl'>Join Now</span>
                        </Link>
                    </li>
                </ul>
            </div>


            {/* --------------------------------------------------------------------------------------- */}

            {/* Mobile navigation */}
            <div className="lg:hidden flex justify-between px-6 py-4 bg-[#f7a320]">
                <div className="flex items-center gap-4">
                    <img src="../../public/img/ieee_logo.png" alt="IEEE Logo" className="md:w-50 w-32" />
                </div>
                <button
                    className="text-white md:text-3xl text-2xl lg:text-2xl  focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-black text-white px-6 py-4 space-y-3">
                    <ul className="space-y-3 text-base font-semibold">

                        <li><a href="#">Home</a></li>

                        <li>
                            <button onClick={() => setMobileSubMenu(mobileSubMenu === 'activities' ? null : 'activities')} className="w-full text-left">Activities</button>
                            {mobileSubMenu === 'activities' && (
                                <ul className="pl-4 mt-2 space-y-1 text-sm">

                                    <li>
                                        <Link to="/event" className="block px-4 py-2 hover:bg-[#f7a320]">
                                            Events
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/news" className="block px-4 py-2 hover:bg-[#f7a320]">
                                            News
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/achievement" className="block px-4 py-2 hover:bg-[#f7a320]">
                                            Achievements
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <button onClick={() => setMobileSubMenu(mobileSubMenu === 'members' ? null : 'members')} className="w-full text-left">Members</button>
                            {mobileSubMenu === 'members' && (
                                <ul className="pl-4 mt-2 space-y-1 text-sm">
                                    <li><Link to={"/panel"}>Panels</Link></li>
                                    <li><Link to={"/volunteers"}>Volunteers</Link></li>
                                    <li>
                                        <button onClick={() => setMobileTeamOpen(!mobileTeamOpen)} className="w-full text-left">Team</button>
                                        {mobileTeamOpen && (
                                            <div className="max-h-48 overflow-y-auto pl-4 mt-2 space-y-1 text-xs">
                                                {[
                                                    { name: "Program Coordinator", path: "/programCoordinator" },
                                                    { name: "Publication & Newsletter Coordinator", path: "/publication-newsletter-coordinator" },
                                                    { name: "Publicity Coordinator", path: "/publicity-coordinator" },
                                                    { name: "Chief Reporting Executive", path: "/chief-reporting-executive" },
                                                    { name: "Photography Executive", path: "/photography-executive" },
                                                    { name: "Logistic Executive", path: "/logistic-executive" },
                                                    { name: "ACM Coordinator", path: "/acm-coordinator" },
                                                    { name: "Membership Development Coordinator", path: "/membership-development-coordinator" },
                                                    { name: "Webmaster", path: "/webmaster" },
                                                    { name: "Graphics Design Executive", path: "/graphics-design-executive" },
                                                    { name: "Video Content Executive", path: "/video-content-executive" },
                                                ].map((role) => (
                                                    <li key={role.name}>
                                                        <Link to={role.path} className="block px-4 py-2 hover:bg-[#f7a320]">
                                                            {role.name}
                                                        </Link>
                                                    </li>

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
                                <ul className="pl-4 mt-2 space-y-1 text-sm">
                                    <li>
                                        <Link to="/join" className="block px-4 py-2 hover:bg-[#f7a320]">
                                            Join With Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/IEEE" className="block px-4 py-2 hover:bg-[#f7a320]">
                                            IEEE
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/IEEE-REGION-10" className="block px-4 py-2 hover:bg-[#f7a320]">
                                            IEEE Region 10
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/IEEE-Bangladesh-section" className="block px-4 py-2 hover:bg-[#f7a320]">
                                            IEEE Bangladesh Section
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/IEEE-LU-BRANCH" className="block px-4 py-2 hover:bg-[#f7a320]">
                                            IEEE LU Student Branch
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/faq" className="block px-4 py-2 hover:bg-[#f7a320]">
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <button onClick={() => setMobileSubMenu(mobileSubMenu === 'publications' ? null : 'publications')} className="w-full text-left">Publications</button>
                            {mobileSubMenu === 'publications' && (
                                <ul className="pl-4 mt-2 space-y-1 text-sm">
                                    <li>
                                        <Link to="/blog" className="block px-4 py-2 hover:bg-[#f7a320]">
                                            Blogs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/researchPapers" className="block px-4 py-2 hover:bg-[#f7a320]">
                                            Research Papers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/megazine" className="block px-4 py-2 hover:bg-[#f7a320]">
                                            Magazines
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/gallery" className="block px-4 py-2 hover:bg-[#f7a320]">
                                            Gallery
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/toolkit" className="block px-4 py-2 hover:bg-[#f7a320]">
                                            Toolkit
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li><Link to={"/contact"}>Contact</Link></li>

                        <li>
                            <button onClick={() => setMobileSubMenu(mobileSubMenu === 'getinvolved' ? null : 'getinvolved')} className="w-full text-left">Get Involved</button>
                            {mobileSubMenu === 'getinvolved' && (
                                <ul className="pl-4 mt-2 space-y-1 text-sm">
                                    <li>
                                        <Link to="/joinIEEE" className="block px-4 py-2 hover:bg-[#f7a320]">
                                            Join IEEE LU SB
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blogWriting" className="block px-4 py-2 hover:bg-[#f7a320]">
                                            Write A Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/addResearch" className="block px-4 py-2 hover:bg-[#f7a320]">
                                            Add Research Paper
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <Link
                                to={"/signin"}
                                className="block bg-white text-black text-xl px-4 py-1.5 rounded hover:bg-yellow-400"
                            >
                                <span className='text-xl'>Join Now</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;