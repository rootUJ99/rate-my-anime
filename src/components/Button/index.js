import React from 'react';
import {Button} from 'grommet';

const ThemedButton = ({icon, label, children, onClick, ...rest}) => {
  return (
    // <Box round="full" overflow="hidden" background="#89b8c2">
    <Button
      icon={icon}
      label={label || children || ''}
      onClick={onClick}
      {...rest}
      style={{
        background: '#89b8c2',
        borderRadius:' 2rem',
        border: 'none',
        maxWidth: '10rem',
      }}
  />
  // </Box>
  );
};

export default ThemedButton;