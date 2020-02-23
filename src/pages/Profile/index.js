import React, {useContext} from 'react';
import { useForm } from 'react-hook-form';
import { getToken } from './serviceCalls';
import RootContext from '../../rootContext';
import Register from './Register';
import Login from './Login';
import UserInfo from './UserInfo';

const Profile = () => {
  const [{userInfo}, dispatch] = useContext(RootContext);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data =>{
    const tokenData = await getToken(data);
    console.log(tokenData.data.token);
    localStorage.setItem('token', tokenData.data.token);
    };
  console.log(errors)
  return(
    <>
    {!userInfo ? 
    <>
    <Login/> 
    <Register/>
    </>
    :
    <UserInfo userInfo={userInfo}/>
    }
    </>
  )
}

export default Profile;