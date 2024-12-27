import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const EmployeeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack Sidebar and MainContent for mobile */
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 238px;
  background: #fff;
  z-index: 0;

  @media (max-width: 768px) {
    margin-left: 0; /* Remove left margin for mobile */
  }
`;

const ContentWrapper = styled.div`
  padding: 2rem;
  background: #fff;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem; /* Reduce padding for mobile */
  }
`;

const Header = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem; /* Adjust header size for mobile */
  }
`;

const Section = styled.div`
  background: #fff;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem; /* Reduce padding for mobile */
    margin-bottom: 1rem; /* Reduce margin for mobile */
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.25rem;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.1rem; /* Adjust header size for mobile */
    }
  }

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgb(177, 177, 177);
    color: #fff;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      background: rgb(97, 97, 97);
    }
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack form elements vertically for mobile */
  }
`;

const InputWrapper = styled.div`
  flex: 1 1 calc(33.333% - 1rem);
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input,
  select {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;

    &:focus {
      outline: none;
      border-color: #666;
    }
  }

  @media (max-width: 768px) {
    flex: 1 1 100%; /* Inputs take full width on mobile */
  }
`;

const AddEmployee = () => {
  const [isEmployeeDetailsVisible, setIsEmployeeDetailsVisible] =
    useState(true);
  const [isPersonalDetailsVisible, setIsPersonalDetailsVisible] =
    useState(true);
  const [isDepartmentVisible, setIsDepartmentVisible] = useState(true);
  const [isConfigurationVisible, setIsConfigurationVisible] = useState(true);

  return (
    <EmployeeContainer>
      <Sidebar />
      <MainContent>
        <Navbar />
        <ContentWrapper>
          <Header>Employee</Header>

          {/* Add details of an employee */}
          <Section>
            <SectionHeader>
              <h2>Add details of an employee</h2>
              <button
                onClick={() =>
                  setIsEmployeeDetailsVisible(!isEmployeeDetailsVisible)
                }
              >
                {isEmployeeDetailsVisible ? "-" : "+"}
              </button>
            </SectionHeader>
            {isEmployeeDetailsVisible && (
              <FormGroup>
                <InputWrapper>
                  <label>Employee Name *</label>
                  <input type="text" placeholder="Enter Employee Name" />
                </InputWrapper>
                <InputWrapper>
                  <label>Employee Number *</label>
                  <input type="text" placeholder="Enter Employee Number" />
                </InputWrapper>
                <InputWrapper>
                  <label>Date of Joining *</label>
                  <input type="date" />
                </InputWrapper>
                <InputWrapper>
                  <label>Email ID *</label>
                  <input type="email" placeholder="Enter Email ID" />
                </InputWrapper>
                <InputWrapper>
                  <label>Mobile Number *</label>
                  <input type="text" placeholder="Enter Mobile Number" />
                </InputWrapper>
                <InputWrapper>
                  <label>Employee Status *</label>
                  <select>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </InputWrapper>
              </FormGroup>
            )}
          </Section>

          {/* Personal Details */}
          <Section>
            <SectionHeader>
              <h2>Personal Details</h2>
              <button
                onClick={() =>
                  setIsPersonalDetailsVisible(!isPersonalDetailsVisible)
                }
              >
                {isPersonalDetailsVisible ? "-" : "+"}
              </button>
            </SectionHeader>
            {isPersonalDetailsVisible && (
              <FormGroup>
                <InputWrapper>
                  <label>Date of Birth *</label>
                  <input type="date" />
                </InputWrapper>
                <InputWrapper>
                  <label>Gender *</label>
                  <select>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </InputWrapper>
                <InputWrapper>
                  <label>Marital Status *</label>
                  <select>
                    <option>Single</option>
                    <option>Married</option>
                  </select>
                </InputWrapper>
                <InputWrapper>
                  <label>Is Physically Challenged *</label>
                  <select>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </InputWrapper>
                <InputWrapper>
                  <label>Blood Group *</label>
                  <select>
                    <option>O+</option>
                    <option>A+</option>
                    <option>B+</option>
                    <option>AB+</option>
                  </select>
                </InputWrapper>
                <InputWrapper>
                  <label>Personal Email ID *</label>
                  <input type="email" placeholder="Enter Email ID" />
                </InputWrapper>
              </FormGroup>
            )}
          </Section>

          {/* Department */}
          <Section>
            <SectionHeader>
              <h2>Department</h2>
              <button
                onClick={() => setIsDepartmentVisible(!isDepartmentVisible)}
              >
                {isDepartmentVisible ? "-" : "+"}
              </button>
            </SectionHeader>
            {isDepartmentVisible && (
              <div>
                <p>Select a department:</p>
                <div>
                  <input
                    type="radio"
                    id="software engineer"
                    name="department"
                  />
                  <label htmlFor="software engineer">Software Engineer</label>
                </div>
                <div>
                  <input type="radio" id="product manager" name="department" />
                  <label htmlFor="product manager">Product Manager</label>
                </div>
                <div>
                  <input type="radio" id="ux/ui designer" name="department" />
                  <label htmlFor="ux/ui designer">UX/UI Designer</label>
                </div>
                <div>
                  <input type="radio" id="marketing lead" name="department" />
                  <label htmlFor="marketing lead">Marketing Lead</label>
                </div>
                <div>
                  <input type="radio" id="hr manager" name="department" />
                  <label htmlFor="hr manager">HR Manager</label>
                </div>
              </div>
            )}
          </Section>

          {/* Configuration */}
          <Section>
            <SectionHeader>
              <h2>Configuration</h2>
              <button
                onClick={() =>
                  setIsConfigurationVisible(!isConfigurationVisible)
                }
              >
                {isConfigurationVisible ? "-" : "+"}
              </button>
            </SectionHeader>
            {isConfigurationVisible && (
              <div>
                <p>Select Configuration options:</p>
                <div>
                  <input type="radio" id="config1" name="config" />
                  <label htmlFor="config1">Option 1</label>
                </div>
                <div>
                  <input type="radio" id="config2" name="config" />
                  <label htmlFor="config2">Option 2</label>
                </div>
              </div>
            )}
          </Section>
        </ContentWrapper>
      </MainContent>
    </EmployeeContainer>
  );
};

export default AddEmployee;
