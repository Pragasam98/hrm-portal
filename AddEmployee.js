import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const EmployeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 0;

  @media (min-width: 768px) {
    margin-left: 240px;
  }
`;

const ContentWrapper = styled.div`
  padding: 2rem;
  background: #f9f9f9;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Header = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Section = styled.div`
  background: #fff;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1rem;
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
      font-size: 1.1rem;
    }
  }

  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #888;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
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
    flex: 1 1 100%;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;

  button {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    border: none;

    &:first-child {
      background: #ddd;
      color: #333;
      margin-right: 1rem;
    }

    &:last-child {
      background: #171717;
      color: #fff;
    }

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const AddEmployee = () => {
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
              <button>-</button>
            </SectionHeader>
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
          </Section>

          {/* Personal Details */}
          <Section>
            <SectionHeader>
              <h2>Personal Details</h2>
              <button>-</button>
            </SectionHeader>
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
          </Section>

          {/* Department */}
          <Section>
            <SectionHeader>
              <h2>Department</h2>
              <button>+</button>
            </SectionHeader>
          </Section>

          {/* Configuration */}
          <Section>
            <SectionHeader>
              <h2>Configuration</h2>
              <button>+</button>
            </SectionHeader>
          </Section>

          <ActionButtons>
            <button>Cancel</button>
            <button>Save</button>
          </ActionButtons>
        </ContentWrapper>
      </MainContent>
    </EmployeeContainer>
  );
};

export default AddEmployee;
