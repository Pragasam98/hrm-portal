import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar"; // Sidebar component
import Navbar from "./Navbar"; // Navbar component
import {
  FaSearch,
  FaEllipsisV,
  FaCheck,
  FaTimes,
  FaEye,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa"; // Importing icons

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
  }

  @media (min-width: 768px) {
    h1 {
      margin-bottom: 1.5rem; /* Larger spacing for larger screens */
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 1rem;
  padding-top: -1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem; /* Adds space between the cards on small screens */
  }
`;
const HeaderCard = styled.div`
  padding: 1rem; /* Reduced padding */
  background-color: ${({ bgColor }) => bgColor || "#fff"};
  border-radius: 8px;
  width: 180px; /* Keep the width consistent */
  position: relative;

  h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 2rem; /* Adjust font size if needed */
    margin: 0;
  }

  .bottom-right-text {
    font-size: 0.9rem;
    color: #666;
    position: absolute;
    bottom: 10px; /* Keep spacing consistent */
    right: 10px;
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
const StatusWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${(props) =>
    props.status === "Approved"
      ? "#28a745"
      : "#ff9800"}; /* Font color based on status */
  background-color: #e0e0e0; /* Gray background */
`;

const StatusIcon = styled.div`
  font-size: 0.9rem;
  color: ${(props) =>
    props.status === "Approved"
      ? "#28a745"
      : "#ff9800"}; /* Icon color based on status */
  margin-left: ${(props) =>
    props.status === "Pending"
      ? "0.6rem"
      : "0"}; /* Increased gap for Pending status */
`;
const NameEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
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
      display: block;
      padding: 0.5rem 1rem;
      background: none;
      border: none;
      text-align: left;
      width: 100%;
      cursor: pointer;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
`;

const EmployeeList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    name: "",
    leaveType: "",
    reason: "",
    status: "",
  });
  const [openAccordion, setOpenAccordion] = useState(null);

  const [dropdownVisible, setDropdownVisible] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const leaveRequests = [
    {
      name: "MAGHESH",
      email: "magesh@Dotcod.in",
      requestDate: "6/3/22",
      leaveType: "Casual Leave",
      reason: "Not Well",
      noDays: 1,
      status: "Pending",
    },
    {
      name: "Tesla",
      email: "Rsahull@Dotcod.in",
      requestDate: "12/2/22 - 16/02/22",
      leaveType: "Sick Leave",
      reason: "Not Well",
      noDays: 4,
      status: "Approved",
    },
    {
      name: "GM",
      email: "gm@Dotcod.in",
      requestDate: "4/19/23",
      leaveType: "Casual Leave",
      reason: "Sick Leave",
      noDays: 1,
      status: "Approved",
    },
    {
      name: "AARP",
      email: "aarp@Dotcod.in",
      requestDate: "1/2/23",
      leaveType: "Sick Leave",
      reason: "Marriage Function",
      noDays: 1,
      status: "Approved",
    },
    {
      name: "Disney",
      email: "Disney@Dotcod.in",
      requestDate: "9/4/23",
      leaveType: "Sick Leave",
      reason: "Marriage Function",
      noDays: 1,
      status: "Approved",
    },
    {
      name: "Prime Therapeutics",
      email: "PrimeTherapeutics@Dotcod.in",
      requestDate: "12/2/22 - 16/02/22",
      leaveType: "Sick Leave",
      reason: "Marriage Function",
      noDays: 3,
      status: "Approved",
    },
  ];

  const handleFilterChange = (column, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: value,
    }));
  };

  const filteredRequests = leaveRequests.filter((employee) => {
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

    // Leave type filter
    if (
      filters.leaveType &&
      employee.leaveType.toLowerCase() !== filters.leaveType.toLowerCase()
    ) {
      return false;
    }

    // Reason filter
    if (
      filters.reason &&
      employee.reason.toLowerCase() !== filters.reason.toLowerCase()
    ) {
      return false;
    }

    // No days filter
    if (filters.noDays === "lessThan2" && employee.noDays >= 2) {
      return false;
    }

    if (filters.noDays === "moreThan2" && employee.noDays <= 2) {
      return false;
    }

    return true;
  });

  return (
    <EmployeeContainer>
      <Sidebar />
      <MainContent>
        <Navbar />
        <ContentWrapper>
          <HeaderSection>
            <h1>Employee</h1>
            <Header>
              <HeaderCard bgColor="#ffefe7">
                <h3>Casual Leave</h3>
                <p>04</p>
                <p className="bottom-right-text">+2% Jan month</p>
              </HeaderCard>
              <HeaderCard bgColor="#fdebf9">
                <h3>Emergency Leave</h3>
                <p>06</p>
                <p className="bottom-right-text">+2% Jan month</p>
              </HeaderCard>
              <HeaderCard bgColor="#e8f0fb">
                <h3>Total Leave Jan</h3>
                <p>10</p>
                <p className="bottom-right-text">+2% Jan month</p>
              </HeaderCard>
              <HeaderCard bgColor="#f8f3e9">
                <h3>Today Leave</h3>
                <p>02</p>
                <p className="bottom-right-text">23/01 Monday</p>
              </HeaderCard>
            </Header>
          </HeaderSection>
          <EmployeeListContainer>
            <EmployeeListHeading>
              <Heading>Employee</Heading>
              <EmployeeCount>{filteredRequests.length}</EmployeeCount>
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
                        { label: "Requested Date", value: "" },
                        { label: "Oldest First", value: "oldest" },
                        { label: "Newest First", value: "newest" },
                      ]}
                      value={filters.requestedDate} // The value for the 'requestedDate' filter
                      onChange={(value) =>
                        handleFilterChange("requestedDate", value)
                      } // Update the 'requestedDate' filter
                    />
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <CustomDropdown
                      options={[
                        { label: "Leave Type", value: "" },
                        { label: "Casual Leave", value: "Casual Leave" },
                        { label: "Sick Leave", value: "Sick Leave" },
                      ]}
                      value={filters.leaveType} // The value for the 'leaveType' filter
                      onChange={(value) =>
                        handleFilterChange("leaveType", value)
                      } // Update the 'leaveType' filter
                    />
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <CustomDropdown
                      options={[
                        { label: "Reason", value: "" },
                        { label: "Personal", value: "personal" },
                        { label: "Medical", value: "medical" },
                        { label: "Vacation", value: "vacation" },
                        { label: "Other", value: "other" },
                      ]}
                      value={filters.reason} // The value for the 'reason' filter
                      onChange={(value) => handleFilterChange("reason", value)} // Update the 'reason' filter
                    />
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <CustomDropdown
                      options={[
                        { label: "No. of Days", value: "" },
                        { label: "Less than 2", value: "lessThan2" },
                        { label: "More than 2", value: "moreThan2" },
                      ]}
                      value={filters.noDays} // The value for the 'noDays' filter
                      onChange={(value) => handleFilterChange("noDays", value)} // Update the 'noDays' filter
                    />
                  </TableHeaderCell>
                  <TableHeaderCell>
                    <CustomDropdown
                      options={[
                        { label: "Status", value: "" },
                        { label: "Confirmed", value: "confirmed" },
                        { label: "Probation", value: "probation" },
                      ]}
                      value={filters.status} // The value for the 'status' filter
                      onChange={(value) => handleFilterChange("status", value)} // Update the 'status' filter
                    />
                  </TableHeaderCell>
                  <TableHeaderCell>Actions</TableHeaderCell>
                </TableRow>
              </TableHeader>

              <tbody>
                {filteredRequests.map((employee, index) => (
                  <TableRow key={employee.id}>
                    <TableCell>
                      <NameEmailContainer>
                        <span>{employee.name}</span>
                        <span>{employee.email}</span>
                      </NameEmailContainer>
                    </TableCell>
                    <TableCell>{employee.requestDate}</TableCell>
                    <TableCell>{employee.leaveType}</TableCell>
                    <TableCell>{employee.reason}</TableCell>
                    <TableCell>{employee.noDays}</TableCell>
                    <TableCell>
                      <StatusWrapper status={employee.status}>
                        {employee.status}
                        <StatusIcon status={employee.status}>
                          {employee.status === "Approved" && <FaCheckCircle />}
                          {employee.status === "Pending" && <FaClock />}
                        </StatusIcon>
                      </StatusWrapper>
                    </TableCell>
                    <TableCell>
                      <ActionsDropdown>
                        <FaEllipsisV
                          onClick={() => toggleDropdown(index)}
                        ></FaEllipsisV>
                        {dropdownVisible === index && (
                          <div className="menu">
                            <button>
                              {" "}
                              <FaCheck />
                              Approve Leave
                            </button>
                            <button>
                              {" "}
                              <FaTimes /> Reject Leave
                            </button>
                            <button>
                              {" "}
                              <FaEye /> View Details
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
              {filteredRequests.map((employee) => (
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
