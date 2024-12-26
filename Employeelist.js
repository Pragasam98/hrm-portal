import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar"; // Sidebar component
import Navbar from "./Navbar"; // Navbar component
import { FaSearch, FaEllipsisV } from "react-icons/fa"; // Importing icons
import PlusIcon from "../assets/icons/Plus.svg";
import WPlusIcon from "../assets/icons/WPlus.svg";
import { useNavigate } from "react-router-dom";

const EmployeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 0;
  background: #fff;
  z-index: 0;

  @media (min-width: 768px) {
    margin-left: 238px;
  }
`;

const ContentWrapper = styled.div`
  padding: 0.5rem;

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h1 {
    font-size: 1.5rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack the heading and buttons vertically on mobile */
    align-items: flex-start; /* Align items to the left */
    text-align: left; /* Ensure text aligns properly */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack buttons vertically on mobile */
    align-items: flex-start; /* Align buttons to the left */
    width: 100%; /* Ensure buttons take up full width */
    padding-top: 10px;
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.8rem;
  background-color: ${({ color }) =>
    color === "white" ? "#ffffff" : "#171717"};
  color: ${({ color }) => (color === "white" ? "#000" : "#fff")};
  border: ${({ color }) => (color === "white" ? "1px solid #000" : "none")};
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: ${({ color }) =>
      color === "white" ? "#f0f0f0" : "#000"};
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Reduce font size on small screens */
    padding: 0.2rem 0.6rem; /* Adjust padding for better spacing */
    margin-bottom: 0.5rem; /* Add space between stacked buttons */
    width: 100%; /* Make buttons take full width on mobile */
  }
`;

const EmployeeListContainer = styled.div`
  margin-top: 1rem;
  padding: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: relative;
  max-height: 400px;
  overflow-y: auto;
`;

const EmployeeListHeading = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Heading = styled.p`
  font-weight: bold;
`;

const EmployeeCount = styled.p``;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;

  @media (max-width: 768px) {
    display: none; /* Hide table on mobile */
  }
`;

const TableHeader = styled.thead`
  background-color: #f9f9f9;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const TableHeaderCell = styled.th`
  padding: 0.5rem;
  text-align: left;
  font-size: 0.9rem;
  font-weight: 600;
  color: #666;
  background-color: #f9f9f9;
  border: none;
`;

const TableCell = styled.td`
  padding: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: left;
  font-size: 0.9rem;
  color: #333;
  border: none;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: #f5f5f5;
  }
`;

const NameEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThreeDotButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  margin-left: auto;
`;

const SearchBarContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding: 0.3rem;
  border-radius: 5px;
  width: 200px;
  border: 1px solid rgb(212, 212, 212);
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 0.3rem;
  font-size: 0.8rem;
`;

const SearchIconWrapper = styled.div`
  width: 18px;
  height: 18px;
  padding-top: 2px;
  color: #777;
`;

const CustomDropdown = ({ options, value, onChange }) => {
  return (
    <div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "0.3rem",
          border: "1px solid #ddd",
          borderRadius: "5px",
          fontSize: "0.9rem",
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const AccordionContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const AccordionItem = styled.div`
  margin: 1rem 0;
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: #fff;
  border-radius: 5px;
