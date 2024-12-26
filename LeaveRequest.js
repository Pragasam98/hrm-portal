import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar"; // Sidebar component
import Navbar from "./Navbar"; // Navbar component

// Styled Components
const LeaveRequestContainer = styled.div`
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
  padding: 1rem;
  h1 {
    font-size: 1.5rem; /* Adjust the font size as needed */
    margin-bottom: 1rem; /* Optional: Adjust margin for spacing */
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(180px, 1fr)
  ); /* Adjust column size */
  gap: 0.1rem; /* Reduce the gap between cards */
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HeaderCard = styled.div`
  padding: 1.5rem;
  background-color: ${({ bgColor }) => bgColor || "#fff"};
  border-radius: 8px;
  width: 180px; /* Set the desired width */
  position: relative; /* Enable positioning for child elements */

  h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 2.5rem;
    margin: 0;
  }

  .bottom-right-text {
    font-size: 0.9rem;
    color: #666;
    position: absolute;
    bottom: 10px; /* Adjust as needed for spacing */
    right: 10px; /* Adjust as needed for spacing */
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #f0f0f0;
  }

  th {
    background-color: #f9f9f9;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #fafafa;
  }
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

const LeaveRequest = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const leaveRequests = [
    {
      name: "MAGHESH",
      date: "6/3/22",
      type: "Casual Leave",
      reason: "Not Well",
      days: 1,
      status: "Pending",
    },
    {
      name: "Tesla",
      date: "12/2/22 - 16/02/22",
      type: "Sick Leave",
      reason: "Not Well",
      days: 4,
      status: "Approved",
    },
    {
      name: "GM",
      date: "4/19/23",
      type: "Casual Leave",
      reason: "Sick Leave",
      days: 1,
      status: "Approved",
    },
  ];

  return (
    <LeaveRequestContainer>
      <Sidebar />
      <MainContent>
        <Navbar />
        <ContentWrapper>
          <h1>Leave Request</h1>

          {/* Header Section - Leave Request Stats */}
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

          {/* Leave Request Table */}
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Request Date</th>
                <th>Leave Type</th>
                <th>Reason</th>
                <th>No Days</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((request, index) => (
                <tr key={index}>
                  <td>{request.name}</td>
                  <td>{request.date}</td>
                  <td>{request.type}</td>
                  <td>{request.reason}</td>
                  <td>{request.days}</td>
                  <td>{request.status}</td>
                  <td>
                    <ActionsDropdown>
                      <button onClick={() => toggleDropdown(index)}>...</button>
                      {dropdownVisible === index && (
                        <div className="menu">
                          <button>Approve Leave</button>
                          <button>Reject Leave</button>
                          <button>View Details</button>
                        </div>
                      )}
                    </ActionsDropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ContentWrapper>
      </MainContent>
    </LeaveRequestContainer>
  );
};

export default LeaveRequest;
