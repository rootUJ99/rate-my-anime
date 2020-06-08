import React from "react";
import { useHistory } from 'react-router-dom';
import {Navigator, NavItem} from './styles';
import { FiPlusCircle,  FiUser, FiHome} from "react-icons/fi";
const navlist =[
  {
    name: "Home",
    route: '/',
    icon: <FiHome />
  },
  {
    name: "Home",
    route: '/',
    icon: <FiPlusCircle />
  },
  {
    name: "Profile",
    route: '/profile',
    icon: <FiUser />
  }];
const SidebarNav = () => {
  const history = useHistory();
  return (
      <Navigator>
        {navlist.map(it=> 
          <NavItem onClick={()=>history.push(it.route)} key={it.name}>
            {it.icon}
          </NavItem>
          )}
      </Navigator>
  );
};

export default SidebarNav;