import styled from 'styled-components';

const HeroContainer = styled.section`
  background: linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%);
  color: #fff;
  min-height: 93vh;
  padding: 80px 20px 60px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: -1px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 32px;
  max-width: 580px;
`;

const HeroButton = styled.a`
  background: #fff;
  color: #fc5c7d;
  border: none;
  padding: 16px 40px;
  font-size: 1.125rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #ffe9f5;
    color: #6a82fb;
  }
`;

export default function HeroSection() {
  return (
    <HeroContainer>
      <HeroTitle>
        FirstHack 2025 <br /> Beginner Hackathon
      </HeroTitle>
      <HeroSubtitle>
        Join us for a 3 days, beginner-friendly virtual hackathon! <br /> Learn,
        code, connect, and create your first real project—no experience
        required.
      </HeroSubtitle>
      <HeroButton href="/firsthack/hackathons">Register Now</HeroButton>
    </HeroContainer>
  );
}
