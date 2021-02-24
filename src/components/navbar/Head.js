import React from 'react';
import './Donut.css'
import * as AiIcons from 'react-icons/ai';

// {/* <AiIcons.AiOutlineGlobal /> */}
export default function Head() {
    return (
        <div className="grid">
            <div className="col">
           
              <div className='navbar1'>
         
          
          <div  class="nav1 flex-row">
              <div class="pheading"><h2>Diagnostic Tools</h2></div>
         </div>
        
          
            <div className="reverse1">
             
                {/* <span >Logged in as general user</span> */}
                <span class="pin">  <AiIcons.AiOutlinePushpin /></span>
               
               
              </div>
        </div>
           </div>
        </div>
    )
}
