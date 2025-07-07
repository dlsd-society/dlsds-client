// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import DonationPage from "./pages/DonationPage/DonationPage";
import CoursesAndCertifications from "./pages/CoursesAndCertifications/CoursesAndCertifications";
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage";
import ProgramsPage from "./pages/ProgramsPage/ProgramsPage";
import PartnersPage from "./pages/PartnersPage/PartnersPage";

import { AdminAuthProvider } from "./context/AdminAuthContext";
import AdminLoginPage from "./admin/AdminLoginPage";
import RequireAdminAuth from "./admin/adminRoutes";
import AdminDashboardPage from "./admin/AdminDashboardPage";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./admin/AdminLayout";

function App() {
  return (
    <AdminAuthProvider>
      <Routes>
        {/* Admin Routes without ContactBar, Navbar, Footer */}
        <Route
          path="/admin-login"
          element={
            <AdminLayout>
              <AdminLoginPage />
            </AdminLayout>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <RequireAdminAuth>
              <AdminLayout>
                <AdminDashboardPage />
              </AdminLayout>
            </RequireAdminAuth>
          }
        />

        {/* Public Site Routes with full layout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <AboutPage />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <ContactPage />
            </MainLayout>
          }
        />
        <Route
          path="/donation"
          element={
            <MainLayout>
              <DonationPage />
            </MainLayout>
          }
        />
        <Route
          path="/courses"
          element={
            <MainLayout>
              <CoursesAndCertifications />
            </MainLayout>
          }
        />
        <Route
          path="/resources"
          element={
            <MainLayout>
              <ResourcesPage />
            </MainLayout>
          }
        />
        <Route
          path="/programs"
          element={
            <MainLayout>
              <ProgramsPage />
            </MainLayout>
          }
        />
        <Route
          path="/partners"
          element={
            <MainLayout>
              <PartnersPage />
            </MainLayout>
          }
        />
      </Routes>
    </AdminAuthProvider>
  );
}

export default App;
