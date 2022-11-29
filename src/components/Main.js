import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useWindowScrollPositions } from 'hooks/useWindowScrollPositions';
import styled from 'styled-components';
import BackgroundImageFlower from 'assets/flower-g1e14e7a4e_1920.png';
import { useSwipeable } from 'react-swipeable';
import Pages from 'components/Pages';

const S = {};
S.Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  max-width: 1840px;
  min-width: 240px;
  position: relative;
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
S.ScrollGuide = styled.div`
  position: fixed;
  top: 10px;
  color: deeppink;
  font-size: 28px;
  font-weight: 800;
`;

function Main(props) {
  const { scrollX, scrollY } = useWindowScrollPositions();
  const [ pageNum, setPageNum ] = useState(1);
  const lastPageNum = 5;
  
  const { ref: documentRef } = useSwipeable({
    onSwipedUp: () => {
      if (pageNum < lastPageNum) {
        setPageNum(pageNum + 1);
      }
    },
    onSwipedDown: () => {
      if (pageNum > 1) {
        setPageNum(pageNum - 1);
      }
    },
    // preventDefaultTouchmoveEvent: true,
    // swipeDuration: 500,
    // preventScrollOnSwipe: true,
    trackMouse: true
  });
  
  useEffect(() => {
    console.log('@@@ pageNum : ', pageNum);
  }, [pageNum]);
  
  useEffect(() => {
    documentRef(document);
    console.log('@@ when mounted');
  
    return () => {
      console.log('@@ when destroy');
    };
  }, []);
  
  return (
    <S.Main id='main'>
      <Pages pageNum={pageNum} />
      <S.ScrollGuide>
        Scroll position is ({scrollX}, {scrollY})
      </S.ScrollGuide>
    </S.Main>
  );
}

Main.defaultProps = {};

Main.propTypes = {};

export default Main;
