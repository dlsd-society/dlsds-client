import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactBar from './components/ContactBar/ContactBar';
import Navbar from './components/Navbar/Navbar';
import FooterSection from './components/FooterSection/FooterSection';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import DonationPage from './pages/DonationPage/DonationPage';
import CoursesAndCertifications from './pages/CoursesAndCertifications/CoursesAndCertifications';
import ResourcesPage from './pages/ResourcesPage/ResourcesPage';
import ProgramsPage from './pages/ProgramsPage/ProgramsPage';
import PartnersPage from './pages/PartnersPage/PartnersPage';

import { AdminAuthProvider } from './context/AdminAuthContext';
import AdminLoginPage from './admin/AdminLoginPage';
import RequireAdminAuth from './admin/adminRoutes';
import AdminDashboardPage from './admin/AdminDashboardPage';
import ManageReportsPage from './admin/ManageReportsPage';
import UploadActivityForm from './admin/UploadActivityForm';
import UploadAuditReportForm from './admin/UploadAuditReportForm';
import UploadAnnualReportForm from './admin/UploadAnnualReportForm';
import InternshipPage from './pages/InternshipPage/InternshipPage';
import FirstHack from './pages/FirstHack/FirstHack';
import NavbarFirstHack from './components/NavbarFirstHack/NavbarFirstHack';
import Hackathon from './pages/Hackathon/Hackathon';
import ContactBarFirstHack from './components/ContactBarFirstHack/ContactBarFirstHack';

function App() {
  return (
    <AdminAuthProvider>
      <Routes>
        {/* Public layout */}
        <Route
          path="/*"
          element={
            <>
              <ContactBar />
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/donation" element={<DonationPage />} />
                <Route path="/courses" element={<CoursesAndCertifications />} />

                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/programs" element={<ProgramsPage />} />
                <Route path="/partners" element={<PartnersPage />} />
              </Routes>
              <FooterSection />
            </>
          }
        />

        {/* Admin-only routes */}
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route
          path="/admin-dashboard"
          element={
            <RequireAdminAuth>
              <AdminDashboardPage />
            </RequireAdminAuth>
          }
        />
        <Route
          path="/admin-dashboard/manage-reports"
          element={
            <RequireAdminAuth>
              <ManageReportsPage />
            </RequireAdminAuth>
          }
        />
        <Route
          path="/admin-dashboard/manage-reports/activity"
          element={
            <RequireAdminAuth>
              <UploadActivityForm />
            </RequireAdminAuth>
          }
        />
        <Route
          path="/admin-dashboard/manage-reports/audit"
          element={
            <RequireAdminAuth>
              <UploadAuditReportForm />
            </RequireAdminAuth>
          }
        />
        <Route
          path="/admin-dashboard/manage-reports/annual"
          element={
            <RequireAdminAuth>
              <UploadAnnualReportForm />
            </RequireAdminAuth>
          }
        />
        {/* Firsthack */}
        <Route
          path="/firsthack"
          element={
            <>
              <ContactBarFirstHack />
              <NavbarFirstHack />
              <FirstHack />
            </>
          }
        />
        <Route
          path="/firsthack/internships-and-training"
          element={
            <>
              <ContactBarFirstHack />
              <NavbarFirstHack />
              <InternshipPage />
            </>
          }
        />
        <Route
          path="/firsthack/hackathons"
          element={
            <>
              <ContactBarFirstHack />
              <NavbarFirstHack />
              <Hackathon />
            </>
          }
        />
        <Route
          path="/firsthack/courses"
          element={
            <>
              <ContactBarFirstHack />
              <NavbarFirstHack />
              <CoursesAndCertifications />
            </>
          }
        />
      </Routes>
    </AdminAuthProvider>
  );
}

export default App;
