import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../components/Input';
import styled from 'styled-components';
import Button from '../../../components/Button';
import { getToken } from '../serviceCalls';
import { useHistory} from 'react-router-dom';
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto; 
  grid-gap: 1rem;
  margin: 1rem;
  /* width: 60%; */
  justify-content: center;
`;

const Login = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data =>{
    const tokenData = await getToken(data);
    console.log(tokenData.data.token);
    localStorage.setItem('token', tokenData.data.token);
    history.push('/')
    };
  console.log(errors)
  return(
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <Input type="text" placeholder="userName" name="userName" ref={register({required: true})} />
        <Input type="password" placeholder="password" name="password" ref={register({required: true})} />
        <Button type="submit">Login</Button>
      </Wrapper>
    </form>
    </>
  )
}

export default Login;