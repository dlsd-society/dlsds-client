import styled from 'styled-components';

const ComingSoonPage = () => {
  return (
    <HeroContainer>
      <HeroTitle>Coming Soon ...</HeroTitle>
    </HeroContainer>
  );
};

export default ComingSoonPage;

const HeroContainer = styled.section`
  background: linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%);
  color: #fff;
  min-height: 85vh;
  padding: 80px 20px 60px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 5rem;
  font-weight: 600;
  margin-bottom: 16px;
  letter-spacing: -1px;
`;
