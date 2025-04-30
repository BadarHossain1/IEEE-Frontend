import React from 'react';
import { ExternalLink } from 'lucide-react';

const IEEEBangladesh = () => {
    return (
        <div className='w-full '>

            <div className="flex justify-center items-center w-full h-[300px] bg-black  mt-[1px]">
                <h1 className="text-4xl font-bold text-center text-white *:mb-6">
                    ABOUT – IEEE BANGLADESH SECTION
                </h1>
            </div>
            <div className=" w-[85%] mx-auto  pt-20 pb-10 px-6 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-42 ">

                    {/* Left side - IEEE Logo */}
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co.com/KxYhtFbD/IEEE-LOGO.gif" // <-- Update this path
                            alt="IEEE Logo"
                            className="w-60 h-60 object-contain"
                        />
                    </div>

                    {/* Right side - About Text */}
                    <div className=" lg:ml-[40px]">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            ABOUT <span className="block w-16 h-1 bg-[#f7a320]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 max-w-xl leading-relaxed text-justify">
                            Institute of Electrical and Electronics Engineers (IEEE) Bangladesh Section was formed in November 1993 with just 54 members. But now the Institute of Electrical and Electronics Engineers (IEEE) Bangladesh Section has gained a huge community with a lot of members from different countries. Recently IEEE Bangladesh Community is holding the position right after India, USA, China and Canada. Bangladesh Section is maintaining the 5th ranking among 342 sections all over 160 countries in the world.

                        </p>
                        <div className="flex gap-4 mt-6">

                            <button className="border-2 border- [#f7a320]  hover:bg-[#f7a320]  hover:text-white text-[#f7a320]  font-semibold py-2 px-6 rounded">
                                IEEEBD.net
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className=" w-[85%] mx-auto pt-20 pb-10 px-6 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">

                    {/* Left side - Text content */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Members and volunteers
                            <span className="block w-16 h-1 bg-[#f7a320]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Members of the Institute of Electrical and Electronics Engineers (IEEE) Bangladesh Section are very involved, and they are perfecting their initiative work and forming connections with electrical engineering sides all over the world. Prof. Celia Shahnaz, Chair of the Institute of Electrical and Electronics Engineers (IEEE) Bangladesh Section, organizes year-round productive student events and congratulates all student participants. Institute of Electrical and Electronics Engineers (IEEE) Bangladesh Section is receiving overwhelming response from Institute of Electrical and Electronics Engineers (IEEE) members and volunteers all over the world.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-white  ">
                            <p className="text-gray-700 leading-relaxed text-justify">Please go through this links: </p>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                  <ExternalLink size={18} />WEB TEAM
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                  <ExternalLink size={18} />Vice Chair Technical
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                  <ExternalLink size={18} />Secretary Candidates
                            </a>

                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://via.placeholder.com/300x200" // <-- Update this path
                            alt="Community Network"
                            className="w-[400px] h-auto object-contain"
                        />
                    </div>
                </div>
            </div>


            <div className="bg-[#f7a320]  w-[85%] mx-auto py-16 px-6 md:px-20">
                <div className="w-[85%] mx-auto  grid md:grid-cols-2 gap-10 justify-between  ">


                    <div className="border-r border-white pr-8">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Benefits
                            <div className="w-16 h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            Institute of Electrical and Electronics Engineers (IEEE) Bangladesh Section section is expanding at a rapid pace. It is assisting by keeping up with the fast-changing world of technology and science with the Institute of Electrical and Electronics Engineers (IEEE) worldwide technical societies. Institute of Electrical and Electronics Engineers (IEEE) books and eBooks, journals and papers, conferences and proceedings, and manifold other resources are available. IEEE BD Section is going ahead with a mission of ensuring benefits of the students properly.
                        </p>


                    </div>

                    {/* Collaboration */}
                    <div className="pl-8">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Student Branches
                            <div className="w-16 h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            IEEE Bangladesh Student Branches are taking the unprecedented steps day by day and going ahead as a big ripple in the whole world. In Bangladesh there are 1500+ students including graduate and non-graduate students. Here is the student branch details and the list of student branches link below:
                        </p>
                        <div className="mt-6 flex flex-col gap-2 text-white ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> IEEE BDS
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> IEEE BDS list
                            </a>

                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-[#f7a320]  w-[85%] mx-auto py-16 px-6 md:px-20">
                <div className=" w-[85%] mx-auto grid md:grid-cols-2 gap-10 justify-between  ">




                    <div className="border-r border-white pr-8">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Affinity Groups
                            <div className="w-16 h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            Institute of Electrical and Electronics Engineers (IEEE) Bangladesh Section is involving in many kinds of industrial sectors and developing the skills of the members in BDS. Day by day the rates of seminars, tours and conferences are increasing and the focus of these events and seminars are getting close to professionalism and industrial approaches.

                        </p>

                        <div className="mt-6 flex flex-col gap-2 text-white ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> Visit Now
                            </a>


                        </div>
                    </div>

                    <div className=" pl-8">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Community and Society
                            <div className="w-16 h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            Institute of Electrical and Electronics Engineers (IEEE) has a huge Community with many Associations. Like – WIE (Women in Engineering), IAS (Industry Application Society), PES (Power and Energy Society), YP (Young Professionals) etc.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-white ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> Community and society
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> Other Sites
                            </a>

                        </div>
                    </div>


                </div>
            </div>

            {/* The achivements section */}
            <section className=" pt-20 pb-10 px-6 md:px-20">
                <div className="w-[85%] mx-auto  ">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-[#f7a320]  mb-4">
                        Achievements
                    </h2>
                    <div className="block w-16 h-1 bg-[#f7a320]    mb-6"></div>

                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-10">
                        Institute of Electrical and Electronics Engineers (IEEE) is the biggest platform of success and achievements.
                        IEEE and its members inspire a global community through its highly cited publications, conferences, technology
                        standards, and professional and educational activities. There are a huge number of achievement awards in the
                        Institute of Electrical and Electronics Engineers (IEEE) from different sides. To know more about it please visit-
                    </p>

                    {/* Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Image 1 */}
                        <div className="bg-gray-200 h-auto rounded-md overflow-hidden">
                            <img
                                src="https://imgs.search.brave.com/gSJHx_zroj6oxO0FFBe4h-M4PdwH0J2mEbzTPklJvSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9nb2xkZW4tY3Vw/LXRyb3BoeS1pc29s/YXRlZC13aGl0ZS0z/ZF81MDUwODAtNDg5/LmpwZz9zZW10PWFp/c19oeWJyaWQ"
                                alt="Achievement 1"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="bg-gray-200 h-auto rounded-md overflow-hidden">
                            <img
                                src="https://imgs.search.brave.com/gSJHx_zroj6oxO0FFBe4h-M4PdwH0J2mEbzTPklJvSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9nb2xkZW4tY3Vw/LXRyb3BoeS1pc29s/YXRlZC13aGl0ZS0z/ZF81MDUwODAtNDg5/LmpwZz9zZW10PWFp/c19oeWJyaWQ"
                                alt="Achievement 2"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Image 3 */}
                        <div className="bg-gray-200 h-auto rounded-md overflow-hidden">
                            <img
                                src="https://imgs.search.brave.com/gSJHx_zroj6oxO0FFBe4h-M4PdwH0J2mEbzTPklJvSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9nb2xkZW4tY3Vw/LXRyb3BoeS1pc29s/YXRlZC13aGl0ZS0z/ZF81MDUwODAtNDg5/LmpwZz9zZW10PWFp/c19oeWJyaWQ"
                                alt="Achievement 3"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className=" w-[80%]  pt-20 mx-auto  flex flex-col items-center justify-center">
                <div className=''>
                    <h2 className="text-2xl   font-bold text-[#f7a320]  mb-2">
                        Contact Bangladesh Section
                    </h2>
                    <div className="block w-16 h-1 bg-[#f7a320]    mb-6"></div>
                    <div className="space-y-4 ">
                        <div className="flex flex-col md:flex-row md:items-start">
                            <span className="font-semibold w-48">Chair:</span>
                            <p

                                className="text-[#f7a320]   hover:underline"
                            >
                                Prof. Dr. Celia Shahnaz
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start">
                            <span className="font-semibold w-48">Email:</span>
                            <p

                                className="text-[#f7a320]   hover:underline"
                            >
                                celia.shahnaz@ieee.org
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start">
                            <span className="font-semibold w-48">Secretary:</span>
                            <span>Raihan Razeen</span>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start">
                            <span className="font-semibold w-48">Email:</span>
                            <span>raihan.razeen@gmail.com</span>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start">
                            <span className="font-semibold w-48">Ms. Salma [Office Secretary]:</span>
                            <span>+88-01992-30 06 79</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default IEEEBangladesh;