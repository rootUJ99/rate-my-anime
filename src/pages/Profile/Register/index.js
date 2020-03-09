import React from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "grommet";
import styled from "styled-components";
import Button from "../../../components/Button";
import { createUser } from "../serviceCalls";
import {CenterWrapper} from '../../../StyledComponents'

const Wrapper = styled(CenterWrapper)`
  margin: 1rem;
`;

const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async data => {
    const tokenData = await createUser(data);
    console.log(tokenData.data);
  };
  console.log(errors);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <TextInput
            type='email'
            placeholder='email'
            name='email'
            ref={register({ required: true })}
          />
          <TextInput
            type='text'
            placeholder='userName'
            name='userName'
            ref={register({ required: true })}
          />
          <TextInput
            type='password'
            placeholder='password'
            name='password'
            ref={register({ required: true })}
          />
          <TextInput
            type='text'
            placeholder='mobileNumber'
            name='mobileNumber'
            ref={register({ required: true })}
          />
          <input
            type='date'
            placeholder='dob'
            name='dob'
            ref={register({ required: true })}
          />
          <Button type='submit'>Register</Button>
        </Wrapper>
      </form>
    </>
  );
};

export default Register;
