import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HackathonPage = () => {

  const [showPopover, setShowPopover] = useState(false);

  return (
    <Container>
      <PageContainer>
        <div
          style={{
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
            marginBottom: '6rem',
          }}
        >
          <Title>Welcome to firstHack</Title>
          <Paragraph>
            {' '}
            A 3-Day Virtual Hackathon for Beginner Engineers
          </Paragraph>
          <Paragraph>
            {' '}
            Next hackathon to be held in February, 2026 <br /> 100% Online
          </Paragraph>
          
          {/* Uncomment the Register link when registration date is near  */}

          {/* <StyledLink to="/hackathon-registration">
            Register Now
          </StyledLink> */}

          <PopoverWrapper>
            <StyledLink
              as="button"
              type="button"
              onClick={() => setShowPopover((prev) => !prev)}
            >
              Register Now
            </StyledLink>

            {showPopover && (
              <Popover>
                Registration opens from January 2026
              </Popover>
            )}
          </PopoverWrapper>
        </div>

        <Section>
          <SubTitle>About the firstHack</SubTitle>
          <Paragraph>
            Unlock your innovation. firstHack is a unique 3-day virtual
            hackathon tailored to beginner engineers, students, and aspiring
            developers. Whether you've written just a few lines of code or are
            exploring your first projects, this is the perfect, welcoming space
            to learn, collaborate, and build something amazing from scratch.
          </Paragraph>
        </Section>
        <Section>
          <SubTitle>Who Can Join?</SubTitle>
          <Paragraph>
            <ul
              style={{
                lineHeight: '2.8',
                marginLeft: '1rem',
              }}
            >
              <li>
                It is mainly focused towards Beginners with No prior hackathon
                or advanced coding experience required.
              </li>
              <li>
                Students, early professionals, and self-learners, all are
                welcome.
              </li>
              <li>
                Solo participants or teams (2-4), join alone or with friends.
                Teaming up is encouraged, and we'll help match you with partners
                if you want.
              </li>
            </ul>
          </Paragraph>
        </Section>
        <Section>
          <SubTitle>What to Expect</SubTitle>
          <Paragraph>
            <ul style={{ lineHeight: '2.8', marginLeft: '1rem' }}>
              <li>
                Beginner-Friendly Challenges: Tackle accessible but real-world
                problems—think building something related to a Digital Literacy
                Tools, Cyber Security Awareness, E-Governance Solutions,
                Education Tech (EdTech), Healthcare Tech, Environment &
                Sustainability, Open Track (Any innovative software idea)
              </li>
              <li>
                Workshops & Onboarding: Introductory coding sessions, tool
                walkthroughs, and Q&A to help you start strong.
              </li>
              <li>
                Mentor Access: Friendly mentors available all day for support
                and debugging help.
              </li>
              <li>
                Networking: Virtual socials, team-matching, and open forums to
                find your crew and make new friends.
              </li>
              <li>
                Project Showcases & Prizes: Demo your work, get constructive
                feedback, and celebrate every achievement—whether you finish or
                just learn something new.
              </li>
            </ul>
          </Paragraph>
        </Section>
        <Section>
          <SubTitle>Resources</SubTitle>
          <Paragraph>
            Live Communication: All event updates and support will be through
            our Discord.
          </Paragraph>
        </Section>
        <Section>
          <SubTitle>Judging Criteria</SubTitle>
          <ul style={{ lineHeight: '2.8', marginLeft: '1rem' }}>
            <li>Creativity (30%): Is the idea novel, fun, or helpful?</li>
            <li>
              Functionality and Usability (30%): Does your project work as
              intended?
            </li>
            <li>
              Presentation (20%): Are you able to clearly demo and explain your
              solution?
            </li>
            <li>
              Learning & Growth (20%): Did your team try new things and grow
              their skills?
            </li>
          </ul>
        </Section>

        <Section>
          <SubTitle>Code of Conduct</SubTitle>
          <Testimonial>
            Inclusion, kindness, and respect are at the heart of firstHack. All
            participants must follow our code of conduct, ensuring a
            harassment-free, supportive environment where everyone can learn and
            thrive.
          </Testimonial>
        </Section>

        <Section>
          <SubTitle>Ready to Apply?</SubTitle>
          <Paragraph>
            We are excited what you are going to build. Happy Hacking.
          </Paragraph>

          {/* <StyledLink to="/hackathon-registration">
            Register Now
          </StyledLink> */}

          <PopoverWrapper>
            <StyledLink
              as="button"
              type="button"
              onClick={() => setShowPopover((prev) => !prev)}
            >
              Register Now
            </StyledLink>

            {showPopover && (
              <Popover>
                Registration opens from January 2026
              </Popover>
            )}
          </PopoverWrapper>

        </Section>
      </PageContainer>
    </Container>
  );
};

export default HackathonPage;

const Container = styled.div`
  background: linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%);
  color: #fff;
`;
const PageContainer = styled.div`
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  ${'' /* color: #2c3e50; */}
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  ${'' /* color: #34495e; */}
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  ${'' /* color: #555; */}
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
  ${'' /* color: #333; */}
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

const StyledLink = styled(Link)`
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

const PopoverWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Popover = styled.div`
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  color: #333;
  padding: 10px 14px;
  border-radius: 6px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  z-index: 10;

  ::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent #ffffff transparent;
  }
`;
