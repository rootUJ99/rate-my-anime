import React from 'react';
import {Button, Box} from 'grommet';

const ThemedButton = (props) => {
  return (
    // <Box round="full" overflow="hidden" background="#89b8c2">
    <Button
      type={props.type}
      icon={props.icon}
      label={props.label || props.children || ''}
      onClick={props.onClick}
      style={{background: '#89b8c2', borderRadius:' 2rem', border: 'none'}}
  />
  // </Box>
  );
};

export default ThemedButton;