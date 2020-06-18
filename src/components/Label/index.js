import React from 'react';
import styled from 'styled-components';
const LabelWrapper = styled.div`
  background: '#94D2EC';
  color: '#ffffff';
  padding: 0.2rem;
  border-radius: 0.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.2rem;
`;
const Label = props => {
    return (
        <LabelWrapper>
          {props.children}
        </LabelWrapper>
    )
}
export default Label;