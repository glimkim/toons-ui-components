import React from 'react';
import { GlobalStyles } from '../../src/styles/globalStyle.tsx';

function CustomComponentWrapper(storyFn) {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <GlobalStyles />
      {storyFn()}
    </div>
  );
}

export default CustomComponentWrapper;
