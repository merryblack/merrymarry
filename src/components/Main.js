import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useWindowScrollPositions } from 'hooks/useWindowScrollPositions';
import styled from 'styled-components';
import BackgroundImageFlower from 'assets/flower-g1e14e7a4e_1920.png';
import BackgroundImageHall from 'assets/wedding-gfb68af41d_1920.jpg';
import { SCENE_OFFSET, SCROLL_OFFSET } from 'constants/const';
import Cover from 'components/Cover';
import Greeting from 'components/Greeting';
import Photos from 'components/Photos';

const S = {};
S.Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 4000px;
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
  color: aliceblue;
  font-size: 28px;
  font-weight: 800;
`;

function Main(props) {
  const { scrollX, scrollY } = useWindowScrollPositions()
  
  useEffect(() => {
    console.log('@@ when mounted');
  
    return () => {
      console.log('@@ when destroy');
    };
  }, []);
  
  const COVER_END = 1/SCROLL_OFFSET + SCENE_OFFSET;
  const GREETING_END = COVER_END + 2/SCROLL_OFFSET + SCENE_OFFSET;
  
  return (
    <S.Main id='main'>
      <Cover scrollTop={scrollY} showScrollTop={-1} hideScrollTop={COVER_END} />
      <Greeting scrollTop={scrollY} showScrollTop={COVER_END} hideScrollTop={GREETING_END} />
      <Photos />
      <S.ScrollGuide>
        Scroll position is ({scrollX}, {scrollY})
      </S.ScrollGuide>
    </S.Main>
  );
}

Main.defaultProps = {};

Main.propTypes = {};

export default Main;
