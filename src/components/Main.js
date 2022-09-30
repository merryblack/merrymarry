import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useWindowScrollPositions } from '../hooks/useWindowScrollPositions';

function Main(props) {
  const { scrollX, scrollY } = useWindowScrollPositions()
  
  useEffect(() => {
    console.log('@@ when mounted');
  
    return () => {
      console.log('@@ when destroy');
    };
  }, []);
  
  return (
    <div id='main'>
      <div>
        <div className='scroll'>
          Scroll position is ({scrollX}, {scrollY})
        </div>
      </div>
    </div>
  );
}

Main.defaultProps = {};

Main.propTypes = {};

export default Main;
