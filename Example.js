import { useState, useEffect } from 'react';

const Example = () => {
  const [checked, setChecked] = useState(false);

  // useEffect(()=> {
  //   if(checked) {
  //     window.alert('checked!')
  //   }
  // }, [checked]);

  useEffect(() => {
    checked && window.alert('checked!');
  }, [checked])

  return (
    <>
      <h3>아래와 같이 만들어라</h3>
      <p>연습문제</p>
      <label>
        <input type={'checkbox'} 
        value={checked} 
        onClick={() => setChecked((checked) => 
        !checked)} 
        />
        click me
      </label>
    </>
  );
};

export default Example;
