import React, {useState, useContext} from 'react';
import Button from '../../components/Button';
import { getToken } from './serviceCalls';
import RootContext from '../../rootContext';
import Register from './Register';
import Login from './Login';
import UserInfo from './UserInfo';
import styled from 'styled-components';
const FlexWrapper = styled.span`
  display: flex;
  justify-content: center;
`;
const CenterContainer = styled.div`
  display: grid;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  grid-gap: 1rem;
`;
const Profile = () => {
  const [{userInfo}] = useContext(RootContext);
  const [login, setLogin] = useState(true);

  const showLogin = () => {
    switch(login) {
      case true:
        return (<CenterContainer>
        <Login/>
        <br/>
        <FlexWrapper>
          <div>Don't have account then &nbsp;</div>
          <Button onClick={()=> setLogin(false)}>Register</Button> 
        </FlexWrapper> 
        </CenterContainer>);
      case false:
        return(<CenterContainer>
        <Register/>
        <br/>
        <FlexWrapper>
          <div>Already have an account then &nbsp;</div> 
          <Button onClick={()=> setLogin(true)}>Login</Button>
        </FlexWrapper>
        </CenterContainer>);
    }
  };
  const showProfile = () => {
    switch(!!userInfo) {
      case true: 
        return <UserInfo userInfo={userInfo}/>
      case false: 
        return showLogin()
    }
  };
  return(
    <>
    {showProfile()}
    </>
  )
}

export default Profile;