import React, { useEffect, useState } from "react";
import Button from '../../../components/Button';
import Card from "../../../components/Card";
import Register from "../Register";
import {getUserDetails} from '../serviceCalls';
import { CenterWrapper } from '../../../StyledComponents';
import styled from 'styled-components';
const StyledP = styled.p`
  margin: 0.4rem;
`;
const UserInfo = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    (async ()=> {
      const userInfo = await getUserDetails(props.userInfo.id)
      setUserInfo(userInfo.data);
    })()
  }, []);

  const handleEditProfile = () => {
    console.log('edit');
    setEdit(!edit);
  }
  return (
    <>
      <Card>
          <h3>Profile Details</h3>
          {edit && <Button onClick={handleEditProfile}>Back</Button>}
          {!edit && <CenterWrapper>
          <StyledP>User Name --- <b>{userInfo.userName}</b> </StyledP>
          <StyledP>Date of Birth --- <b>{userInfo.dob}</b> </StyledP>
          <StyledP>Mobile No. --- <b>{userInfo.mobileNumber}</b> </StyledP>
          <StyledP>Email --- <b>{userInfo.email}</b> </StyledP>
            <Button name="editProfile" onClick={handleEditProfile}>Edit</Button>
          </CenterWrapper>}
        {edit && <Register userInfo={userInfo} updateUser/>}
        </Card>
    </>
  )
}

export default UserInfo;