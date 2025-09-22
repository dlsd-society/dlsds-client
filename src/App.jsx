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
import { UserAuthProvider } from './context/UserAuthContext';
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
import EventPage from './pages/EventsPage/EventPage';
import UserLoginPage from './pages/User/LoginPage/UserLoginPage';
import UserSignupPage from './pages/User/SignupPage/UserSignupPage';
import UserDashboardPage from './pages/User/DashboardPage/UserDashboardPage';
import RequireUserAuth from './user/RequireUserAuth';
import UserProfilePage from './pages/User/ProfilePage/UserProfilePage';
import MyPurchasesPage from './pages/User/PurchasesPage/MyPurchasesPage';
import MyAchievementsPage from './pages/User/AchievementsPage/MyAchievementsPage';
import FisrtHackRegistrationPage from './pages/FirstHackRegistrationPage/FirstHackRegistrationPage';
import InternshipRegistrationPage from './pages/InternshipRegistrationPage/InternshipRegistrationPage';
import GoogleSuccess from './pages/User/GoogleSuccess/GoogleSuccess';
import IssueBadgesPage from './admin/IssueBadgesPage';
import IssueCertificatesPage from './admin/IssueCertificatesPage';
import VerifyPage from './pages/VerifyPage/VerifyPage';


function App() {
  return (
    <AdminAuthProvider>
      <UserAuthProvider>
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

          {/* User routes */}
          <Route path="/user/login" element={<UserLoginPage />} />
          <Route path="/user/signup" element={<UserSignupPage />} />

          <Route path="/user/google-success" element={<GoogleSuccess />} />

          <Route
            path="/user/dashboard"
            element={
              <RequireUserAuth>
                <UserDashboardPage />
              </RequireUserAuth>
            }
          />

          <Route
            path="/user/profile"
            element={
              <RequireUserAuth>
                <UserProfilePage />
              </RequireUserAuth>
            }
          />
          <Route
            path="/user/purchases"
            element={
              <RequireUserAuth>
                <MyPurchasesPage />
              </RequireUserAuth>
            }
          />
          <Route
            path="/user/achievements"
            element={
              <RequireUserAuth>
                <MyAchievementsPage />
              </RequireUserAuth>
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
          <Route 
            path="/admin-dashboard/issue-certificates" 
            element={
              <IssueCertificatesPage />
            } 
          />          
          <Route 
            path="/admin-dashboard/issue-badges" 
            element={
              <IssueBadgesPage />
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
          <Route
            path="/firsthack/event"
            element={
              <>
                <ContactBarFirstHack />
                <NavbarFirstHack />
                <EventPage />
              </>
            }
          />
          <Route
            path="/firsthack/register"
            element={
              <>
                <ContactBarFirstHack />
                <NavbarFirstHack />
                <FisrtHackRegistrationPage />
              </>
            }
          />
          <Route
            path="/firsthack/internship-register"
            element={
              <>
                <ContactBarFirstHack />
                <NavbarFirstHack />
                <InternshipRegistrationPage />
              </>
            }
          />
          <Route path="/verify/:code" element={<VerifyPage />} />
        </Routes>
      </UserAuthProvider>
    </AdminAuthProvider>
  );
}

export default App;
