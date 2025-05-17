import React, { useEffect, useState } from 'react';

function Result({ data, dispatch }) {
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTip(tipAmount(data));
    setTotal(totalAmount(data));
  }, [data]);

  function handleRest() {
    console.log('rest is fired');
    dispatch({ type: 'rest' });
  }

  function totalAmount({ tip, people, bill }) {
    const result = (bill + (tip / 100) * bill) / people;
    return result && result !== Infinity ? result.toFixed(2) : '0.00';
  }

  function tipAmount({ tip, people, bill }) {
    const result = ((tip / 100) * bill) / people;
    return result && result !== Infinity ? result.toFixed(2) : '0.00';
  }

  return (
    <section className='bg-green-900 rounded-xl p-5 md:flex-1/2 md:flex-col md:flex md:justify-between'>
      <div>
        <div className='flex justify-between my-4 md:mt-4 md:mb-6'>
          <div>
            <p className='text-white text-lg'>Tip Amount</p>
            <p className='text-sm text-grey-400'>/ person</p>
          </div>
          <p className='text-green-400'>${tip}</p>
        </div>
        <div className='flex justify-between'>
          <div>
            <p className='text-white text-lg'>total</p>
            <p className='text-sm text-grey-400'>/ person</p>
          </div>
          <p className='text-green-400'>${total}</p>
        </div>
      </div>
      <button
        type='button'
        onClick={handleRest}
        className='uppercase text-green-900 bg-green-400 w-full rounded-sm mt-7 py-1 cursor-pointer text-xl hover:brightness-130'
      >
        reset
      </button>
    </section>
  );
}

export default Result;
