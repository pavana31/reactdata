import React, { useState } from 'react';
import DonutChart from './DonutChart';
import Data from "./data/data.json";

import Head from './Head';
import Filters from './Filters';

import './Donut.css';
import Buttons from './Buttons'
import AreaChart from "./AreaChart";

const gaugeData = Data["gaugeData"];

// const areaData = Data["areaData"]; 

export default function Home() {
  const itemObj = {};
  // const [areaData, setAreaData] = useState(Data["areaData"]["Quality Score"]);
  const [areaDataName, setAreaDataName] = useState("Quality Score");
  const [areaData, setAreaData] = useState(Data["areaData"]);

  const [tempname,setName] = useState("");
  
  function handleClick(name) { 
      console.log(name);
    // setAreaData([...Data["areaData"][name]])
    
    setAreaDataName(name);
    setName(name);
  
  }
  const donutItems = gaugeData.map((item, index) => {
    const diffScore = 100 - item.score;
    const itemData = [item, { name: "Other", score: diffScore  }];
    itemObj[item.name] = itemData;

    return <DonutChart key={index} data={itemObj[item.name]} option={item.name} onClick={handleClick}/>;
  });
    

  return (
    <div className="maincontent">
      <div >
        <div >
          <h2 className="main-text">PERFORMANCE MANAGEMENT</h2>
           
        </div>
        {/* <DonutChart /> */}
       <Head/>
       <br/>
        <Buttons/>  
        <br/>
        <Filters/>
       
       

      </div>
      <div style={{display:"flex", flexDirection:"column", flex:"1"}}>
      <div className="App">
      {donutItems}
    
      
    </div>
    <br/>
    {/* areachart comes here */}
    <div> <AreaChart data={areaData} option={areaDataName}  tname={tempname} />
    </div>
    
    </div>
    
    </div>
  )
}

