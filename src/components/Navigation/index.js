import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {  Box, Button, Nav, Text } from "grommet"
import { Home, User } from "grommet-icons";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* padding: 0.7rem; */
`;
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
    // console.log('buttonProps', buttonPro/ps);
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
  // const history = useHistory();
  const [active, setActive] = useState();
  return (
    // <Grommet>
      <Wrapper>
        <Nav background="#89b8c2" round="large">
          {navlist.map(nav => (
            <SidebarButton
              key={nav.label}
              label={nav.value}
              active={nav.label === active}
              onClick={() => {
                // history.push(nav.route);
                setActive(nav.label)
              }}
            />
          ))}
        </Nav>
      </Wrapper>
    // </Grommet>
  );
};

export default SidebarNav;