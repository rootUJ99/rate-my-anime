import React from 'react';
import { useForm } from 'react-hook-form';
import { TextInput } from 'grommet';
import styled from 'styled-components';
import Button from '../../../components/Button';
import { getToken } from '../serviceCalls';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto; 
  grid-gap: 1rem;
  margin: 1rem;
  /* width: 60%; */
  justify-content: center;
`;

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data =>{
    const tokenData = await getToken(data);
    console.log(tokenData.data.token);
    localStorage.setItem('token', tokenData.data.token);
    };
  console.log(errors)
  return(
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <TextInput type="text" placeholder="userName" name="userName" ref={register({required: true})} />
        <TextInput type="password" placeholder="password" name="password" ref={register({required: true})} />
        <Button type="submit">Login</Button>
      </Wrapper>
    </form>
    </>
  )
}

export default Login;