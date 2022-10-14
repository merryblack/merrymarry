import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SCROLL_OFFSET } from 'constants/const';
import BackgroundImageFlower from 'assets/flower-g1e14e7a4e_1920.png';

const S = {};
S.OverlayWhite = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
  opacity: ${({ scrollTop }) => 1 - (Math.min((scrollTop - 300) * SCROLL_OFFSET, 1))};
`;
S.BackgroundFlower = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${BackgroundImageFlower}) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

function Greeting({ scrollTop, showScrollTop, hideScrollTop }) {
  return (scrollTop > showScrollTop && scrollTop < hideScrollTop) && (
    <div>
      <S.BackgroundFlower />
      <S.OverlayWhite scrollTop={scrollTop} />
    </div>
  )
}

Greeting.defaultProps = {};

Greeting.propTypes = {};

export default Greeting;
