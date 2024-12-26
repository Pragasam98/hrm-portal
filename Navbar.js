import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleDown, FaBell, FaEnvelope, FaSearch } from "react-icons/fa";
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

const Navbar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Manage sidebar open state

  const toggleSearchBar = () => {
    setSearchVisible(!isSearchVisible); // Toggle search bar visibility
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); // Toggle sidebar open state
  };

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
          <FaBell />
          <FaEnvelope />
          <img src={UserImage} alt="User" />
          <span>Admirra John</span>
          <FaAngleDown />
        </ProfileSection>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
