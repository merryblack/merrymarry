import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BackgroundImageCouple from 'assets/DSC05981.jpg';

const S = {};
S.BackgroundCouple = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${BackgroundImageCouple}) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  transition: visibility 2s ease-in-out;
`;
S.OverlayBlack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
`;
S.CoverMain = styled.div`
  font-size: 60px;
  color: antiquewhite;
  z-index: 2;
`;
S.CoverName = styled.div`
  font-size: 48px;
  color: antiquewhite;
  z-index: 2;
`;
S.CoverDate = styled.div`
  font-size: 32px;
  color: antiquewhite;
  z-index: 2;
`;
S.CoverSpot = styled.div`
  font-size: 32px;
  color: antiquewhite;
  z-index: 2;
`;

function Cover({ pageNum }) {
  return (
    <S.BackgroundCouple visible={pageNum === 1}>
      <S.OverlayBlack />
      <S.CoverName>승규,주연</S.CoverName>
      <S.CoverMain>결혼합니다</S.CoverMain>
      <S.CoverDate>2023년 3월 25일 토요일 낮 1시</S.CoverDate>
      <S.CoverSpot>고려대학교 교우회관</S.CoverSpot>
    </S.BackgroundCouple>
  );
}

Cover.defaultProps = {};

Cover.propTypes = {};

export default Cover;
