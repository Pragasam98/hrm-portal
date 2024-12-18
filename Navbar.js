import React from "react";
import styled from "styled-components";
import { FaAngleDown, FaBell, FaEnvelope, FaSearch } from "react-icons/fa";
import UserImage from "./images/user.png";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  border-bottom: 2px solid #ddd; /* Border instead of box-shadow */
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #f1f1f1;
  border-radius: 5px;
  padding: 0.5rem;
  width: 300px;

  input {
    border: none;
    background: transparent;
    outline: none;
    flex: 1; /* Takes up remaining space */
  }

  /* Move the search icon to the right end of the search bar */
  svg {
    margin-left: auto; /* Pushes the icon to the far right */
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    border-radius: 50%;
    width: 35px;
    height: 35px;
  }

  span {
    font-size: 0.9rem;
    color: #333;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <SearchWrapper>
        <input type="text" placeholder="Search Employee" />
        <FaSearch color="#999" />
      </SearchWrapper>
      <ProfileSection>
        <FaBell color="#999" />
        <FaEnvelope color="#999" />
        <img src={UserImage} alt="User" />
        <span>Admirra John</span>
        <FaAngleDown color="#999" />
      </ProfileSection>
    </NavbarContainer>
  );
};

export default Navbar;
