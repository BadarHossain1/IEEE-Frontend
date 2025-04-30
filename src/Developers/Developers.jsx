import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


const PreviousWebmasters = [
  {
    name: 'Mahfuj Alam Chowdhury',
    role: 'UI / UX Designer',
    img: '../../public/img/mahfuz.jpg'
  },
  {
    name: 'Mahfuj Alam Chowdhury',
    role: 'Full Stack Developer',
    img: '../../public/img/mahfuz.jpg'  
  },
  {
    name: 'Mahfuj Alam Chowdhury',
    role: 'UI / UX Designer',
    img: '../../public/img/mahfuz.jpg'
  },
  
  
];


const WebMasters = [
    {
        name: 'Mahfuj Alam Chowdhury',
        role: 'UI / UX Designer',
        img: '../../public/img/mahfuz.jpg'
      },
      {
        name: 'Mahfuj Alam Chowdhury',
        role: 'Full Stack Developer',
        img: '../../public/img/mahfuz.jpg'  
      },
      {
        name: 'Mahfuj Alam Chowdhury',
        role: 'UI / UX Designer',
        img: '../../public/img/mahfuz.jpg'
      },
]
const CoDevelopers = [
    {
        name: 'Mahfuj Alam Chowdhury',
        role: 'UI / UX Designer',
        img: '../../public/img/mahfuz.jpg'
      },
      {
        name: 'Mahfuj Alam Chowdhury',
        role: 'Full Stack Developer',
        img: '../../public/img/mahfuz.jpg'  
      },
      {
        name: 'Mahfuj Alam Chowdhury',
        role: 'UI / UX Designer',
        img: '../../public/img/mahfuz.jpg'
      },
]




const phases = [
  {
    phase: 'Phase 1',
    title: 'Planning & Design',
    description: 'Initial project planning, requirement gathering, and UI/UX design'
  },
  {
    phase: 'Phase 2',
    title: 'Development',
    description: 'Implementation of frontend and backend functionality'
  },
  {
    phase: 'Phase 3',
    title: 'Testing & Deployment',
    description: 'Testing, bug fixes, and final deployment'
  }
];

const Developers = () => {
  return (
    <section className="px-6 py-10 bg-white text-gray-800 font-['Roboto']">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black">Meet Our</h1>
        <h2 className="text-5xl font-extrabold text-[#ea8800] mt-6  ">Development Team</h2>
        <p className="text-lg text-gray-600 mt-6  font-medium">Passionate developers building innovative solutions for IEEE LU Student Branch</p>
      </div>


      <div className="text-center mt-6   mb-6">
    
        <p className="text-3xl font-extrabold text-[#ea8800] mt-6   underline">Previous Web Masters</p>
       
      </div>
      {/* Previous web master Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PreviousWebmasters.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full border-4 border-[#19376D] mb-4"
            />
            <h2 className="text-2xl font-bold text-black">{member.name}</h2>
            <h3 className="text-lg font-medium" style={{ color: '#ea8800' }}>{member.role}</h3>
            <div className="flex gap-4 mt-6  text-2xl text-[#19376D]">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaGithub /></a>
              <a href="#"><FaEnvelope /></a>
            </div>
          </div>
        ))}
      </div>

      {/* current web master Cards */}
      <div className="text-center mt-6   mb-6">
    
        <p className="text-3xl font-extrabold text-[#ea8800] mt-6   underline">Web Masters</p>
       
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WebMasters.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full border-4 border-[#19376D] mb-4"
            />
            <h2 className="text-2xl font-bold text-black">{member.name}</h2>
            <h3 className="text-lg font-medium" style={{ color: '#ea8800' }}>{member.role}</h3>
            <div className="flex gap-4 mt-6  text-2xl text-[#19376D]">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaGithub /></a>
              <a href="#"><FaEnvelope /></a>
            </div>
          </div>
        ))}
      </div>
      {/* Guest developers Cards */}
      <div className="text-center mt-6   ">
    
        <p className="text-3xl font-extrabold text-[#ea8800] mt-6   underline">Co-Developers</p>
       
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" >
        {CoDevelopers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full border-4 border-[#19376D] mb-4"
            />
            <h2 className="text-2xl font-bold text-black">{member.name}</h2>
            <h3 className="text-lg font-medium" style={{ color: '#ea8800' }}>{member.role}</h3>
            <div className="flex gap-4 mt-6  text-2xl text-[#19376D]">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaGithub /></a>
              <a href="#"><FaEnvelope /></a>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline Heading */}
      <div className="text-center mt-12  0 mb-10">
        <h2 className="text-4xl font-bold text-black">Development Timeline</h2>
        <p className="text-lg text-gray-600 mt-6  ">Our journey in building the IEEE LU SB Portal</p>
      </div>

      {/* Timeline Phases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="bg-[#f5f5f5] p-6 rounded-xl shadow-md text-center"
          >
            <h4 className="text-xl font-bold text-[#ea8800]">{phase.phase}</h4>
            <h3 className="text-2xl text-[#0B2447] font-semibold mt-6  ">{phase.title}</h3>
            <p className="text-gray-700 mt-6  ">{phase.description}</p>
          </div>
        ))}
      </div>

      {/* Technologies Used */}
      <div className="text-center mt-12  0">
        <h2 className="text-4xl font-bold text-black">Technologies Used</h2>
        <p className="text-lg text-gray-600 mt-6  ">Built with modern and reliable technologies</p>
        <div className="flex flex-wrap justify-evenly gap-8 mt-6">
          <img src="/img/react.png" alt="React" className="h-16" />
          <img src="/img/html.png" alt="HTML" className="h-16" />
          <img src="/img/css.png" alt="CSS" className="h-16" />
          <img src="/img/js.png" alt="JavaScript" className="h-16" />
          <img src="/img/dbms.png" alt="DBMS" className="h-16" />
        </div>
      </div>
    </section>
  );
};

export default Developers;
