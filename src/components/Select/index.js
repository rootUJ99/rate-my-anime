import React, {forwardRef} from 'react';
import styled from 'styled-components';
// import './styles.css';

const SelectWrapper = styled.select`
  border: none;
  border-bottom: 2px solid #8EC5FC;
  outline:none;
  width: 15rem;
  height: 2rem;
  border-radius: 1rem;
`;

const Select = forwardRef(({options, ...props}, ref) => (
  <SelectWrapper {...props}  ref={ref}>
    <option value="" disabled selected>Select your option</option>
  {
    options.map(it => (<option value={it.value} key={it.value}> {it.label}</option>))
  }
  </SelectWrapper>
));

export default Select;