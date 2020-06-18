import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.input`
  border: none;
  border-bottom: 2px solid #8EC5FC;
  outline:none;
  width: ${(props) => props.width || '15rem'};
  height: 2rem;
  padding: 1rem;
  border-radius: 1rem;
`;

const Input = ({label, ...props}) => (
  <InputWrapper {...props} className="inpt" placeholder={props.name}/>
);

export default Input;