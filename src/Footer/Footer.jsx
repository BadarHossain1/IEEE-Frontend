import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    
    return (
        <footer className="bg-gray-900 text-gray-400">
            {/* Footer Images */}
            <div className="flex justify-between items-center px-10 py-10 -mb-10">
                <img src="/img/ieee_footer.png" alt="IEEE Footer Logo" className="h-16" />
                <img src="/img/ieee-footer2.png" alt="IEEE Second Footer Logo" className="h-16" />
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-between gap-4 px-10 py-14">
                <div className="bg-white text-gray-700 rounded-xl shadow-lg p-6 w-full sm:w-[30%]">
                    <h2 className="text-xl font-semibold text-black mb-4">Quick Links</h2>
                    <ul className="space-y-3">
                        <li><a href="#" className="hover:text-yellow-400">Ask a Question</a></li>
                        <li><a href="#" className="hover:text-yellow-400">About IEEE LU SB</a></li>
                        <li><a href="#" className="hover:text-yellow-400">About IEEE LU SB IAS</a></li>
                        <li><a href="#" className="hover:text-yellow-400">About IEEE LU SB PES</a></li>
                        <li><a href="#" className="hover:text-yellow-400">About IEEE LU SB RAS</a></li>
                        <li><a href="#" className="hover:text-yellow-400">About IEEE LU SB WE</a></li>
                    </ul>
                </div>

                <div className="bg-white text-gray-700 rounded-xl shadow-lg p-6 w-full sm:w-[30%]">
                    <h2 className="text-xl font-semibold text-black mb-4">Resources</h2>
                    <ul className="space-y-3">
                        <li><i className="fa-solid fa-newspaper mr-2"></i><a href="#" className="hover:text-yellow-400">News</a></li>
                        <li><i className="fa-solid fa-calendar-days mr-2"></i><a href="#" className="hover:text-yellow-400">Upcoming Events</a></li>
                        <li><i className="fa-solid fa-screwdriver-wrench mr-2"></i><a href="#" className="hover:text-yellow-400">Toolkit</a></li>
                        <li><i className="fa-solid fa-photo-film mr-2"></i><a href="#" className="hover:text-yellow-400">Gallery</a></li>
                        <li><i className="fa-solid fa-book mr-2"></i><a href="#" className="hover:text-yellow-400">Magazines</a></li>
                        <li><i className="fa-solid fa-file-lines mr-2"></i><a href="#" className="hover:text-yellow-400">Research Papers</a></li>
                    </ul>
                </div>

                <div className="bg-white text-gray-700 rounded-xl shadow-lg p-6 w-full sm:w-[30%]">
                    <h2 className="text-xl font-semibold text-black mb-4">Member Area</h2>
                    <ul className="space-y-3">
                        <li><i className="fa-solid fa-user-plus mr-2"></i><a href="#" className="hover:text-yellow-400">Join IEEE LU SB</a></li>
                        <li><i className="fa-solid fa-pen mr-2"></i><a href="#" className="hover:text-yellow-400">Write a Blog</a></li>
                        <li><i className="fa-solid fa-blog mr-2"></i><a href="#" className="hover:text-yellow-400">Blogs</a></li>
                        <li><i className="fa-solid fa-trophy mr-2"></i><a href="#" className="hover:text-yellow-400">Achievements</a></li>
                        <li><i className="fa-solid fa-users-gear mr-2"></i><a href="#" className="hover:text-yellow-400">Current Executive Body</a></li>
                        <li><i className="fa-solid fa-star mr-2"></i><a href="#" className="hover:text-yellow-400">Exemplary Members</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Info Bottom Section */}
            <div className="flex flex-wrap justify-between items-start gap-6 px-10 py-12 border-t border-gray-700 mt-[-2rem]">
                <div>
                    <h2 className="text-white text-lg mb-2">Follow Us</h2>
                    <div className="flex gap-4 text-blue-500 text-xl">
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                </div>

                <div>
                    <h2 className="text-white text-lg mb-2">Contact</h2>
                    <p className="text-gray-400">info@ieeelusb.org</p>
                    <p className="text-gray-400">contact@ieeelusb.org</p>
                </div>

                <div>
                    <h2 className="text-white text-lg mb-2">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-yellow-400">Home</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
                        <li><a href="#" className="hover:text-yellow-400">FAQ</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="text-sm text-gray-400">
                    <p>Last Update: 15 January, 2025</p>
                    <p>&copy; 2025 IEEE LU SB - All rights reserved</p>
                    <p>Developed By IEEE LU SB Web Developer Team</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;