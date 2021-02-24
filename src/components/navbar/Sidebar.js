import React, { useState } from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import Home from './Home';
function Sidebar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
          
          </Link>
          
          <div  className="nav1 flex-row">
              <div className="p-2 heading"><h2>Diagnostic Tools</h2></div>
         </div>
        
          
            <div className="reverse">
             
                {/* <span >Logged in as general user</span> */}
                <span className="p-2">  <AiIcons.AiOutlineBars  /></span>
                <span className="p-2">  <AiIcons.AiOutlineDownload  /></span>
                 <span className="p-2">  <AiIcons.AiOutlinePrinter /></span>
                 <span className="p-2">  <IoIcons.IoMdHelpCircle /></span>
                <span className="p-2">  <RiIcons.RiShareCircleFill  /></span>
               
              </div>
        </div>
       
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul  className='nav-menu-items' >
            <li></li> <br/>
            <br/> 
            {SidebarData.map((item, index) => {
              return (
                <li  key={index} className={item.cName}>
                  
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                  
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <Home/>
    </>
  );
}

export default Sidebar;