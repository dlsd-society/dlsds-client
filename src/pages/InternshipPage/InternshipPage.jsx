import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  color: #34495e;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th,
  td {
    border: 1px solid #ddd;
    padding: 0.75rem;
    text-align: left;
  }

  th {
    background-color: #f7f7f7;
  }
`;

const Testimonial = styled.blockquote`
  font-style: italic;
  border-left: 4px solid #2980b9;
  margin: 1rem 0;
  padding-left: 1rem;
  color: #333;
`;

const ApplyButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: #2980b9;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;

  &:hover {
    background-color: #1f6392;
  }
`;

const InternshipPage = () => {
  return (
    <PageContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Title>Internships & Trainings</Title>
        <ApplyButton
          style={{ marginTop: '0', display: 'none' }}
          href="https://forms.gle/NLrnkRVYnZgGgJNN8"
          target="_blank"
        >
          Apply Now
        </ApplyButton>
      </div>

      <Section>
        <SubTitle>
          Build Your Future in Software Development — Remotely!
        </SubTitle>
        <Paragraph>
          At Digital Literacy and Skill Development Society (DLSDS), we are
          proud to offer remote internships in Software Development. Remote work
          is no longer the future — it is the present. It breaks geographical
          barriers, teaches time management, and prepares you for the global
          workforce.
        </Paragraph>
        <Paragraph>
          This internship is open to students in their final year, recent
          graduates, and anyone passionate about building a career in software
          development. All you need is curiosity, consistency, and a willingness
          to learn.
        </Paragraph>
      </Section>

      <Section>
        <SubTitle>What You'll Learn</SubTitle>
        <ul style={{ listStyle: 'none' }}>
          <li>✅ Full-stack web development</li>
          <li>✅ Git and collaborative workflows</li>
          <li>✅ Working with APIs and databases</li>
          <li>✅ Agile methods and remote collaboration tools</li>
        </ul>
      </Section>

      <Section>
        <SubTitle>
          Students from Top Institutes take part in our Internships
        </SubTitle>
        <ul style={{ listStyle: 'none', color: '#555', lineHeight: '1.8' }}>
          <li>✅ Cotton University, Guwahati, Assam</li>
          <li>✅ Jorhat Engineering College, Jorhat, Assam</li>
          <li>✅ NERIM Group of Institutions, Guwahati Assam</li>
          <li>✅ Dibrugarh University, Dibrugarh, Assam</li>
          <li>✅ Royal Global University, Guwahati, Assam</li>
          <p> and many more…</p>
        </ul>
      </Section>

      <Section>
        <SubTitle>What Our Interns Say</SubTitle>
        <Testimonial>
          "This internship gave me real development experience with supportive
          mentorship. I learned how to work in a team and manage tasks using
          GitHub." — Simran K., Tezpur University
        </Testimonial>
        <Testimonial>
          "Thanks to DLSDS, I could finally bridge the gap between my college
          syllabus and industry needs. Remote setup was smooth and very
          productive." — Akash B., JEC
        </Testimonial>
        <Testimonial>
          "The remote internship experience helped me learn on my own schedule
          and balance academics with learning. Highly recommend!" — Rajdeep D.,
          Gauhati University
        </Testimonial>
      </Section>

      <Section>
        <SubTitle>Ready to Apply?</SubTitle>
        <Paragraph>
          Internships are limited and offered on a rolling basis. Early
          applicants have a better chance of selection.
        </Paragraph>
        <ApplyButton href="https://forms.gle/NLrnkRVYnZgGgJNN8" target="_blank">
          Apply Now
        </ApplyButton>
      </Section>
    </PageContainer>
  );
};

export default InternshipPage;
