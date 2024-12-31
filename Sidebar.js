import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Import icons
import DashboardIcon from "../assets/icons/dashboard.svg";
import EmployeeIcon from "../assets/icons/employee.svg";
import AttendanceIcon from "../assets/icons/attendance.svg";
import PayrollIcon from "../assets/icons/payroll.svg";
import TaskIcon from "../assets/icons/task.svg";
import AnnouncementIcon from "../assets/icons/announcement.svg";
import SupportIcon from "../assets/icons/support.svg";
import SettingsIcon from "../assets/icons/settings.svg";

const SidebarContainer = styled.div`
  width: 200px;
  background: #f8f8f8;
  height: 100vh;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-right: 1px solid #e0e0e0;
  position: fixed; /* Ensures the sidebar stays fixed on all screen sizes */
  top: 0;
  left: 0;
  z-index: 1000;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    position: fixed;
    width: 240px;
  }
`;

const Logo = styled.h1`
  color: #333;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: #555; /* Default text and icon color */
  font-size: 1rem;
  cursor: pointer;
  padding-left: 30px;
  text-decoration: none;

  &.active {
    color: #e74c3c; /* Active text color */
    font-weight: bold;

    img {
      filter: brightness(0) saturate(100%) invert(36%) sepia(64%)
        saturate(5230%) hue-rotate(-3deg) brightness(98%) contrast(101%);
    }
  }

  &:hover {
    color: #333; /* Hover text color */

    img {
      filter: brightness(0) saturate(100%) invert(29%) sepia(15%)
        saturate(5212%) hue-rotate(170deg) brightness(95%) contrast(87%);
    }
  }

  img {
    width: 20px;
    height: 20px;
    transition: filter 0.3s ease, color 0.3s ease; /* Smooth transition */
  }
`;

const SidebarSectionTitle = styled.div`
  font-size: 0.8rem;
  color: #999;
  text-transform: uppercase;
  margin: 2rem 0 1rem 0;
  padding-left: 30px;
`;

const CloseButton = styled.div`
  font-size: 2rem;
  color: #333;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Sidebar = ({ isOpen, setIsOpen }) => {
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
      <Logo>WeHR</Logo>
      <SidebarLink
        to="/dashboard"
        activeClassName="active"
        onClick={handleLinkClick}
      >
        <img src={DashboardIcon} alt="Dashboard" />
        Dashboard
      </SidebarLink>
      <SidebarLink
        to="/employee"
        isActive={(match, location) =>
          location.pathname.startsWith("/employee")
        }
        activeClassName="active"
        onClick={handleLinkClick}
      >
        <img src={EmployeeIcon} alt="Employee" />
        Employee
      </SidebarLink>
      <SidebarLink
        to="/attendance"
        activeClassName="active"
        onClick={handleLinkClick}
      >
        <img src={AttendanceIcon} alt="Attendance" />
        Attendance
      </SidebarLink>
      <SidebarLink
        to="/payroll"
        activeClassName="active"
        onClick={handleLinkClick}
      >
        <img src={PayrollIcon} alt="Payroll" />
        Payroll
      </SidebarLink>
      <SidebarLink
        to="/task"
        activeClassName="active"
        onClick={handleLinkClick}
      >
        <img src={TaskIcon} alt="Task" />
        Task
      </SidebarLink>
      <SidebarLink
        to="/announcement"
        activeClassName="active"
        onClick={handleLinkClick}
      >
        <img src={AnnouncementIcon} alt="Announcement" />
        Announcement
      </SidebarLink>
      <SidebarSectionTitle>Other</SidebarSectionTitle>
      <SidebarLink
        to="/support"
        activeClassName="active"
        onClick={handleLinkClick}
      >
        <img src={SupportIcon} alt="Support" />
        Support
      </SidebarLink>
      <SidebarLink
        to="/settings"
        activeClassName="active"
        onClick={handleLinkClick}
      >
        <img src={SettingsIcon} alt="Settings" />
        Settings
      </SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;
