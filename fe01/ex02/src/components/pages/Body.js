import React from 'react';
import styled from 'styled-components';

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 40px;
`;

const Body = () => {
  return (
    <BodyContainer>
      <Title>Welcome to my website</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, eros eu eleifend tincidunt, lorem velit varius risus, vel efficitur nulla sapien nec ante.
      </Paragraph>
      <Paragraph>
        Sed bibendum velit id libero blandit, a congue tellus sagittis. Nam aliquam nunc quis tortor blandit, a facilisis nulla laoreet. Aliquam erat volutpat.
      </Paragraph>
    </BodyContainer>
  );
};

export default Body;