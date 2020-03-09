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
`;
const Profile = () => {
  const [{userInfo}] = useContext(RootContext);
  const [login, setLogin] = useState(false);

  const showLogin = () => {
    switch(login) {
      case true:
        return (<>
        <Login/>
        <br/>
        <FlexWrapper>
          <p style={{lineHeight: '1em'}}>Don't have account then &nbsp;</p>
          <Button onClick={()=> setLogin(false)}>Register</Button> 
        </FlexWrapper> 
        </>);
      case false:
        return(<>
        <Register/>
        <br/>
        <FlexWrapper>
          <p style={{lineHeight: '0.5em'}}>Already have an account then &nbsp;</p> 
          <Button onClick={()=> setLogin(true)}>Login</Button>
        </FlexWrapper>
        </>);
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