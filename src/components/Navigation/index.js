import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {  Box, Button, Text } from "grommet"
import { Home, User } from "grommet-icons";
import {GridWrapWithColours} from './styles';

const navlist =[
  {
    label: "Home",
    value:  <Home />, 
    route: '/'
  },
  {
    label: "Profile",
    value: <User />,
    route: '/profile'
  }];
const SidebarButton = ({ label, ...rest }) => (
  <Button plain {...rest}>
    {(buttonProps) => {
    return(
      <Box
        background={buttonProps.hover ? "#d7e9ed" : undefined}
        pad={{ horizontal: "medium", vertical: "small" }}
        round="large"
      >
        <Text size="large">{label}</Text>
      </Box>
    )}}
  </Button>
);
const SidebarNav = () => {
  const history = useHistory();
  const [active, setActive] = useState();
  return (
      <GridWrapWithColours>
          {navlist.map(nav => (
            <SidebarButton
              key={nav.label}
              label={nav.value}
              active={nav.label === active}
              onClick={() => {
                history.push(nav.route);
                setActive(nav.label)
              }}
            />
          ))}
      </GridWrapWithColours>
  );
};

export default SidebarNav;