// import React, { useEffect } from "react";
// import ReportSection from "../../components/ReportSection/ReportSection";

// const activityReports = [
//   { title: "Digital Literacy Awareness Drive - Aug 2022", link: "#" },
//   { title: "Digital Literacy Awareness Drive - Sep 2022", link: "#" },
//   { title: "Digital Literacy Awareness Drive - Oct 2022", link: "#" },
//   { title: "Software Development Internship - Dec 2022", link: "#" },
//   { title: "Software Development Internship - Aug 2023", link: "#" },  
// ];

// const auditReports = [
//   { title: "Audited Report FY 2022-2023", link: "#" },
//   { title: "Audited Report FY 2021-2022", link: "#" },
//   { title: "Audited Report FY 2020-2021", link: "#" },
//   { title: "Audited Report FY 2019-2020", link: "#" },
//   { title: "Audited Report FY 2018-2019", link: "#" },
//   { title: "Audited Report FY 2017-2018", link: "#" },
// ];

// const annualReports = [
//   { title: "Annual Report FY 2022-2023", link: "#" },
//   { title: "Annual Report FY 2021-2022", link: "#" },
//   { title: "Annual Report FY 2020-2021", link: "#" },
//   { title: "Annual Report FY 2019-2020", link: "#" },
// ];

// const ResourcesPage = () => {
//   useEffect(() => {
//     const hash = window.location.hash;
//     if (hash) {
//       const section = document.querySelector(hash);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, []);

//   return (
//     <div className="resources-page">
//         <ReportSection id="activities" title="Activities" reports={activityReports} />
//         <ReportSection id="audit" title="Audit Reports" reports={auditReports} />
//         <ReportSection id="annual" title="Annual Reports" reports={annualReports} />
//     </div>
//   );
// };

// export default ResourcesPage;



import React, { useEffect, useState } from "react";
import ReportSection from "../../components/ReportSection/ReportSection";
import axios from "axios";
import BASE_URL from "../../config/config";

const ResourcesPage = () => {
  const [activityReports, setActivityReports] = useState([]);
  const [auditReports, setAuditReports] = useState([]);
  const [annualReports, setAnnualReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/reports`);
        const allReports = res.data;

        console.log("DID I GET ", allReports)

        // Categorize
        setActivityReports(allReports.filter(r => r.category.toLowerCase() === "activity"));
        setAuditReports(allReports.filter(r => r.category.toLowerCase() === "audit"));
        setAnnualReports(allReports.filter(r => r.category.toLowerCase() === "annual"));
      } catch (err) {
        console.error("Failed to fetch reports", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="resources-page">
      {loading ? (
        <p>Loading reports...</p>
      ) : (
        <>
          <ReportSection id="activities" title="Activities" reports={activityReports} />
          <ReportSection id="audit" title="Audit Reports" reports={auditReports} />
          <ReportSection id="annual" title="Annual Reports" reports={annualReports} />
        </>
      )}
    </div>
  );
};

export default ResourcesPage;
