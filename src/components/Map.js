import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const DivMap = styled.div`
  height:400px;
  width:70%;
`;

function Map({initData}) {
  const [defaultCoords, setDefaultCoords] = useState({latitude:37.566689,longitude:126.978433});
  const [hotplaceList, setHotplaceList] = useState(initData)
  const mapContainer = useRef();

  useEffect(() => {
		// console.log('컴포넌트가 화면에 나타남');
    const { latitude, longitude } = defaultCoords;
    const map = new window.naver.maps.Map(mapContainer.current, {
        center: new window.naver.maps.LatLng(latitude, longitude),
        zoom:11,
    });
    hotplaceList.map(hp=>{
      const {latitude, longitude} = hp.coords; 
      return (
        new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(latitude, longitude),
          map: map
        })
      )
  });
    return () => {
      // console.log('컴포넌트가 화면에서 사라짐');
    };
  }, [defaultCoords]);
  

  return (
    <>
      <DivMap
        ref={mapContainer}
      />
    </>
  );
}

export default Map;