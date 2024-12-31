import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import EmployeeList from "./components/Employeelist";
import AddEmployee from "./components/AddEmployee";
import Employee from "./components/Employee";
import Attendance from "./components/Attendance";
import LeaveRequest from "./components/LeaveRequest";
import Attendances from "./components/Attendances";

// Mock authentication function
const isAuthenticated = () => {
  // Replace this with your actual authentication logic
  return localStorage.getItem("authToken") !== null;
};

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route path="/" element={<LoginPage />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee"
          element={
            <ProtectedRoute>
              <Employee />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee/employee-list"
          element={
            <ProtectedRoute>
              <EmployeeList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee/employee-list/add"
          element={
            <ProtectedRoute>
              <AddEmployee />
            </ProtectedRoute>
          }
        />
        <Route
          path="/attendance"
          element={
            <ProtectedRoute>
              <Attendance />
            </ProtectedRoute>
          }
        />
        <Route
          path="/attendance/leave-request"
          element={
            <ProtectedRoute>
              <LeaveRequest />
            </ProtectedRoute>
          }
        />
        <Route
          path="/attendance/attendances"
          element={
            <ProtectedRoute>
              <Attendances />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
