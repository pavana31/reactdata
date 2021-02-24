import { useD3 } from "./hooks/useD3";
import React from "react";
import * as d3 from "d3";
import './Donut.css';


function DonutChart({ data, onClick }) {

 
  const ref = useD3(
    (svg) => {
      const dataFromState = data;

      const height = 100,
        width = 100,
        margin = 2;

      const radius = Math.min(width, height) / 2 - margin;

      const g = svg
        .select(".plot-area")
        .attr("class","test")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);
        

      const colors = ["#2e8b57", "#D3D3D3", "#D6E9FF", "#EBF4FF"];

      const pie = d3.pie().value((d) => d.score);

      const path = d3.arc().outerRadius(radius).innerRadius(40);


      const pies = g
        .selectAll(".arc")
        .data(pie(dataFromState))
        .enter()
        .append("g")
        .attr("class", "arc");

      pies
        .append("path")
        .attr("d", path)
        .attr("fill", (d, i) => colors[i]);
    },
    [data.length]
  );



  return (
    <>
      <div className="">
       <div className="container" 
        style={{  marginTop:"-195%", marginLeft:"-140%"}}>
        <div className="text-uppercase"
        style={{fontFamily:"inherit", color:"#A52A2A", fontSize:"18px",marginLeft:"5%"}}>
          {data[0]?.name}  </div>
        <div 
        style={{fontFamily:"inherit", color:"#4B0082", fontSize:"25px", marginTop:"0.5rem",marginLeft:"12%"}}>
          {data[0]?.score}%</div>
        
      <div onClick={() => onClick(data[0]?.name)} className="card-body">
          <button className="circle">
          <svg  
            ref={ref}
            style={{
              height: "100",
              width: "100",
            }}
          > 
            <g className="plot-area" />
            
          </svg>
          </button>
          </div>
         
          
          
        </div>
      </div>
     
    </>
  );
}
export default DonutChart;