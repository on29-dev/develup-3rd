import React from 'react';
import './App.css';
import Map from './components/Map';
import HotplaceList from './components/HotplaceList';

const initData = [
  { id:1, title:'스타복수:복튀김', coords:{latitude: 37.566942, longitude: 126.975135} },
  { id:1, title:'우후후 떡볶기', coords:{latitude: 37.566609, longitude: 126.978475} }, 
  { id:1, title:'천조국수', coords:{latitude: 37.564100, longitude: 126.978722} }, 
  { id:1, title:'대명파스타', coords:{latitude: 37.563296, longitude: 126.976931} }, 
  { id:1, title:'경식희당', coords:{latitude: 37.562633, longitude: 126.974828} },
]

function App() {
  return (
    <>
      <Map initData={initData}/>
      <HotplaceList initData={initData}/>
    </>
  );
}

export default App;
