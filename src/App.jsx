import React, { useState } from 'react';
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
import FirstHack from './pages/FirstHack/FirstHack';
import NavbarFirstHack from './components/NavbarFirstHack/NavbarFirstHack';
import Hackathon from './pages/Hackathon/Hackathon';
import ContactBarFirstHack from './components/ContactBarFirstHack/ContactBarFirstHack';
import EventPage from './pages/EventsPage/EventPage';
import UserDashboardPage from './pages/User/DashboardPage/UserDashboardPage';
import RequireUserAuth from './user/RequireUserAuth';
import UserProfilePage from './pages/User/ProfilePage/UserProfilePage';
import MyPurchasesPage from './pages/User/PurchasesPage/MyPurchasesPage';
import MyAchievementsPage from './pages/User/AchievementsPage/MyAchievementsPage';
import FisrtHackRegistrationPage from './pages/HackathonRegistrationPage/HackathonRegistrationPage';
import GoogleSuccess from './pages/User/GoogleSuccess/GoogleSuccess';
import IssueBadgesPage from './admin/IssueBadgesPage';
import IssueCertificatesPage from './admin/IssueCertificatesPage';
import VerifyPage from './pages/VerifyPage/VerifyPage';
import ModalWrapper from './components/ModalWrapper/ModalWrapper';
import UserLoginPage from './pages/User/LoginPage/UserLoginPage';
import UserSignupPage from './pages/User/SignupPage/UserSignupPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import HackathonPage from './pages/HackathonPage/HackathonPage';
import HackathonRegistrationPage from './pages/HackathonRegistrationPage/HackathonRegistrationPage';
import BookSessionPage from './pages/BookSessionPage/BookSessionPage';
import InternshipRegistrationPage from './pages/Internship/InternshipRegistrationPage';
import InternshipPage from './pages/Internship/InternshipPage';
import InternshipLanding from './pages/Internship/InternshipLanding';
import OtherInternshipRegistrationPage from './pages/Internship/OtherInternshipRegistrationPage';
import AdminSignupPage from './admin/AdminSignupPage';
import ManageInternshipsPage from './admin/ManageInternshipsPage';

function App() {

  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <AdminAuthProvider>
      <UserAuthProvider>
        <ScrollToTop />
        <Routes>
          {/* Public layout */}
          <Route
            path="/*"
            element={
              <>
                <ContactBar 
                  onLoginClick={() => setLoginOpen(true)} 
                  onSignupClick={() => setSignupOpen(true)}
                />
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
                  <Route path="/hackathon" element={<HackathonPage />} /> 
                  <Route path="/hackathon-registration" element={<HackathonRegistrationPage />} />  
                  <Route path="/internship" element={<InternshipLanding />} />                 
                  <Route path="/internship/software-development" element={<InternshipPage />} /> 
                  <Route path="/internship-registration" element={<InternshipRegistrationPage />} />   
                  <Route path="/internship-registration-others" element={<OtherInternshipRegistrationPage />} />
                  <Route path="/book-session" element={<BookSessionPage />} />                
                </Routes>
                <FooterSection />
              </>
            }
          />

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
          <Route path="/admin-signup" element={<AdminSignupPage />} />
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
            path="/admin-dashboard/internships"
            element={
              <RequireAdminAuth>
                <ManageInternshipsPage />
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
                {/* <ContactBarFirstHack /> */}
                {/* <NavbarFirstHack /> */}
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

        {/* Login Modal */}
        {loginOpen && (
          <ModalWrapper>
            <UserLoginPage onClose={() => setLoginOpen(false)} />
          </ModalWrapper>
        )}

        {/* Signup Modal */}
        {signupOpen && (
          <ModalWrapper>
            <UserSignupPage onClose={() => setSignupOpen(false)} />
          </ModalWrapper>
        )}

      </UserAuthProvider>
    </AdminAuthProvider>
  );
}

export default App;