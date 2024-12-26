import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
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

const Card = ({ icon, title, onClick }) => (
  <CardWrapper onClick={onClick}>
    <CardIcon src={icon} alt={`${title} Icon`} />
    <CardTitle>{title}</CardTitle>
  </CardWrapper>
);

export default Card;
