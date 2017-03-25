import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  background: papayawhip;
`;

let HintListItem = (props) => (
  <Wrapper>
    {props.item.text}
  </Wrapper>
);

export default HintListItem;
