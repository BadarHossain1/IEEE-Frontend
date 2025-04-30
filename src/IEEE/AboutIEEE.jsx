import { ExternalLink } from "lucide-react";
import React from "react";

const AboutIEEE = () => {
    return (
        <div className="w-full mx-auto bg-white">

            <div className="flex justify-center items-center w-full h-[300px] bg-black  mt-[0px]">
                <h1 className="text-4xl font-bold text-center text-white *:mb-6">
                    ABOUT – IEEE 
                </h1>
            </div>


            <div className=" w-[85%] mx-auto  pt-20 pb-10 px-6 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-42 ">

                    {/* Left side - IEEE Logo */}
                    <div className="flex justify-center w-full h-full">
                        <img
                            src="https://i.ibb.co.com/KxYhtFbD/IEEE-LOGO.gif" // <-- Update this path
                            alt="IEEE Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Right side - About Text */}
                    <div className=" lg:ml-[40px]">
                        <h2 className="text-3xl font-bold text-[#f7a320]  mb-4">
                            About <span className="block w-26  h-1 bg-[#f7a320]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            IEEE (Institute of Electrical and Electronics Engineers)
                            is a large professional association for engineers. Its corporate office
                            is in New York City at United States and its headquarter is located at
                            Piscataway, New Jersey, United States. This association focuses to develop
                            Electrical Electronic and Technical sites, Computer Science and Engineering
                            sites and finally the Telecommunications sites. This is the world wide
                            association for all engineers nowadays.

                        </p>

                        {/* Buttons */}
                        <div className="flex gap-4 mt-6">
                            <button className="bg-[#f7a320]  hover:bg-[#f7a320]   text-white font-semibold py-2 px-6 rounded">
                                Learn More
                            </button>
                            <button className="border-2 border-white hover:bg-white hover:text-black text-[#f7a320]  font-semibold py-2 px-6 rounded">
                                Mission and Vision
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-[85%] mx-auto pt-20 pb-10 px-6 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">

                    {/* Left side - Text content */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-[#f7a320] mb-4">
                            Largest Community
                            <span className="block w-16 h-1 bg-[#f7a320]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Institute of Electrical and Electronics Engineers (IEEE) is the largest world wide
                            professional association for engineering sites. IEEE starts with 150,000 members
                            (93% from US) group which is now extended with over 400,000 members from 160 countries,
                            with the U.S. based membership no longer constituting a majority. It has the biggest
                            community with a huge number of members and workers. There are huge numbers of
                            Technical Societies, Technical councils and Technical Committees under IEEE.
                            The IEEE community is like a family with so many heartiest peoples.
                            To know more about this
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-[#f7a320]  ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                  <ExternalLink size={18} /> Technical Society
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                  <ExternalLink size={18} /> Technical Councils
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                  <ExternalLink size={18} /> Technical Committees
                            </a>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co.com/HL4RQZTc/community.jpg" // <-- Update this path
                            alt="Community Network"
                            className="w-[300px] h-[300px] object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-[#f7a320] w-[85%] mx-auto   py-16 px-6 md:px-20">
                <div className="w-[85%] mx-auto  grid md:grid-cols-2 gap-10 justify-between  ">

                    {/* Start with IEEE */}
                    <div className="border-r border-white pr-8">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Start with IEEE
                            <div className="w-16  h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            Who doesn’t wanna gain knowledge by experiencing something new and exciting!!
                            If you wanna explore your life in a whole new way then IEEE is the best association
                            for you. It will give you thousands of platforms and growing activities by which you
                            can prepare yourself with a presentable way of thinking. If you are interested to
                            experience and to gain knowledge about the unknown mysterious techniques and inventions
                            of science and Technology, then start with IEEE. Here is some extra ordinary communities
                            and activities where you can involve easily and explore yourself.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-white">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> IEEE Xplore
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> IEEE Spectrum
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> IEEE Standards
                            </a>
                        </div>
                    </div>

                    {/* Collaboration */}
                    <div className="pl-8">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Collaboration
                            <div className="w-16  h-1 bg-white  mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            In the Institute of Electrical and Electronics Engineers (IEEE), there are endless
                            opportunities to grow but you must have to find your own field to stand high.
                            Collaborating with many international technology professionals and verified IEEE
                            members from different countries, anyone can establish their professional identity.
                            IEEE is always in the first position for expanding professional network with current
                            contact, finding easy communication or conversation with technical experts, shorting
                            out any kind of queries about any technical, geographic locations, IEEE membership
                            grades etc by creating a lot of international and internal communities, meetings
                            and seminars.
                        </p>
                    </div>

                </div>
            </div>
            <div className="bg-[#f7a320] w-[85%] mx-auto  py-16 px-6 md:px-20">
                <div className=" w-[85%] mx-auto grid md:grid-cols-2 gap-10 justify-between  ">

                    {/* Publications */}
                    <div className="border-r border-white pr-8">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Publications
                            <div className="w-16  h-1 bg-white  mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            Who doesn’t wanna gain knowledge by experiencing something new and exciting!!
                            If you wanna explore your life in a whole new way then IEEE is the best association
                            for you. It will give you thousands of platforms and growing activities by which you
                            can prepare yourself with a presentable way of thinking.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-white">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> IEEE Publications
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> List of IEEE publications
                            </a>

                        </div>
                    </div>

                    {/* Events and conferences */}
                    <div className="pl-8">
                        <h2 className="text-3xl font-bold text-black mb-4">
                            Events and Conferences
                            <div className="w-16  h-1 bg-white mt-2"></div>
                        </h2>
                        <p className="text-white text-justify leading-relaxed">
                            In the Institute of Electrical and Electronics Engineers (IEEE), there are endless
                            opportunities to grow but you must have to find your own field to stand high.
                            Collaborating with many international technology professionals and verified IEEE
                            members from different countries, anyone can establish their professional identity.

                        </p>
                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-white">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> IEEE Conference and Events
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> Conference and Event Search
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                                <ExternalLink size={18} /> Events and Conferences Calender
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
                    <div className="w-16  h-1 bg-[#f7a320]  mb-6"></div>

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
                                src="https://i.ibb.co.com/TqWqd8T1/trophy.jpg"
                                alt="Achievement 1"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="bg-gray-200 h-auto rounded-md overflow-hidden">
                            <img
                                src="https://i.ibb.co.com/TqWqd8T1/trophy.jpg"
                                alt="Achievement 2"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Image 3 */}
                        <div className="bg-gray-200 h-auto rounded-md overflow-hidden">
                            <img
                                src="https://i.ibb.co.com/TqWqd8T1/trophy.jpg"
                                alt="Achievement 3"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className=" pt-20 pb-10 px-6 md:px-20">
                <div className="w-[85%] mx-auto flex flex-col md:flex-row items-center justify-center gap-10">

                    {/* Left side - Text content */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-[#f7a320]  mb-4">
                            Innovations and Development
                            <span className="block w-16 h-1 bg-[#f7a320]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Institute of Electrical and Electronics Engineers (IEEE) is the largest world wide
                            professional association for engineering sites. IEEE starts with 150,000 members
                            (93% from US) group which is now extended with over 400,000 members from 160 countries,
                            with the U.S. based membership no longer constituting a majority. It has the biggest
                            community with a huge number of members and workers.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-[#f7a320]  ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                            <ExternalLink size={18} /> Development and Innovations.
                            </a>

                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co.com/rGbLPMKM/innovation.jpg" // <-- Update this path
                            alt="Community Network"
                            className="w-[350px] h-[350px] object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className=" pt-20 pb-10 px-6 md:px-20">
                <div className=" w-[85%] mx-auto  flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-10">

                    {/* Left side - Text content */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-[#f7a320]  mb-4">
                            Student and Member Activities
                            <span className="block w-16 h-1 bg-[#f7a320]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Institute of Electrical and Electronics Engineers (IEEE) is the largest world wide
                            professional association for engineering sites. IEEE starts with 150,000 members
                            (93% from US) group which is now extended with over 400,000 members from 160 countries,
                            with the U.S. based membership no longer constituting a majority. It has the biggest
                            community with a huge number of members and workers. IEEE starts with 150,000 members
                            (93% from US) group which is now extended with over 400,000 members from 160 countries,
                            with the U.S. based membership no longer constituting a majority. It has the biggest
                            community with a huge number of members and workers.
                        </p>

                        {/* Links */}
                        <div className="mt-6 flex flex-col gap-2 text-[#f7a320]  ">
                            <a href="#" className="flex items-center gap-2 hover:underline">
                            <ExternalLink size={18} /> IEEE Students.
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                            <ExternalLink size={18} /> IEEE Student branch programmer.
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:underline">
                            <ExternalLink size={18} /> IEEE Membership.
                            </a>

                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co.com/DgjMBdZG/students.jpg" // <-- Update this path
                            alt="Community Network"
                            className="w-[350px] h-[350px] object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className="pt-20 pb-10 px-6 md:px-20">
                <div className="w-[85%] mx-auto  flex flex-col md:flex-row items-center justify-center gap-10">

                    {/* Left side - Text content */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-bold text-[#f7a320]  mb-4">
                            Quality
                            <span className="block w-16 h-1 bg-[#f7a320]  mt-2"></span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Institute of Electrical and Electronics Engineers (IEEE) is the largest world wide
                            professional association for engineering sites. IEEE starts with 150,000 members
                            (93% from US) group which is now extended with over 400,000 members from 160 countries,
                            with the U.S. based membership no longer constituting a majority. It has the biggest
                            community with a huge number of members and workers. IEEE starts with 150,000 members
                            (93% from US) group which is now extended with over 400,000 members from 160 countries,
                            with the U.S. based membership no longer constituting a majority. It has the biggest
                            community with a huge number of members and workers.
                        </p>


                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://i.ibb.co.com/CsszgQjw/quality.jpg" // <-- Update this path
                            alt="Community Network"
                            className="w-[350px] h-[350px] object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className=" w-[50%] pt-20  mx-auto flex flex-col  justify-center py-4">
                <h2 className="text-2xl font-bold text-[#f7a320]  mb-2">
                    Contact Section
                </h2>
                <div className="w-16  h-1 bg-[#f7a320]  mb-6"></div>
                <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">Asia Pacific:</span>
                        <a
                            href="https://site.ieee.org/ieeeap/contact-us/location/"
                            className="text-[#f7a320]   hover:underline"
                        >
                            https://site.ieee.org/ieeeap/contact-us/location/
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">IEEE computer organization:</span>
                        <a
                            href="https://www.computer.org/about/contact"
                            className="text-[#f7a320]   hover:underline"
                        >
                            https://www.computer.org/about/contact
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">Customer Service:</span>
                        <span>00 1 732-981-0060</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">Presidents:</span>
                        <span>Karen Bartleson (2017–2018), James A. Jefferies (Incumbent)</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start">
                        <span className="font-semibold w-48">Founders:</span>
                        <span>American Institute of Electrical Engineers, Institute of Radio Engineers</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutIEEE;
