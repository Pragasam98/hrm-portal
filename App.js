import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import EmployeeList from "./components/Employeelist";
import AddEmployee from "./components/AddEmployee";
import Employee from "./components/Employee";
import Attendance from "./components/Attendance";
import LeaveRequest from "./components/LeaveRequest";
import Attendances from "./components/Attendances";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route path="/" element={<LoginPage />} />

        {/* Dashboard route */}
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/employee" element={<Employee />} />
        <Route path="/employee/employee-list" element={<EmployeeList />} />
        <Route path="/employee/employee-list/add" element={<AddEmployee />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/attendance/leave-request" element={<LeaveRequest />} />
        <Route path="/attendance/attendances" element={<Attendances />} />
      </Routes>
    </Router>
  );
}

export default App;
