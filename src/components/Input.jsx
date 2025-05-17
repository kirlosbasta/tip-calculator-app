import { useRef, useState } from 'react';

function Input({ icon, title, id, dispatch, data }) {
  const input = useRef(null);
  const [error, setError] = useState('');

  function handleClick() {
    input.current.focus();
  }

  function handleChange(e) {
    const text = e.target.value;
    const num = Number(text);
    if (text === '') {
      setError('');
      dispatch({ type: id, value: 0 });
    } else if (num === 0) {
      setError("Can't be zero");
    } else if (!num) {
      setError('Must be a number');
    } else {
      setError('');
      dispatch({ type: id, value: num });
    }
  }
  return (
    <div className='my-10 md:my-5'>
      <div className='flex justify-between'>
        <label htmlFor={id} className='text-sm text-grey-400 inline-block mb-2'>
          {title}
        </label>
        <span className='text-orange-500 text-sm'>{error}</span>
      </div>
      <div
        onClick={handleClick}
        className={`bg-grey-50 p-1 ps-4 flex items-center justify-between rounded-sm cursor-pointer focus-within:border-green-400 focus-within:border-2 ${
          error && ' focus-within:border-orange-500'
        }`}
      >
        <img src={icon} alt='' className='' />
        <input
          type='text'
          id={id}
          ref={input}
          value={data[id] || ''}
          onChange={handleChange}
          placeholder='0'
          className='focus:outline-none text-end text-green-900 cursor-pointer'
        />
      </div>
    </div>
  );
}

export default Input;
