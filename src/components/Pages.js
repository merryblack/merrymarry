import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useWindowScrollPositions } from 'hooks/useWindowScrollPositions';
import Cover from 'components/pages/Cover';
import Greetings from 'components/pages/Greetings';

const S = {};

function Pages({ pageNum }) {
  const { scrollX, scrollY } = useWindowScrollPositions();
  
  return (
      <div>
        <Cover pageNum={pageNum} />
        <Greetings pageNum={pageNum} />
      </div>
    );
}

Pages.defaultProps = {
  open: false,
  close: false,
};

Pages.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.bool,
};

export default Pages;
