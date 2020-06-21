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
const TextAtraWrapper = styled.textarea`
  border: none;
  border-bottom: 2px solid #8EC5FC;
  outline:none;
  width: ${(props) => props.width || '15rem'};
  /* height: 2rem; */
  padding: 1rem;
  border-radius: 1rem;
`;

const Input = React.forwardRef(({label,type,children, ...props}, ref) => (
  type === 'textarea' ? 
  <TextAtraWrapper {...props} placeholder={props.name} ref={ref}>
    {children}
  </TextAtraWrapper>
  :
  <InputWrapper {...props} placeholder={props.name} ref={ref}/>
));

export default Input;