import React from 'react';
const DemoOutput = props => {
  console.log('Demo output running');
  return <p>{props.show ? props.children : ''}</p>;
};

export default React.memo(DemoOutput);
