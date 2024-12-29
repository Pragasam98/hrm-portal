import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaAngleDown, FaBell, FaEnvelope, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Sidebar from "./Sidebar"; // Import Sidebar component
import UserImage from "./images/user.png";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  border-bottom: 2px solid #ddd;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Hamburger = styled.div`
  font-size: 2rem;
  color: #333;
  cursor: pointer;
  background: none;
  border: none;
  display: block;

  @media (min-width: 769px) {
    display: none;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #f1f1f1;
  border-radius: 8px;
  padding: 0.6rem 1rem;
  width: 220px;

  input {
    border: none;
    background: transparent;
    outline: none;
    flex: 1;
    font-size: 1rem;
  }

  svg {
    font-size: 1.2rem;
    color: #777;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.isSearchVisible ? "flex" : "none")};
    width: 100%;
  }
`;

const SearchIconWrapper = styled.div`
  font-size: 1.5rem;
  color: #777;
  cursor: pointer;
  padding-left: 0.8rem;

  @media (max-width: 768px) {
    display: block;
    padding-left: 0;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative; /* Required for absolute positioning of the dropdown */

  svg {
    font-size: 1.5rem;
    color: #777;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #333;
    }
  }

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  span {
    font-size: 1rem;
    color: #333;
    font-weight: 600;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 150px;
  padding: 0.5rem 1rem;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 10;

  button {
    width: 100%;
    background: none;
    border: none;
    text-align: left;
    padding: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    color: #333;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

const StatusIndicator = styled.div`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 8px; /* Reduced the width */
  height: 8px; /* Reduced the height */
  border-radius: 50%;
  background-color: ${({ isOnline }) =>
    isOnline ? "green" : "red"}; /* Dynamic color based on status */
  border: 2px solid #fff;
`;

const Navbar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Manage sidebar open state
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Manage dropdown visibility
  const [isOnline, setIsOnline] = useState(navigator.onLine); // Online/Offline status
  const navigate = useNavigate(); // Initialize navigate function

  const toggleSearchBar = () => {
    setSearchVisible(!isSearchVisible); // Toggle search bar visibility
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); // Toggle sidebar open state
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const handleLogout = () => {
    // Clear any authentication token or data (e.g., localStorage)
    localStorage.removeItem("authToken"); // Remove the token or other credentials
    // Redirect to the login page
    navigate("/"); // Redirect to login page
  };

  // Handle online/offline status changes
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div>
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />

      <NavbarContainer>
        <LeftSection>
          {/* Hamburger Icon */}
          <Hamburger onClick={toggleSidebar}>☰</Hamburger>

          {/* Search Icon */}
          <SearchIconWrapper onClick={toggleSearchBar}>
            <FaSearch />
          </SearchIconWrapper>

          {/* Search Bar */}
          <SearchWrapper isSearchVisible={isSearchVisible}>
            <input type="text" placeholder="Search Employee" />
            <FaSearch />
          </SearchWrapper>
        </LeftSection>

        {/* Profile Section */}
        <ProfileSection>
          {/* Bell Icon with Status Indicator */}
          <div style={{ position: "relative" }}>
            <FaBell />
            <StatusIndicator isOnline={isOnline} />{" "}
            {/* Status Indicator in Bell Icon */}
          </div>
          <FaEnvelope />
          <img src={UserImage} alt="User" />
          <span>Admirra John</span>
          <FaAngleDown onClick={toggleDropdown} />
          <DropdownMenu isOpen={isDropdownOpen}>
            <button onClick={handleLogout}>Logout</button>
          </DropdownMenu>
        </ProfileSection>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
