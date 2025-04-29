import React from 'react';
import {
    FileText,
    Code2,
    Film,
    Pencil,
    Users,
    DollarSign,
    Megaphone,
    Calendar,
    Truck
} from 'lucide-react';

const IEEELU = () => {
    const creativeTeamItems = [
        { icon: <FileText size={40} />, title: 'Content Writing and Publications' },
        { icon: <Code2 size={40} />, title: 'Website Development' },
        { icon: <Film size={40} />, title: 'Media' },
        { icon: <Pencil size={40} />, title: 'Graphics' },
        { icon: <Users size={40} />, title: 'Membership Development' },
        { icon: <DollarSign size={40} />, title: 'Finance and Corporate' },
        { icon: <Megaphone size={40} />, title: 'Public Relations and Promotions' },
        { icon: <Calendar size={40} />, title: 'Events and Management' },
        { icon: <Truck size={40} />, title: 'Logistics and Operations' },
    ];

    return (
        <div className='w-full mx-auto'>
            <div className="flex justify-center items-center w-full h-[300px] bg-black  mt-[1px]">
                <h1 className="text-4xl font-bold text-center text-white *:mb-6">
                    ABOUT – IEEE NSU STUDENT BRANCH
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
                            ABOUT <span className="block w-26 h-1 bg-yellow-400 mt-2"></span>
                        </h2>
                        <p className="text-gray-700 max-w-xl leading-relaxed text-justify">
                            IEEE NSU Student Branch is an esteemed subunit of IEEE, the largest technical professional association, that strives to build camaraderie and a sense of higher purpose amongst the students in all aspects of engineering and science fields. IEEE NSU SB serves its members with knowledge and skills besides making all resources, benefits and facilities available from IEEE, accessible. Established in 2007, IEEE NSU SB is North South University’s first internationally recognized student organization for engineers and enthusiasts. Paving the way for a successful career, promoting technological reformations and providing the correct exposure for the growth of one’s professional network, it has not only benefited its members academically but has also done so socially. Communication, management and leadership skills are enhanced through participation in the volunteering activities at this student branch. Earn skills like content writing, social media management, graphic design, user interface design and web development here, at IEEE NSU SB!

                        </p>

                    </div>
                </div>
            </div>


            <div className="w-[85%] mx-auto pt-20 pb-10 px-6 md:px-20">
                <h2 className="text-3xl font-bold mb-4">
                    Creative Team
                </h2>
                <div className="h-1 w-12 bg-yellow-400 mb-6"></div>
                <p className="text-gray-700 mb-10 leading-relaxed">
                    The governing body that leads this booming student branch with triumphant experts includes the Branch Counselor, Branch Mentor, Chair, Vice Chair, Secretary, Treasurer, the Chairs of the student chapters and the affinity group. They assist and conduct all the activities of IEEE NSU SB along with the in-charges and core volunteers. Immaculate hard work and proficiency is endowed by the leaders who direct and organize the events, carry out the administrative duties related to the Student Branch, communicate with IEEE, hold recruitment events and ensure that members reap the benefits. They ensure that the missions of IEEE NSU SB are accomplished as the members actively participate in national and global competitions, and proudly represent NSU. Not only do the seniors help the students in matters related to IEEE, but they also do so for other aspects of their university lives, which only adds to the benefits of joining IEEE NSU SB.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center text-gray-700">
                    {creativeTeamItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="text-gray-700 mb-3">{item.icon}</div>
                            <p className="font-semibold">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    );
};

export default IEEELU;