import React from "react";
import * as d3 from "d3";
import './Donut.css'

import { useD3 } from "./hooks/useD3";

function AreaChart({ data, option, tname }) {
  // console.log(data)
  console.log(data[option]);
  console.log("area Data ==>"+JSON.stringify(data));  
  console.log("tname Data ==>"+tname);

  // const [areaData, setAreaData] = useState(data);

  // useEffect(() => {
  //   setAreaData(data);
  // }, [data]);


  // parse the date / time
  const parseTime = d3.timeParse("%b");

  const ref = useD3((svg) => {
    // it clears everything and puts data again
     svg.selectAll("*").remove();
    const margin = { top: 20, right: 20, bottom: 30, left: 50 },
      width = 575 - margin.left - margin.right,
      height = 350 - margin.top - margin.bottom;

    data[option].forEach(function (d) {
      // d.date = parseTime(d.date);
      // setting it to zero 
       if (d.vsly === 0) {
          d.date = parseTime(d.date);
          d.vsly = 1;
        }
    });

    const x = d3
      .scaleTime()
      .domain(
        d3.extent(data[option], function (d) {
          return d.date;
        })
      )
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data[option], function (d) {
          return d.score;
        }),
      ])
      .range([height, 0]);
      // passing date to the x and y axis
    const area = d3
      .area()
      .x(function (d) {
        return x(d.date);
      })
      .y0(height)
      .y1(function (d) {
        return y(d.score);
      });

    
      // adding color and styling for the graph using .attr following "",
    svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
   
    .style("fill", "rgb(136, 208, 187)")
  .attr("stroke", "black")
  .attr("stroke-linejoin", "round")
  .attr("stroke-linecap", "round")
  .attr("stroke-width", "strokeWidth")
      .attr("class", "graphset")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    // svg.selectAll("path").remove();
    svg.append("path").datum(data[option]).attr("class", "area").attr("d", area);
    // svg.selectAll("g").remove();
    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    svg.append("g").attr("class", "y axis").call(d3.axisLeft(y));
  }, [data[option]]);

  return (
    <>
    <div className="row" style={{ marginTop:"-22rem"}}>
    <div className="column2" 
    style={{color:"green", fontFamily:"monospace", fontSize:"50px", marginTop:"5rem", marginLeft:"1rem"}} >
       {tname}</div>
   
    <div className="column" style={{marginTop:"-30%" }}>      
      <svg ref={ref} 
      style={{
        height: 500,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
      ></svg>
        {data[0]?.name}    
      </div>
      </div>
      {/* {option} */}
    </>
  );
}
export default AreaChart;