import React from "react";
import CertificateCard from "./CertificateCard";

// Sample image imports
import cert1 from "../../assets/mern.png";
import cert2 from "../../assets/dsa.png";
import cert3 from "../../assets/dbms.png";

const Certificate = () => {
  return (
    <div id="Certifications" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Certifications</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
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
          title="Database Management System and SQL"
          description="Acquired a solid foundation in DBMS concepts and practical SQL querying for relational databases."
          image={cert3}
          link="https://drive.google.com/file/d/1_jkdfWozxayH76Kv8fPF_CdizgzM5JiM/view?usp=sharing"
        />
      </div>
    </div>
  );
};

export default Certificate;