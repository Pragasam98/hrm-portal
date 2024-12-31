import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar"; // Sidebar component
import Navbar from "./Navbar"; // Navbar component
import { FaSearch, FaEllipsisV, FaCheck, FaTimes, FaEye } from "react-icons/fa"; // Importing icons

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
  padding-top: -1rem;

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.2rem;

  h1 {
    font-size: 1.5rem;
    margin: 0 0 1rem 0; /* Add spacing below the heading */
    @media (max-width: 768px) {
      padding-top: 20px;
    }
  }

  @media (min-width: 768px) {
    h1 {
      margin-bottom: 1.5rem; /* Larger spacing for larger screens */
    }
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

const SearchBarContainer = styled.div`
  position: absolute;
  top: 0.9rem;
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
  display: flex;
  flex-direction: column; /* Arrange items vertically */
  gap: 0.5rem; /* Add spacing between items */
`;
const ActionsDropdown = styled.div`
  position: relative;

  .menu {
    position: absolute;
    top: 100%;
    right: 0;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;

    button {
      display: flex; /* Using flexbox to align icon and text */
      align-items: center; /* Centers items vertically */
      gap: 8px; /* Spacing between the icon and text */
      padding: 0.5rem 1rem;
      background: none;
      border: none;
      text-align: left;
      cursor: pointer;
      width: 100%;

      &:hover {
        background-color: #f0f0f0;
      }

      svg {
        font-size: 1.2rem; /* Set icon size */
        color: #333; /* Icon color */
      }
    }
  }
`;

const Attendances = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    name: "",
    leaveType: "",
    reason: "",
    status: "",
  });
  const [openAccordion, setOpenAccordion] = useState(null); // Track only one open accordion at a time

  const toggleAccordion = (id) => {
    // If the clicked accordion is already open, close it, else open it
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const [dropdownVisible, setDropdownVisible] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const attendances = [
    {
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
      name: "Tesla",
      email: "Rshahull@Dotcod.in",
      joinDate: "1/2/23",
      designation: "Product Manager",
      status: "Probation",
      createdDate: "12/1/22",
      releavedDate: null,
      salaryHikeByDate: "4/1/23",
    },
    {
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
      name: "AARP",
      email: "aarp@Dotcod.in",
      joinDate: "6/3/22",
      designation: "UX/UI Designer",
      status: "Probation",
      createdDate: "5/1/22",
      releavedDate: "12/1/23",
      salaryHikeByDate: "10/1/22",
    },
    {
      name: "Disney",
      email: "disney@Dotcod.in",
      joinDate: "12/2/22",
      designation: "Marketing Lead",
      status: "Confirmed",
      createdDate: "11/1/22",
      releavedDate: null,
      salaryHikeByDate: "4/1/23",
    },
    {
      name: "Chevy",
      email: "chevy@Dotcod.in",
      joinDate: "4/19/23",
      designation: "HR Manager",
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

  const filteredattendances = attendances
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

  return (
    <EmployeeContainer>
      <Sidebar />
      <MainContent>
        <Navbar />
        <ContentWrapper>
          <HeaderSection>
            <h1>Attendances</h1>
          </HeaderSection>
          <EmployeeListContainer>
            <EmployeeListHeading>
              <Heading>Attendances</Heading>
              <EmployeeCount>{filteredattendances.length}</EmployeeCount>
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
                  <TableHeaderCell>
                    <CustomDropdown
                      options={[
                        { label: "Name", value: "" },
                        { label: "Ascending", value: "ascending" },
                        { label: "Descending", value: "descending" },
                      ]}
                      value={filters.name} // The value for the 'name' filter
                      onChange={(value) => handleFilterChange("name", value)} // Update the 'name' filter
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
                        {
                          label: "Software Engineer",
                          value: "Software Engineer",
                        },
                        { label: "Product Manager", value: "Product Manager" },
                        { label: "UX/UI Designer", value: "UX/UI Designer" },
                        { label: "HR Manager", value: "HR Manager" },
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
                {filteredattendances.map((employee, index) => (
                  <TableRow key={employee.id}>
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
                      <ActionsDropdown>
                        <FaEllipsisV
                          onClick={() => toggleDropdown(index)}
                        ></FaEllipsisV>
                        {dropdownVisible === index && (
                          <div className="menu">
                            <button>
                              <FaCheck style={{ color: "#28a745" }} /> Approve
                              Leave
                            </button>
                            <button>
                              <FaTimes style={{ color: "#dc3545" }} /> Reject
                              Leave
                            </button>
                            <button>
                              <FaEye style={{ color: "#007bff" }} /> View
                              Details
                            </button>
                          </div>
                        )}
                      </ActionsDropdown>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>

            {/* Accordion for mobile */}
            <AccordionContainer>
              {filteredattendances.map((employee) => (
                <AccordionItem key={employee.id}>
                  <AccordionHeader
                    onClick={() => toggleAccordion(employee.name)}
                  >
                    <div>
                      <strong>{employee.name}</strong>
                      <p>{employee.email}</p>
                    </div>
                    <div>{openAccordion === employee.name ? "-" : "+"}</div>
                  </AccordionHeader>
                  {openAccordion === employee.name && (
                    <AccordionContent>
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

export default Attendances;
