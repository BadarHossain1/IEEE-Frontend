import React from 'react';

const Committee = () => {
    const teamMembers = [
        { name: 'A', role: 'Chairperson' },
        { name: 'B', role: 'Vice Chairperson' },
        { name: 'C', role: 'Secretary' },
        { name: 'D', role: 'Treasurer' },
      ];
      
    return (
        <section className="my-24 mx-12">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">2025 Committee</h2>
        <div className="flex flex-wrap justify-center gap-5 lg:gap-24">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center max-w-[150px] ">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-3"></div>
              <div className="font-semibold text-lg text-black leading-7">{member.name}</div>
              <div className="text-sm font-normal leading-5 text-yellow-500">{member.role}</div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Committee;