`;

const EmployeeList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    name: "",
    joinDate: "",
    designation: "",
    status: "",
  });

  const [openAccordion, setOpenAccordion] = useState(null);

  const employees = [
    {
      id: "11D001",
      name: "MAGHESH",
      email: "magesh@Dotcod.in",
      joinDate: "4/15/23",
      designation: "Software Engineer",
      status: "Confirmed",
      createdDate: "1/1/23",
      releavedDate: null,
      salaryHikeByDate: "5/1/23",
    },
    {
      id: "11D002",
      name: "Tesla",
      email: "Rshahull@Dotcod.in",
      joinDate: "1/2/23",
      designation: "Software Engineer",
      status: "Probation",
      createdDate: "12/1/22",
      releavedDate: null,
      salaryHikeByDate: "4/1/23",
    },
    {
      id: "11D003",
      name: "GM",
      email: "gm@Dotcod.in",
      joinDate: "9/4/23",
      designation: "Software Engineer",
      status: "Confirmed",
      createdDate: "8/1/23",
      releavedDate: null,
      salaryHikeByDate: "12/1/23",
    },
    {
      id: "11D004",
      name: "AARP",
      email: "aarp@Dotcod.in",
      joinDate: "6/3/22",
      designation: "Software Engineer",
      status: "Probation",
      createdDate: "5/1/22",
      releavedDate: "12/1/23",
      salaryHikeByDate: "10/1/22",
    },
    {
      id: "11D005",
      name: "Disney",
      email: "disney@Dotcod.in",
      joinDate: "12/2/22",
      designation: "Software Engineer",
      status: "Confirmed",
      createdDate: "11/1/22",
      releavedDate: null,
      salaryHikeByDate: "4/1/23",
    },
    {
      id: "11D006",
      name: "Chevy",
      email: "chevy@Dotcod.in",
      joinDate: "4/19/23",
      designation: "Software Engineer",
      status: "Probation",
      createdDate: "3/1/23",
      releavedDate: null,
      salaryHikeByDate: "8/1/23",
    },
  ];

  const handleFilterChange = (column, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: value,
    }));
  };

  const filteredEmployees = employees
    .filter((employee) => {
      // Search query filter
      if (
        searchQuery &&
        !employee.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Status filter
      if (
        filters.status &&
        employee.status.toLowerCase() !== filters.status.toLowerCase()
      ) {
        return false;
      }

      // Designation filter
      if (
        filters.designation &&
        employee.designation.toLowerCase() !== filters.designation.toLowerCase()
      ) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      // Sorting by name
      if (filters.name === "ascending") {
        return a.name.localeCompare(b.name);
      } else if (filters.name === "descending") {
        return b.name.localeCompare(a.name);
      }
      return 0; // No sorting if "ascending" or "descending" is not selected
    });

  const navigate = useNavigate();

  return (
    <EmployeeContainer>
      <Sidebar />
      <MainContent>
        <Navbar />
        <ContentWrapper>
          <HeaderSection>
            <h1>Employee</h1>
            <ButtonContainer>
              <ActionButton color="white">
                <img src={PlusIcon} alt="Plus" />
                Import Excel
              </ActionButton>
              <ActionButton
                color="black"
                onClick={() => navigate("/employee/employee-list/add")}
              >
                <img src={WPlusIcon} alt="WPlus" />
                Add Employee
              </ActionButton>
            </ButtonContainer>
          </HeaderSection>
          <EmployeeListContainer>
            <EmployeeListHeading>
              <Heading>Employee</Heading>
              <EmployeeCount>{filteredEmployees.length}</EmployeeCount>
            </EmployeeListHeading>
            <SearchBarContainer>
              <SearchIconWrapper>
                <FaSearch />
              </SearchIconWrapper>
              <SearchInput
                type="text"
                placeholder="Search Employee..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </SearchBarContainer>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Select</TableHeaderCell>
                  <TableHeaderCell>ID</TableHeaderCell>
                  <TableHeaderCell>
                    <CustomDropdown
                      options={[
                        { label: "Name", value: "" },
                        { label: "Ascending", value: "ascending" },
                        { label: "Descending", value: "descending" },
                      ]}
                      value={filters.name}
                      onChange={(value) => handleFilterChange("name", value)}
                    />
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <CustomDropdown
                      options={[
                        { label: "Sort by Date", value: "" },
                        { label: "Created Date", value: "createdDate" },
                        { label: "Join Date", value: "joinDate" },
                        { label: "Releaved Date", value: "releavedDate" },
                        {
                          label: "Salary Hike Date",
                          value: "salaryHikeByDate",
                        },
                      ]}
                      value={filters.joinDate}
                      onChange={(value) =>
                        handleFilterChange("joinDate", value)
                      }
                    />
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <CustomDropdown
                      options={[
                        { label: "Designation", value: "" },
                        { label: "Software Engineer", value: "engineer" },
                        { label: "Manager", value: "manager" },
                      ]}
                      value={filters.designation}
                      onChange={(value) =>
                        handleFilterChange("designation", value)
                      }
                    />
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <CustomDropdown
                      options={[
                        { label: "Status", value: "" },
                        { label: "Confirmed", value: "confirmed" },
                        { label: "Probation", value: "probation" },
                      ]}
                      value={filters.status}
                      onChange={(value) => handleFilterChange("status", value)}
                    />
                  </TableHeaderCell>
                  <TableHeaderCell>Actions</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>
                      <input type="checkbox" />
                    </TableCell>
                    <TableCell>{employee.id}</TableCell>
                    <TableCell>
                      <NameEmailContainer>
                        <span>{employee.name}</span>
                        <span>{employee.email}</span>
                      </NameEmailContainer>
                    </TableCell>
                    <TableCell>
                      {filters.joinDate === "createdDate"
                        ? new Date(employee.createdDate).toLocaleDateString()
                        : filters.joinDate === "joinDate"
                        ? new Date(employee.joinDate).toLocaleDateString()
                        : filters.joinDate === "releavedDate"
                        ? employee.releavedDate
                          ? new Date(employee.releavedDate).toLocaleDateString()
                          : "Not Released"
                        : filters.joinDate === "salaryHikeByDate"
                        ? new Date(
                            employee.salaryHikeByDate
                          ).toLocaleDateString()
                        : new Date(employee.joinDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>{employee.designation}</TableCell>
                    <TableCell>{employee.status}</TableCell>
                    <TableCell>
                      <ThreeDotButton>
                        <FaEllipsisV />
                      </ThreeDotButton>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>

            {/* Accordion for mobile */}
            <AccordionContainer>
              {filteredEmployees.map((employee) => (
                <AccordionItem key={employee.id}>
                  <AccordionHeader
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === employee.id ? null : employee.id
                      )
                    }
                  >
                    <div>
                      <strong>{employee.name}</strong>
                      <p>{employee.email}</p>
                    </div>
                    <div>{openAccordion === employee.id ? "-" : "+"}</div>
                  </AccordionHeader>
                  {openAccordion === employee.id && (
                    <AccordionContent>
                      <div>
                        <strong>ID:</strong> {employee.id}
                      </div>
                      <div>
                        <strong>Name:</strong> {employee.name}
                      </div>
                      <div>
                        <strong>Email:</strong> {employee.email}
                      </div>
                      <div>
                        <strong>Join Date:</strong> {employee.joinDate}
                      </div>
                      <div>
                        <strong>Designation:</strong> {employee.designation}
                      </div>
                      <div>
                        <strong>Status:</strong> {employee.status}
                      </div>
                      <div>
                        <strong>Created Date:</strong> {employee.createdDate}
                      </div>
                      <div>
                        <strong>Releaved Date:</strong>{" "}
                        {employee.releavedDate ? employee.releavedDate : "N/A"}
                      </div>
                      <div>
                        <strong>Salary Hike By Date:</strong>{" "}
                        {employee.salaryHikeByDate}
                      </div>
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </AccordionContainer>
          </EmployeeListContainer>
        </ContentWrapper>
      </MainContent>
    </EmployeeContainer>
  );
};

export default EmployeeList;
