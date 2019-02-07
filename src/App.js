import React from 'react';
import useWindowWidth from './hooks/useWindowWidth';

export default () => {
  const windowWidth = useWindowWidth();
  return (
    <div>
      <h4>Window size: {windowWidth}px</h4>
      {windowWidth < 768 ? (
        <div>Mobile resolution</div>
      ) : (
        <div>Desktop resolution</div>
      )}
    </div>
  );
};
