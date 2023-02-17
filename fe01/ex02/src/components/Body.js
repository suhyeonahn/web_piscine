import React from 'react';
import styled from 'styled-components';

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90vh;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 30px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 40px;
`;

const Body = () => {
  return (
    <BodyContainer>
      <Title>Who is Suhyeon?</Title>
      <Paragraph>
        From Korea, studying computer engineering in 42 Paris.
      </Paragraph>
    </BodyContainer>
  );
};

export default Body;