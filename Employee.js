import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar"; // Sidebar component
import Navbar from "./Navbar"; // Navbar component
import AddEmployeeIcon from "../assets/icons/add_employee.svg"; // Add employee icon
import OrgConfigIcon from "../assets/icons/org_config.svg"; // Org config icon

// Main container for the Employee section
const EmployeeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 238px;
  background: #fff;
  z-index: 0;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ContentWrapper = styled.div`
  padding: 2rem;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  width: 20%;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 70%;
    margin: 0 auto;
  }
`;

const CardIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Employee = () => {
  const navigate = useNavigate();

  // Navigate to Employee List page when the "Employee" card is clicked
  const handleAddEmployee = () => {
    navigate("/employee/employee-list");
  };

  // Org config action for now, replace with actual functionality
  const handleOrgConfig = () => {
    alert("Org Config section clicked!");
  };

  return (
    <EmployeeContainer>
      <Sidebar /> {/* Sidebar component */}
      <MainContent>
        <Navbar /> {/* Navbar component */}
        <ContentWrapper>
          <h1>Employee</h1>
          <CardContainer>
            {/* Card to navigate to Employee List */}
            <Card onClick={handleAddEmployee}>
              <CardIcon src={AddEmployeeIcon} alt="Add Employee" />
              <CardTitle>Employee</CardTitle>
            </Card>
            {/* Card for Organization Config */}
            <Card onClick={handleOrgConfig}>
              <CardIcon src={OrgConfigIcon} alt="Organization Config" />
              <CardTitle>Organization Config</CardTitle>
            </Card>
          </CardContainer>
          {/* Outlet renders nested routes like EmployeeList */}
          <Outlet />
        </ContentWrapper>
      </MainContent>
    </EmployeeContainer>
  );
};

export default Employee;
