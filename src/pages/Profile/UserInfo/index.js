import React, { useEffect, useState } from "react";
import { Grommet, Main } from "grommet";
import { Edit } from "grommet-icons";
import Button from '../../../components/Button';
import {getUserDetails} from '../serviceCalls';
import { CenterWrapper } from '../../../StyledComponents';
const UserInfo = (props) => {
  const [userInfo, setUserInfo] = useState({})
  useEffect(() => {
    (async ()=> {
      const userInfo = await getUserDetails(props.userInfo.id)
      setUserInfo(userInfo.data);
    })()
  }, []);

  const editProfile = () => {
    console.log('edit');
  }
  return (
    <>
      <Grommet>
        <Main background='#f6f6f6' pad='medium' round='medium'>
          <h3>Profile Details</h3>
          <CenterWrapper>
            <p>User Name ---> <b>{userInfo.userName}</b> </p>
            <p>Date of Birth ---> <b>{userInfo.dob}</b> </p>
            <p>Mobile No. ---> <b>{userInfo.mobileNumber}</b> </p>
            <p>Email ---> <b>{userInfo.email}</b> </p>
            <Button name="editProfile" onClick={editProfile}>Edit <Edit/></Button>
          </CenterWrapper>
        </Main>
      </Grommet>
    </>
  )
}

export default UserInfo;