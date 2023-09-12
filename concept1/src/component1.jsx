
import React, { useContext } from 'react';
import { AppContext } from './AppContext';

function Component1() {
  const { data } = useContext(AppContext);

  return (
    <div style={{ backgroundColor: 'red', width: '20px' }}>
      <h1>{data}</h1>
    </div>
  );
}

export default Component1;
