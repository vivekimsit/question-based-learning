import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: papayawhip;
  padding: 12px;
  box-sizing: border-box;
`;

let HintListItem = (props) => (
  <Wrapper>
    {props.item.text}
  </Wrapper>
);

export default HintListItem;
