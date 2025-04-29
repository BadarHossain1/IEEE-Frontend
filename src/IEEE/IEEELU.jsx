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
import { ArrowRight } from "lucide-react";

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


            <div className="w-[85%] mx-auto pt-20  px-6 md:px-20">
                <div className="bg-[#012B52] flex flex-col md:flex-row items-center gap-10">
                    {/* Text Section */}
                    <div className="md:w-1/2  text-white  p-8">
                        <h2 className="text-3xl font-bold mb-2">Mission</h2>
                        <div className="w-20 h-1 bg-white mb-6"></div>
                        <p className="text-sm leading-relaxed">
                            Our mission is to cultivate a strong community of aspiring engineers by providing a wide range of opportunities for personal and professional growth. Through pioneering initiatives and collaboration, we are committed to inspiring curiosity, stimulating creativity, and achieving excellence. By providing a nurturing environment and fostering a culture of continuous learning, we aim to enable students to reach their full potential and make meaningful contributions to the world. Together, we aim to create a vibrant ecosystem that promotes innovation, strengthens connections and provides a sense of empowerment and value to the members as they work towards success in engineering and beyond.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2 ">
                        <img
                            src="https://imgs.search.brave.com/W-QOuQYxLVFSH8OnsJ8qqLLQo6eiKnQIquRXKvazI5U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVj/cmF6eXNpbXBsZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDcvNG5rb2Vh/cWF0Z2EtMTAyNHg2/NzguanBn"
                            alt="Mission visual"
                            className="shadow-lg"
                        />
                    </div>
                </div>
            </div>
            <div className="w-[85%] mx-auto pt-5 pb-10 px-6 md:px-20">
                <div className="bg-[#012B52] flex flex-col-reverse md:flex-row-reverse items-center gap-10">
                    {/* Text Section */}
                    <div className="md:w-1/2  text-white  p-8">
                        <h2 className="text-3xl font-bold mb-2">Vision</h2>
                        <div className="w-20 h-1 bg-white mb-6"></div>
                        <p className="text-sm leading-relaxed">
                            To be a leading Student Branch dedicated to the continual advancement of engineering knowledge and skills among students. Our goal is to create a dynamic environment where members can master their technical skills, network, and advance their professional careers. With an unwavering commitment to excellence, we strive to shape the future of engineering for the betterment of humanity by developing a culture of lifelong learning and empowering future leaders. Through collaborative efforts and relentless dedication, we aspire to be at the forefront of engineering education and practice, leaving a lasting impact on society and inspiring future generations.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2 ">
                        <img
                            src="https://imgs.search.brave.com/W-QOuQYxLVFSH8OnsJ8qqLLQo6eiKnQIquRXKvazI5U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVj/cmF6eXNpbXBsZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDcvNG5rb2Vh/cWF0Z2EtMTAyNHg2/NzguanBn"
                            alt="Mission visual"
                            className="shadow-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="w-[85%] mx-auto pt-20 pb-10 px-6 md:px-20">
                <div className="flex flex-col md:flex-row items-start gap-10">
                    {/* Text Section */}
                    <div className="md:w-2/3">
                        <h2 className="text-4xl font-bold text-black mb-2">Events</h2>
                        <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            IEEE NSU Student Branch arranges different superlative events such as workshops, industrial tours, seminars and competitions that aid members to amplify their knowledge, acquire lots of skills and experiences. International and local events provide an insight into the technological and scientific advancements in the relative fields and the members gain extensive knowledge and profound experiences that benefit them in the long run. Out of the numerous events arranged by IEEE NSU SB, one example is the Student Competition IEEE Xtreme which boosts expertise and allows the participants to earn accolades. IEEE NSU SB offers free webinars for its members.
                        </p>
                        <p className="text-gray-700 mt-4">
                            To view the list of past and upcoming events, click on the link:
                        </p>

                        {/* Button */}
                        <button className="mt-4 bg-[#012B52] hover:bg-[#011f3a] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 shadow">
                            <ArrowRight className="w-4 h-4" />
                            All Events
                        </button>
                    </div>

                    {/* Calendar Section */}
                    <div className="md:w-1/3">
                        <h3 className="text-xl font-bold mb-2">EVENT CALENDER</h3>
                        <div className="w-20 h-1 bg-yellow-400 mb-4"></div>
                        <div class="">
                            <div class="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                                <div class="bg-gradient-to-r from-blue-700 to-cyan-500 text-white text-center py-4 text-xl font-semibold">
                                    April 2025
                                </div>
                                <div class="grid grid-cols-7 text-center text-gray-700 font-medium bg-gray-100">
                                    <div>Mon</div>
                                    <div>Tue</div>
                                    <div>Wed</div>
                                    <div>Thu</div>
                                    <div>Fri</div>
                                    <div>Sat</div>
                                    <div>Sun</div>
                                </div>
                                <div class="grid grid-cols-7 gap-2 text-center py-4 px-2 text-gray-800">

                                    <div></div><div></div><div></div><div></div>

                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
                                    <div>6</div>
                                    <div>7</div>
                                    <div class="relative">
                                        8

                                        <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>
                                    </div>
                                    <div>9</div>
                                    <div>10</div>
                                    <div>11</div>
                                    <div>12</div>
                                    <div>13</div>
                                    <div>14</div>
                                    <div>15</div>
                                    <div>16</div>
                                    <div>17</div>
                                    <div>18</div>
                                    <div>19</div>
                                    <div>20</div>
                                    <div>21</div>
                                    <div>22</div>
                                    <div>23</div>
                                    <div>24</div>
                                    <div>25</div>
                                    <div>26</div>
                                    <div>27</div>
                                    <div>28</div>
                                    <div>29</div>
                                    <div>30</div>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>


            <section className="w-[85%]  mx-auto pt-20 pb-10 px-6 md:px-20">
                <div className="  ">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">
                        Achievements
                    </h2>
                    <div className="w-16 h-1 bg-yellow-400 mb-6"></div>

                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-5">
                        Out of the many incredible achievements of IEEE NSU SB, being awarded the “Best Exemplary Student Branch” in Region 10 for two consecutive years is laudable. In 2009, IEEE NSU SB was honored by its well deserved accolade of “The Best Student Branch” in the IEEE Bangladesh Section. First Positions in the IEEE R10 Web Contest in 2018, in the global IEEE Day Contests in 2017, in the Long Video Contest and the second position in the Photo Contest (Technical Category) are other praiseworthy accomplishments. IEEE NSU SB has earned international recognition, succeeded in providing its members with professional satisfaction and prestige in the form of awards, certificates and other prizes. These achievements serve as meritorious additions to one’s resume, further heightening the chances of turning work potential into employment in the future.
                    </p>




                </div>
            </section>




        </div>
    );
};

export default IEEELU;