import React from 'react';
import styled from 'styled-components';
const LabelWrapper = styled.div`
  /* background: '#94D2EC'; */
  color: var(--label-light);
  padding: 0.2rem 0.5rem 0.5rem;
  border-radius: 0.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.2rem;
  width: ${props => props.width};
`;
const Label = props => {
    return (
        <LabelWrapper {...props}>
          {props.children}
        </LabelWrapper>
    )
}
export default Label;