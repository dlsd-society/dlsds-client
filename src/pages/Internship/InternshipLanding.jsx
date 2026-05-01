import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 3rem 1rem;
  max-width: 900px;
  margin: auto;
  font-family: "Poppins", sans-serif;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const LinkBox = styled.div`
  background: #f7f7f7;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;

  a {
    font-size: 1.2rem;
    font-weight: bold;
    color: #0056a3;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const InternshipLanding = () => {
  return (
    <Container>
      <Title>Select Your Internship Category</Title>

      <LinkBox>
        <Link to="/internship/software-development">
          Software Development Internship (Remote/Work From Anywhere)
        </Link>
      </LinkBox>

      <LinkBox>
        <Link to="/internship-registration-others">
          Other Internships
        </Link>
      </LinkBox>
    </Container>
  );
};

export default InternshipLanding;
