
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: '',
    path: '/',
    icon: <AiIcons.AiOutlinePushpin />,
    cName: 'sideicon'
  },
  {
    title: '',
    path: '/reports',
    icon: <AiIcons.AiOutlineBarChart />,
    cName: 'sideicon'
  },
  {
    title: '',
    path: '/products',
    icon: <AiIcons.AiFillMail />,
    cName: 'sideicon'
  },
  {
    title: '',
    path: '/team',
    icon: <FaIcons.FaShapes />,
    cName: 'sideicon'
  },
  {
    title: '',
    path: '/messages',
    icon: <AiIcons.AiFillFileText />,
    cName: 'sideicon'
  },
  {
    title: '',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'sideicon'
  }
];