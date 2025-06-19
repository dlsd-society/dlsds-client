import React, { useEffect } from "react";
import ReportSection from "../../components/ReportSection/ReportSection";

const activityReports = [
  { title: "Digital Literacy Awareness Drive - Aug 2022", link: "#" },
  { title: "Digital Literacy Awareness Drive - Sep 2022", link: "#" },
  { title: "Digital Literacy Awareness Drive - Oct 2022", link: "#" },
  { title: "Software Development Internship - Dec 2022", link: "#" },
  { title: "Software Development Internship - Aug 2023", link: "#" },  
];

const auditReports = [
  { title: "Audited Report FY 2022-2023", link: "#" },
  { title: "Audited Report FY 2021-2022", link: "#" },
  { title: "Audited Report FY 2020-2021", link: "#" },
  { title: "Audited Report FY 2019-2020", link: "#" },
  { title: "Audited Report FY 2018-2019", link: "#" },
  { title: "Audited Report FY 2017-2018", link: "#" },
];

const annualReports = [
  { title: "Annual Report FY 2022-2023", link: "#" },
  { title: "Annual Report FY 2021-2022", link: "#" },
  { title: "Annual Report FY 2020-2021", link: "#" },
  { title: "Annual Report FY 2019-2020", link: "#" },
];

const ResourcesPage = () => {
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
        <ReportSection id="activities" title="Activities" reports={activityReports} />
        <ReportSection id="audit" title="Audit Reports" reports={auditReports} />
        <ReportSection id="annual" title="Annual Reports" reports={annualReports} />
    </div>
  );
};

export default ResourcesPage;

