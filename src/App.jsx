import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactBar from "./components/ContactBar/ContactBar";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import DonationPage from "./pages/DonationPage/DonationPage";
import CoursesAndCertifications from "./pages/CoursesAndCertifications/CoursesAndCertifications";
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage";
import ProgramsPage from "./pages/ProgramsPage/ProgramsPage";
import FooterSection from "./components/FooterSection/FooterSection";
import PartnersPage from "./pages/PartnersPage/PartnersPage";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import AdminLoginPage from "./admin/AdminLoginPage";
import RequireAdminAuth from "./admin/adminRoutes";
import AdminDashboardPage from "./admin/AdminDashboardPage";

function App() {
  return (
    <>
      <ContactBar />
      <Navbar />
      <AdminAuthProvider>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route
            path="/admin-dashboard"
            element={
              <RequireAdminAuth>
                <AdminDashboardPage />
              </RequireAdminAuth>
            }
          />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/courses" element={<CoursesAndCertifications />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
        </Routes>
      </AdminAuthProvider>      
      <FooterSection />
    </>
  );
}

export default App;
