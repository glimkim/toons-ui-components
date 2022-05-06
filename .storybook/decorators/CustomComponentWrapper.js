import React from 'react';
import { GlobalStyles } from '../../src/styles/globalStyle.tsx';

function CustomComponentWrapper(storyFn) {
  return (
    <>
      <GlobalStyles />
      {storyFn()}
    </>
  );
}

export default CustomComponentWrapper;
