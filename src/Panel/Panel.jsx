import React from 'react';

const members = [
  {
    name: 'Full Name',
    designation: 'Designation',
    info: 'Department or IEEE ID',
    imgSrc: 'img/user.png',
    fb: 'https://www.facebook.com/ieeecslu',
    li: 'https://www.linkedin.com/company/ieeecslu/',
  },
  {
    name: 'Full Name',
    designation: 'Designation',
    info: 'Department or IEEE ID',
    imgSrc: 'img/user.png',
    fb: 'https://www.facebook.com/ieeecslu',
    li: 'https://www.linkedin.com/company/ieeecslu/',
  },
  {
    name: 'Full Name',
    designation: 'Designation',
    info: 'Department or IEEE ID',
    imgSrc: 'img/user.png',
    fb: 'https://www.facebook.com/ieeecslu',
    li: 'https://www.linkedin.com/company/ieeecslu/',
  },
  {
    name: 'Full Name',
    designation: 'Designation',
    info: 'Department or IEEE ID',
    imgSrc: 'img/user.png',
    fb: 'https://www.facebook.com/ieeecslu',
    li: 'https://www.linkedin.com/company/ieeecslu/',
  },
];

const MemberCard = ({ name, designation, info, imgSrc, fb, li }) => (
  <div className="p-6 text-center">
    <img src={imgSrc} alt={name} className="w-[200px] h-[200px] mx-auto mb-4" />
    <div className="shadow-md p-4 mx-auto w-fit px-10">
      <h3 className="text-xl font-bold">{name}</h3>
      <span className="text-[#f7a320]">{designation}</span>
      <p>{info}</p>
      <div className="text-2xl mt-2">
        <a href={fb} className="text-black hover:text-[#f7a320] px-2"><i className="fa-brands fa-facebook"></i></a>
        <a href={li} className="text-black hover:text-[#f7a320] px-2"><i className="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  </div>
);

const Panel = () => {
  return (
    <div className="px-4 py-8 space-y-10">

      {/* Advisory Panel */}
      <section className="text-center">
        <h1 className="text-3xl font-bold text-[#f7a320]">Current Advisory Panel</h1>
        <p className="text-gray-600">Distinguished Advisors Supporting Our Mission</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {members.slice(0, 2).map((m, idx) => <MemberCard key={idx} {...m} />)}
        </div>
      </section>

      {/* Committee Members */}
      <section className="text-center">
        <h1 className="text-3xl font-bold text-[#f7a320]">Current Executive Committee Members (2023-2024)</h1>
        <p className="text-gray-600">Leading Innovation and Technology Excellence</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {members.map((m, idx) => <MemberCard key={idx} {...m} />)}
        </div>
      </section>

      {/* Previous Advisory Panel */}
      <section className="text-center">
        <h1 className="text-3xl font-bold text-[#f7a320]">2022-2023 Advisory Panel</h1>
        <p className="text-gray-600">Previous Advisor Panel</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {members.slice(0, 2).map((m, idx) => <MemberCard key={idx} {...m} />)}
        </div>
      </section>

      {/* Previous Committee Members */}
      <section className="text-center">
        <h1 className="text-3xl font-bold text-[#f7a320]">2022-2023 Committee Members</h1>
        <p className="text-gray-600">Previous Leadership Team</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {members.map((m, idx) => <MemberCard key={idx} {...m} />)}
        </div>
      </section>

    </div>
  );
};

export default Panel;