import React from "react";
import CertificateCard from "./CertificateCard";

// Sample image imports
import cert1 from "../../assets/mern.png";
import cert2 from "../../assets/dsa.png";
import cert3 from "../../assets/dbms.png";

const Certificate = () => {
  return (
    <div id="Certifications" className="p-10 md:p-24 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
        Certifications
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        <CertificateCard
          title="Full Stack Software Development"
          description="Completed a full stack development course covering MongoDB, Express.js, React, and Node.js (MERN stack)."
          image={cert1}
          link="https://drive.google.com/file/d/1V702odreOwqObjV7q6tEAkoPGI3FeMzj/view?usp=sharing"
        />
        <CertificateCard
          title="Data Structures and Algorithms"
          description="Learned algorithmic problem-solving techniques and gained hands-on experience with core data structures in C++."
          image={cert2}
          link="https://drive.google.com/file/d/1kI3J_SOYohHbO_Z39G5POOSnHT1eqH6U/view?usp=sharing"
        />
        <CertificateCard
          title="Database Management System"
          description="Acquired a solid foundation in DBMS concepts and practical SQL querying for relational databases."
          image={cert3}
          link="https://drive.google.com/file/d/1_jkdfWozxayH76Kv8fPF_CdizgzM5JiM/view?usp=sharing"
        />
      </div>
    </div>
  );
};

export default Certificate;
