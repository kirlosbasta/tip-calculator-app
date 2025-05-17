import { useReducer } from 'react';
import Input from './components/Input';
import Tip from './components/Tip';
import Result from './components/Result';
import logo from './assets/logo.svg';
import person from './assets/icon-person.svg';
import dollar from './assets/icon-dollar.svg';

function App() {
  const [data, dispatch] = useReducer(reducer, { tip: 0, people: 0, bill: 0 });

  function reducer(state, action) {
    if (action.type === 'rest') {
      return { tip: 0, people: 0, bill: 0 };
    }
    return { ...state, [action.type]: action.value };
  }

  return (
    <main className='text-grey-500 md:flex md:justify-center md:items-center md:min-w-full md:min-h-screen'>
      <div className='max-w-4xl'>
        <img src={logo} alt='logo' className='mx-auto my-15 md:mb-10 md:mt-0' />
        <div className='bg-white rounded-t-3xl md:rounded-3xl p-5'>
          <form className='md:flex md:gap-4'>
            <div className='md:flex-1/2'>
              <Input
                title='Bill'
                icon={dollar}
                id='bill'
                dispatch={dispatch}
                data={data}
              />
              <Tip dispatch={dispatch} data={data} />
              <Input
                title='Number of People'
                id='people'
                icon={person}
                dispatch={dispatch}
                data={data}
              />
            </div>
            <Result data={data} dispatch={dispatch} />
          </form>
        </div>
      </div>
    </main>
  );
}

export default App;
