import { ExternalLink } from 'lucide-react';
import React from 'react';

const IEERegion10 = () => {
    return (
        <div className="w-full mx-auto  ">
            <div className="flex justify-center items-center w-full h-[300px] bg-black  mt-[1px]">
                <h1 className="text-4xl font-bold text-center text-white *:mb-6">
                    About-IEEE REGION 10
                </h1>
            </div>
            <div className=" w-[85%] mx-auto  pt-20 pb-10 px-6 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-42 ">

                    {/* Left side - IEEE Logo */}
                    <div className="flex justify-center">
                        <img
                            src="/path-to-your-image/ieee-logo.png" // <-- Update this path
                            alt="IEEE Logo"
                            className="w-60 h-60 object-contain"
                        />
                    </div>

                    {/* Right side - About Text */}
                    <div className=" lg:ml-[40px]">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            IEEE REGION 10 <span className="block w-26 h-1 bg-[#f7a320]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 max-w-xl leading-relaxed text-justify">
                            In the Institute of Electrical and Electronics Engineers (IEEE) there are 422,000 members from 160 countries. The Asia-Pacific region (also known as IEEE Region 10) is the largest, with over 130,000 members. This is the most cohesive community with everyone tied together like a family. This is most certainly the base for all Asian-Pacific organizational units.

                        </p>

                        {/* Buttons */}
                        <div className="flex gap-4 mt-6">

                            <button className="border-2 border-[#f7a320]  hover:bg-[#f7a320]  hover:text-white text-[#f7a320]  font-semibold py-2 px-6 rounded">
                                Region 10 History
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
                            Young Professionals
                            <span className="block w-16 h-1 bg-[#f7a320]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Institute of Electrical and Electronics Engineers (IEEE) Region 10 Young Professionals (YP) is a community of imaginative and creative members and volunteers across Asia Pacific.
                            The Institute of Electrical and Electronics Engineers (IEEE) was established to assist young professionals in achieving their career goals, cultivating a dazzling professional image, and establishing a high profile in a variety of fields.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-[#f7a320] ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                  <ExternalLink size={18} />IEEE R10 YP
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


            <div className="bg-[#f7a320] w-[85%] mx-auto py-16 px-6 md:px-20">
                <div className="w-[85%] mx-auto  grid md:grid-cols-2 gap-10 justify-between  ">

                    {/* Women in Engineering
 */}
                    <div className="border-r border-white pr-8">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Women in Engineering

                            <div className="w-16 h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            Institute of Electrical and Electronics Engineers (IEEE) Region10 Women in Engineering (WIE) is one of the largest international technical organizations dedicated for supporting women engineers and scientists and encouraging girls around the world to pursue a career in engineering. With 20,000 members from various countries, we are here to shine with the power of women.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-[#f7a320] ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} />  IEEE R10 WIE
                            </a>

                        </div>

                    </div>

                    {/* Students and Member Activities */}
                    <div className="pl-8">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Students and Member Activities
                            <div className="w-16 h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            The Institute of Electrical and Electronics Engineers (IEEE) Region 10 Student Activities Committee is responsible for the needs of students from different student divisions in Asia-Pacific. They are very involved with all of their projects and respond quickly to IEEE-related questions. This group is very welcoming to newcomers and volunteers, and they are quick to inform them of their opportunities.
                        </p>
                        <div className="mt-6 flex flex-col gap-2 text-[#f7a320] ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} />   IEEE R10 SAC
                            </a>

                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-[#f7a320] w-[85%] mx-auto  py-16 px-6 md:px-20">
                <div className=" w-[85%] mx-auto grid md:grid-cols-2 gap-10 justify-between  ">

                    {/* Educational Activities and Involvements */}
                    <div className="border-r border-white pr-8">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Educational Activities and Involvements
                            <div className="w-16 h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            Institute of Electrical and Electronics Engineers (IEEE) Region 10 is very interested in educational websites. The bulk of the events here are related to education and edification. Every aspect of educational advancement is addressed here in order to make student participants as effective as professionals.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-[#f7a320] ">

                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> Region 10 Educational Involvements
                            </a>

                        </div>
                    </div>

                    {/* Industry Relations */}
                    <div className="pl-8">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Events and Conferences
                            <div className="w-16 h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            Institute of Electrical and Electronics Engineers (IEEE) Region 10 Industry Relations Committee (IRC) is very important and effective community for R10. Now a days Students and Early Researcher Conference fund (SERCF) is willing to offer financial assistance to IEEE Student members and other members to enrich their exposure and experience. This community is working hard to incorporate the industry members.

                        </p>
                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-[#f7a320] ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> R10 Industry Relations
                            </a>


                        </div>
                    </div>

                </div>
            </div>


            <div className=" pt-20 pb-10 px-6 md:px-20">
                <div className=" w-[85%] mx-auto  flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-10">

                    {/* Left side - Text content */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Membership Development
                            <span className="block w-16 h-1 bg-[#f7a320]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            The Membership Development and Leadership Training (MDLT) Fund of the Institute of Electrical and Electronics Engineers (IEEE) Region 10 Student Activities Committee (SAC) was established to persuade sections/student divisions to arrange events for the training of professionalism and growing up with leadership experience.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-[#f7a320] ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                  <ExternalLink size={18} /> Membership Development
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                  <ExternalLink size={18} /> Membership Activities
                            </a>



                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center">
                        <img
                            src="/path-to-your-image/community-image.png" // <-- Update this path
                            alt="Community Network"
                            className="w-[400px] h-auto object-contain"
                        />
                    </div>
                </div>
            </div>

            <section className=" pt-20 pb-10 px-6 md:px-20">
                <div className="w-[85%] mx-auto  ">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-[#f7a320]  mb-4">
                        Events and Conference
                    </h2>
                    <div className="w-16 h-1 bg-[#f7a320]  mb-6"></div>

                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-5">
                        TENCON is the flagship premier international technical conference of IEEE Region 10. IEEE sponsors more than 1,900 annual conferences and events worldwide, curating cutting-edge content for all of the technical fields of interest within IEEE.
                    </p>
                    <a href="#" className="flex text-[#f7a320]  items-center gap-2 hover:underline">
                          <ExternalLink size={18} />  Events List


                    </a>



                </div>
            </section>

            <div className=" w-[85%] pt-20 pb-10 px-6 md:px-20  mx-auto flex flex-col   justify-center">
                <h2 className="text-3xl font-bold text-[#f7a320]  mb-2">
                Contact IEEE R10
                <div className="w-16 h-1 bg-[#f7a320]  mb-6"></div>
                </h2>
                <p className='text-gray-700 text-lg leading-relaxed mb-5'>For getting touched with us please go through this side and join IEEE R10 community as soon as possible.</p>
                <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">Home page:</span>
                        <a
                            href="http://www.ieeer10.org/"
                            className="text-[#f7a320]  hover:underline"
                        >
                            http://www.ieeer10.org/
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">Website:</span>
                        <a href='#'
                            
                            className="text-[#f7a320]  hover:underline"
                        >
                             IEEE Asia Pacific Region 10
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">For membership enquiry:</span>
                        <span><a href="#" className='text-[#f7a320]  hover:underline'>IEEE Support Center</a></span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">For Volunteers::</span>
                        <span>Ewell Tan</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">Contact number:</span>
                        <span>+65 6778 2873, +65 6778 9723</span>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default IEERegion10;