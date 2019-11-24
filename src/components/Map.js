import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const DivMap = styled.div`
  height:400px;
  width:70%;
`;

function Map() {
  const [defaultCoords, setDefaultCoords] = useState({longitude:126.978433,latitude:37.566689});
  const mapContainer = useRef();

  useEffect(() => {
		// console.log('컴포넌트가 화면에 나타남');
    const { latitude, longitude } = defaultCoords;
    const map = new window.naver.maps.Map(mapContainer.current, {
        center: new window.naver.maps.LatLng(latitude, longitude),
        zoom:11,
    });
    return () => {
      // console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);
  

  return (
    <>
      <DivMap
        ref={mapContainer}
      />
    </>
  );
}

export default Map;