import React, { useState } from 'react';

function Tip({ dispatch, data }) {
  function handleClick(e) {
    dispatch({ type: 'tip', value: Number(e.target.value) });
  }
  return (
    <section>
      <h2 className='text-sm mb-4'>Select Tip %</h2>
      <div className='grid grid-cols-2 gap-2 md:grid-cols-3'>
        <TipButton amount={5} handleClick={handleClick} />
        <TipButton amount={10} handleClick={handleClick} />
        <TipButton amount={15} handleClick={handleClick} />
        <TipButton amount={25} handleClick={handleClick} />
        <TipButton amount={50} handleClick={handleClick} />
        <CustomTip dispatch={dispatch} data={data} />
      </div>
    </section>
  );
}

function TipButton({ amount, handleClick }) {
  return (
    <button
      type='button'
      value={amount}
      className='py-2 text-lg bg-green-900 text-white rounded-sm hover:cursor-pointer hover:bg-green-400 hover:text-green-900'
      onClick={handleClick}
    >
      {amount}%
    </button>
  );
}

function CustomTip({ dispatch, data }) {
  const [isvalid, setIsValid] = useState(true);

  function handleChange(e) {
    const text = e.target.value;
    const num = Number(text);
    if (!num) {
      setIsValid(false);
    } else {
      setIsValid(true);
      dispatch({ type: 'tip', value: num });
    }
  }
  return (
    <input
      type='Text'
      onChange={handleChange}
      value={data.tip || ''}
      className={`px-2 bg-grey-50 text-green-900 rounded-sm placeholder:text-center hover:cursor-pointer focus:outline-green-400 text-end ${
        !isvalid && 'focus:outline-orange-500'
      }`}
      placeholder='Custom'
    />
  );
}

export default Tip;
