import React, { useEffect, useState } from "react";
import {getUserDetails} from '../serviceCalls';
const UserInfo = (props) => {
  const [userInfo, setUserInfo] = useState({})
  useEffect(() => {
    (async ()=> {
      const userInfo = await getUserDetails(props.userInfo.id)
      setUserInfo(userInfo.data);
    })()
  }, [])
  return (
    <>
      <pre>
        {JSON.stringify(userInfo, null, 4)}
      </pre>
    </>
  )
}

export default UserInfo;