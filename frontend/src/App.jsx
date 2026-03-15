import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoutes";

import Home from "./pages/Home";
import Login from "./pages/Login";

import AdminDashboard from "./pages/AdminDashboard";
import InternDashboard from "./pages/InternDashboard";

import UpdateIntern from "./pages/UpdateIntern";

import Tasks from "./pages/Tasks";
import SubmitTask from "./pages/SubmitTask";
import CreateTask from "./pages/CreateTask";

import InternList from "./pages/InternList";
import CreateIntern from "./pages/CreateIntern";

import Announcements from "./pages/Announcements";


function App() {

  return (
    <>
      <Navbar />

      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Pages */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/update-intern/:id"
          element={
            <AdminRoute>
              <UpdateIntern />
            </AdminRoute>
          }
        />

        <Route
          path="/interns"
          element={
            <AdminRoute>
              <InternList />
            </AdminRoute>
          }
        />

        <Route
          path="/create-intern"
          element={
            <AdminRoute>
              <CreateIntern />
            </AdminRoute>
          }
        />

        {/* Create Task (Admin Only) */}
        <Route
          path="/create-task"
          element={
            <AdminRoute>
              <CreateTask />
            </AdminRoute>
          }
        />

        {/* Intern Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <InternDashboard />
            </ProtectedRoute>
          }
        />

        {/* Shared Pages (Admin + Intern) */}
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />

        <Route
          path="/submit-task/:id"
          element={
            <ProtectedRoute>
              <SubmitTask />
            </ProtectedRoute>
          }
        />

        <Route
          path="/announcements"
          element={
            <ProtectedRoute>
              <Announcements />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;