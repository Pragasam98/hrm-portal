import React from "react";
import styled from "styled-components";

// Import SVG icons
import DashboardIcon from "../assets/icons/dashboard.svg";
import EmployeeIcon from "../assets/icons/employee.svg";
import AttendanceIcon from "../assets/icons/attendance.svg";
import PayrollIcon from "../assets/icons/payroll.svg";
import TaskIcon from "../assets/icons/task.svg";
import AnnouncementIcon from "../assets/icons/announcement.svg";
import SupportIcon from "../assets/icons/support.svg";
import SettingsIcon from "../assets/icons/settings.svg";

// Styled Components
const SidebarContainer = styled.div`
  width: 242px; /* Adjusted width to 242px */
  background: #f8f8f8;
  height: 100vh; /* Fixed height for full viewport */
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-right: 1px solid #e0e0e0;
  position: fixed; /* Sidebar will now be fixed */
  top: 0; /* Stick to the top */
  left: 0; /* Stick to the left */
  z-index: 1000; /* Ensure sidebar is above other content */
`;

const Logo = styled.h1`
  color: #333;
  font-size: 2rem; /* Bigger font size for logo */
  text-align: center;
  margin-bottom: 3rem; /* Spacing below logo */
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: #555;
  font-size: 1.2rem; /* Increased font size */
  cursor: pointer;
  padding-left: 30px;

  &.active {
    color: #e74c3c;
    font-weight: bold;
  }

  &:hover {
    color: #333;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const SidebarSectionTitle = styled.div`
  font-size: 0.8rem;
  color: #999;
  text-transform: uppercase;
  margin: 2rem 0 1rem 0;
  padding-left: 30px;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      {/* Logo */}
      <Logo>WeHR</Logo>

      {/* Main Sidebar Items */}
      <SidebarItem className="active">
        <img src={DashboardIcon} alt="Dashboard" />
        Dashboard
      </SidebarItem>
      <SidebarItem>
        <img src={EmployeeIcon} alt="Employee" />
        Employee
      </SidebarItem>
      <SidebarItem>
        <img src={AttendanceIcon} alt="Attendance" />
        Attendance
      </SidebarItem>
      <SidebarItem>
        <img src={PayrollIcon} alt="Payroll" />
        PayRoll
      </SidebarItem>
      <SidebarItem>
        <img src={TaskIcon} alt="Task" />
        Task
      </SidebarItem>
      <SidebarItem>
        <img src={AnnouncementIcon} alt="Announcement" />
        Announcement
      </SidebarItem>

      {/* Other Section */}
      <SidebarSectionTitle>Other</SidebarSectionTitle>
      <SidebarItem>
        <img src={SupportIcon} alt="Support" />
        Support
      </SidebarItem>
      <SidebarItem>
        <img src={SettingsIcon} alt="Settings" />
        Settings
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
