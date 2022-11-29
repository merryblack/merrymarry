import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BackgroundImageFlower from 'assets/flower-g1e14e7a4e_1920.png';

const S = {};

S.BackgroundFlower = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${BackgroundImageFlower}) no-repeat center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  transition: visibility 2s ease-in-out;
`;

function Greetings({ pageNum }) {
  return (
    <S.BackgroundFlower visible={pageNum === 2} />
  );
}

Greetings.defaultProps = {};

Greetings.propTypes = {};

export default Greetings;
