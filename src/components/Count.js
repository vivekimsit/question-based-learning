import React from 'react';
import { connect } from 'react-redux';

import SubHead from './SubHead';
import { getQuizCount } from '../reducers';

const Count = ({count}) => (
  <SubHead>{ count }</SubHead>
);

const mapStateToProps = (state, {filter}) => ({
  count: getQuizCount(state, filter),
});

export default connect(mapStateToProps)(Count);

