import React, { PropTypes } from 'react';
import styled from 'styled-components';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Hint from './Hint';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  background: papayawhip;
  padding: 12px;
  box-sizing: border-box;
`;

export default (props) => (
  <Wrapper>
    <Hint {...props} />
  </Wrapper>
);
