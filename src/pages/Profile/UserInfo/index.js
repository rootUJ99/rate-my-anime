import React, { useEffect, useState } from "react";
import Button from '../../../components/Button';
import Card from "../../../components/Card";
import Register from "../Register";
import {getUserDetails} from '../serviceCalls';
import { CenterWrapper } from '../../../StyledComponents';

const UserInfo = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const [userModal, setUserModal] = useState(false);
  useEffect(() => {
    (async ()=> {
      const userInfo = await getUserDetails(props.userInfo.id)
      setUserInfo(userInfo.data);
    })()
  }, []);

  const handleEditProfile = () => {
    console.log('edit');
    setUserModal(true);
  }
  return (
    <>
      <Card>
          <h3>Profile Details</h3>
          <CenterWrapper>
            <p>User Name ---> <b>{userInfo.userName}</b> </p>
            <p>Date of Birth ---> <b>{userInfo.dob}</b> </p>
            <p>Mobile No. ---> <b>{userInfo.mobileNumber}</b> </p>
            <p>Email ---> <b>{userInfo.email}</b> </p>
            <Button name="editProfile" onClick={handleEditProfile}>Edit</Button>
          </CenterWrapper>
        </Card>
      {/* <Modal open={userModal} onClose={()=> setUserModal(false)}>
        <Register userInfo={userInfo} updateUser/>
      </Modal> */}
    </>
  )
}

export default UserInfo;