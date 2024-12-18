import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center; /* Center the content horizontally */
  max-width: 1440px;
  width: 100%; /* Ensure it takes full width */
  min-height: 100vh; /* Ensure the container takes the full height of the screen */
  background-color: #f8f8f8;
  overflow: hidden; /* Prevent scrolling */
  position: fixed; /* Fix the page position */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; /* Ensure the container fills the entire screen */
  margin: 0 auto; /* Centers the container horizontally */

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0; /* Remove padding for mobile view */
  }
`;

export const LeftSection = styled.div`
  width: 668px; /* Fixed width for the left section */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f8f8;
  height: 100vh; /* Full height for the left section */

  @media (max-width: 768px) {
    width: 100%; /* Take full width on mobile */
    padding: 2rem 1rem;
    margin-bottom: 0;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  width: 668px;
  height: 100vh; /* Full height for the right section */
  padding-left: 100px;

  @media (max-width: 768px) {
    display: none; /* Hide the right section on mobile */
  }
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  margin-left: 90px;

  img {
    width: 50px;
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Title = styled.h1`
  font-size: 3.8rem;
  font-weight: bold;
  margin-bottom: -20px;
  margin-left: 90px;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-left: 0;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  margin-left: 90px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 0;
  }
`;

export const Input = styled.input`
  width: 50%; /* Reduced width for the input */
  padding: 0.8rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  font-size: 1rem;
  margin-left: 90px;

  @media (max-width: 768px) {
    width: 80%; /* Adjust width for smaller screens */
    margin-left: 0;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  margin-left: 90px;

  input {
    margin-right: 0.5rem;
  }

  label {
    color: #555;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Button = styled.button`
  background-color: #e63946;
  color: white;
  font-size: 1.2rem;
  border: none;
  padding: 0.8rem;
  width: 50%; /* Reduced width for the button */
  border-radius: 0.4rem;
  cursor: pointer;
  margin-left: 90px;

  &:hover {
    background-color: #d62839;
  }

  @media (max-width: 768px) {
    width: 80%; /* Adjust width for smaller screens */
    margin-left: 0;
  }
`;

export const Graphic = styled.div`
  width: 768px;
  height: 768px;
  padding-top: -40px;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    display: none; /* Hide graphic on small screens */
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;
