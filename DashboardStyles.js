import styled from "styled-components";
import Calendar from "react-calendar";
export const DashboardContainer = styled.div`
  display: flex;
  font-family: Arial, sans-serif;
  justify-content: center;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  padding: 0; /* Remove extra padding */
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fff;
  margin-left: 190px;
  padding: 0; /* Remove unnecessary padding */
  @media (max-width: 768px) {
    margin-left: 0; /* Remove sidebar margin for mobile */
  }
`;

export const ContentWrapper = styled.div`
  padding: 1rem; /* Reduced padding */
  overflow-y: auto; /* Ensure content is scrollable */
  height: 100%; /* Ensure it takes the full height */
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0.5rem; /* Further reduced gap between items */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack columns in mobile view */
  }
`;

export const WidgetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* Further reduced gap between widgets */
`;

export const Row1Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.1rem; /* Further reduced gap between widgets */
  height: auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack widgets vertically on mobile */
  }
`;

export const Widget = styled.div`
  padding: 0.3rem; /* Further reduced padding */
  border-radius: 8px;
  text-align: left;
  background: #fff;
  color: #161e54;
  width: 90%; /* Reduced width of the widgets */
  margin: 0 auto; /* Center widget horizontally */
  h3 {
    font-size: 0.6rem; /* Further reduced font size */
    margin-bottom: 0.1rem; /* Reduced margin */
  }
  p {
    font-size: 1.5rem; /* Further reduced font size */
    margin: 0;
  }

  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
`;

export const Row2Container = styled.div`
  display: grid;
  grid-template-columns: 48% 48%; /* Reduced column width */
  gap: 0.3rem; /* Further reduced gap */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack Row2 widgets vertically on mobile */
  }
`;
export const Row2Widget = styled(Widget)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 0.5rem; /* Further reduced padding */

  img {
    height: 120px; /* Reduced image height */
    width: 40%;
    object-fit: contain;
  }

  .bottom-text {
    display: flex;
    flex-direction: column;
    gap: 0.2rem; /* Reduced gap */
    align-items: flex-start;
    font-size: 0.7rem; /* Reduced font size */
    color: #777;
    margin-top: auto;
    padding-top: 6px; /* Reduced padding */
  }
`;
export const AnnouncementSection = styled.div`
  background: #fff;
  padding: 0.1rem; /* Further reduced padding */
  border-radius: 8px;
  margin-top: 0.2rem; /* Reduced margin-top */
  position: relative; /* To position DateContainer absolutely within */
  border: 1px solid #f0f0f0;
  height: auto; /* Ensure height is not unnecessarily large */
`;

export const AnnouncementHeader = styled.div`
  display: flex; /* Align heading and DateContainer in one line */
  justify-content: flex-start; /* Align heading to the left */
  align-items: center; /* Vertically align them */
`;

export const AnnouncementItem = styled.div`
  margin-bottom: 0.02rem; /* Further reduced bottom margin */
  padding: 0.01rem; /* Minimized padding */
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.01); /* Minimal shadow */
  border: 1px solid #f0f0f0;

  p {
    font-size: 0.45rem; /* Even smaller text */
    margin: 0;
  }

  h3 {
    font-size: 0.6rem; /* Even smaller heading font size */
    margin: 0;
  }
`;

export const DateContainer = styled.div`
  position: absolute;
  top: 3px; /* Slight distance from the top */
  right: 3px; /* Positioned to the right */
  font-size: 0.55rem; /* Further reduced font size */
  color: #686868;
  background: #fff;
  padding: 0.1rem 0.1rem; /* Further reduced padding */
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #686868;
`;

export const SeeAll = styled.div`
  text-align: center;
  margin-top: 0.1rem; /* Further reduced margin-top */

  a {
    color: red;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.5rem; /* Further reduced font size */
  }
`;
export const HeadingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  margin-bottom: 0.5rem; /* Reduced margin-bottom */
  gap: 4rem; /* Reduced gap between items */
  padding: 0; /* Removed unwanted padding */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack headings on mobile */
    gap: 0; /* Remove gap */
    padding: 0; /* Remove padding on smaller screens */
  }
`;

export const SectionTitle = styled.h2`
  color: #333;
  margin: 0;
  font-size: 0.85rem; /* Reduced font size */

  @media (max-width: 768px) {
    display: ${({ isCalendar }) =>
      isCalendar ? "none" : "block"}; /* Hide Calendar heading only */
  }
`;

export const MobileCalendarTitle = styled.h2`
  display: none;
  color: #333;
  margin: 0;

  @media (max-width: 768px) {
    display: block; /* Show only on mobile */
  }
`;

export const StyledCalendar = styled(Calendar)`
  && {
    width: 100% !important;
    max-width: 600px !important; /* Reduced max-width */
    margin: 0 auto;
    background: #fff;
    border: none;
    border-radius: 8px;
    font-family: Arial, sans-serif;
    padding: 0.4rem; /* Reduced padding */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background: #f8f8f8;
    max-height: 300px; /* Further reduced max-height */
    overflow: hidden;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: none;
      font-size: 1rem; /* Reduced font size */
      color: #333;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        color: #007bff;
      }
    }
  }

  .react-calendar__month-view__weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    font-weight: bold;
    color: #777;
    font-size: 0.7rem; /* Reduced font size */
  }

  .react-calendar__tile {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20%;
    height: 30px; /* Further reduced height */
    width: 30px; /* Further reduced width */
    font-size: 0.7rem; /* Reduced font size */
    margin: 0.1rem auto;

    &:hover {
      background-color: #f0f8ff;
    }
  }

  .react-calendar__tile--active {
    background: #4c8bf5;
    color: #fff;
    font-weight: bold;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #ccc;
  }
`;

export const BirthdayCalendar = styled.div`
  background: #fff;
  padding: 1rem; /* Reduced padding */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem; /* Reduced gap */
  justify-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack birthday items vertically on mobile */
    gap: 1.5rem; /* Reduce gap on mobile */
  }
`;

export const BirthdayItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; /* Reduced gap */
  background: #fff;
  padding: 1.5rem; /* Reduced padding */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    width: 70px; /* Reduced width */
    height: 70px; /* Reduced height */
    border-radius: 50%;
    object-fit: cover;
  }

  h4 {
    font-size: 1rem; /* Reduced font size */
    color: #333;
    margin: 0;
  }

  p {
    font-size: 0.8rem; /* Reduced font size */
    color: #777;
    margin: 0.2rem 0;
  }
`;
