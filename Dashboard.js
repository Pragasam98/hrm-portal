import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import Calendar styles
import { FaAngleDown } from "react-icons/fa";
import PayImage from "./images/pay.png";
import TaskImage from "./images/task.png";
import RobImage from "./images/rob.png";

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  font-family: Arial, sans-serif;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fff;
  margin-left: 278px; /* Add margin to avoid overlay with the sidebar */
`;

const ContentWrapper = styled.div`
  padding: 2rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
`;

const WidgetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Row1Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

const Widget = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  text-align: left;
  background: #fff;
  color: #161e54;
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 3rem;
    margin: 0;
  }

  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
`;

const Row2Container = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  gap: 1rem;
`;

const Row2Widget = styled(Widget)`
  min-height: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #f0f0f0;
  border-radius: 8px;

  img {
    height: 180px;
    width: 40%;
    object-fit: contain;
  }

  .bottom-text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
    font-size: 1rem;
    color: #777;
    margin-top: auto;
    padding-top: 14px;
  }
`;

const AnnouncementSection = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
  position: relative;
  border: 1px solid #f0f0f0;
`;

const AnnouncementItem = styled.div`
  margin-bottom: 1rem;
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
`;

const DateContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  font-size: 1rem;
  color: #686868;
  background: #fff;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #686868;
`;

const SeeAll = styled.div`
  text-align: center;
  margin-top: 1rem;

  a {
    color: red;
    text-decoration: none;
    font-weight: bold;
  }
`;

const HeadingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  margin-bottom: 2rem;
  gap: 28.9rem;
`;

const SectionTitle = styled.h2`
  color: #333;
  margin: 0;
`;

const StyledCalendar = styled(Calendar)`
  /* Override default width */
  && {
    width: 100% !important; /* Force it to take full available space */
    max-width: 700px !important; /* Adjust to your preferred width */
    margin: 0 auto; /* Center it horizontally */
    background: #fff;
    border: none;
    border-radius: 8px;
    font-family: Arial, sans-serif;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Navigation styling */
  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: none;
      border: none;
      font-size: 1.5rem;
      color: #333;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        color: #007bff;
      }
    }
  }

  /* Weekday labels */
  .react-calendar__month-view__weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    font-weight: bold;
    color: #777;
    font-size: 1rem;

    abbr {
      text-decoration: none; /* Remove underline */
    }
  }

  /* Day tiles */
  .react-calendar__tile {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    font-size: 1.1rem;
    margin: 0.3rem auto;

    &:hover {
      background-color: #f0f8ff;
    }
  }

  /* Active day styling */
  .react-calendar__tile--active {
    background: #4c8bf5;
    color: #fff;
    font-weight: bold;
  }

  /* Remove neighboring month days */
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #ccc;
  }
`;

const BirthdayCalendar = styled.div`
  background: #fff;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  justify-items: center;
`;

const BirthdayItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background: #fff;
  padding: 2rem;
  width: 80%;
  height: 220px;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  text-align: center;

  img {
    height: 100px;
    border-radius: 50%;
  }

  div {
    line-height: 1.2;
    color: #333;

    h4 {
      margin: 0;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    p {
      margin: 0;
      color: #777;
      font-size: 1rem;
    }

    p + p {
      margin-top: 0.5rem;
    }
  }
`;

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowCalendar(false);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const currentDate = date.toLocaleDateString();

  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <Navbar />
        <ContentWrapper>
          <HeadingWrapper>
            <SectionTitle>Dashboard</SectionTitle>
            <SectionTitle>Calendar</SectionTitle>
          </HeadingWrapper>

          <GridContainer>
            <div>
              <WidgetsContainer>
                <Row1Container>
                  <Widget bgColor="#ffefe7">
                    <h3>Leave Request</h3>
                    <p>04</p>
                  </Widget>
                  <Widget bgColor="#e8f0fb">
                    <h3>Attendance</h3>
                    <p>10</p>
                  </Widget>
                  <Widget bgColor="#fdebf9">
                    <h3>Total Employees</h3>
                    <p>24</p>
                  </Widget>
                </Row1Container>
                <Row2Container>
                  <Row2Widget>
                    <div>
                      <h3>Payroll</h3>
                      <p>48</p>
                      <div className="bottom-text">
                        <div>12 Men</div>
                        <div>12 Women</div>
                      </div>
                    </div>
                    <img src={PayImage} alt="Pay" />
                  </Row2Widget>
                  <Row2Widget>
                    <div>
                      <h3>Task Requests</h3>
                      <p>16</p>
                      <div className="bottom-text">
                        <div>6 Men</div>
                        <div>10 Women</div>
                      </div>
                    </div>
                    <img src={TaskImage} alt="Task" />
                  </Row2Widget>
                </Row2Container>
              </WidgetsContainer>

              <AnnouncementSection>
                <h3>Announcement</h3>
                <AnnouncementItem>
                  <h4>Outing schedule for every department</h4>
                  <small>5 Minutes ago</small>
                </AnnouncementItem>
                <AnnouncementItem>
                  <h4>Meeting HR Department</h4>
                  <small>Yesterday, 12:30 PM</small>
                </AnnouncementItem>
                <AnnouncementItem>
                  <h4>
                    IT Department need two more talents for UX/UI Designer
                    position
                  </h4>
                  <small>Yesterday, 09:15 AM</small>
                </AnnouncementItem>
                <SeeAll>
                  <a href="#">See All Announcement</a>
                </SeeAll>
                <DateContainer onClick={toggleCalendar}>
                  {currentDate}
                  <FaAngleDown color="#686868" />
                </DateContainer>
              </AnnouncementSection>
            </div>

            <div>
              <StyledCalendar
                value={date}
                onChange={setDate}
                nextLabel="›"
                prevLabel="‹"
                next2Label={null}
                prev2Label={null}
              />

              <h3>Birthday Calendar</h3>
              <BirthdayCalendar>
                <BirthdayItem>
                  <img src={RobImage} alt="Robert Whistable" />
                  <div>
                    <h4>Robert Whistable</h4>
                    <p>Product Manager</p>
                    <p>15 Feb 1998</p>
                  </div>
                </BirthdayItem>
                <BirthdayItem>
                  <img src={RobImage} alt="Robert Whistable" />
                  <div>
                    <h4>Robert Whistable</h4>
                    <p>Product Manager</p>
                  </div>
                </BirthdayItem>
              </BirthdayCalendar>
            </div>
          </GridContainer>
        </ContentWrapper>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
