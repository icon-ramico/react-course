// import OurText from './components/OurText';
import { useEffect, useState } from 'react';
import OurList from './components/OurList';
import bankAccounts from './data/accounts';
function App() {
  const [name, setName] = useState('Rami');
  // const [bAccounts, setbAccounts] = useState(bankAccounts);
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  // we use DHTML properties instead
  // const deleteHandler = id => {
  //   const newBankAccounts = bankAccounts.filter(account => account.id !== id);
  //   setbAccounts(newBankAccounts);
  // };
  useEffect(() => {
    // not async
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json()) // {name:'ali'} in json {"name":"ali"}
      .then(data => {
        setComments(data);
        setLoading(false);
      })
      .catch(e => console.log(e.message));
    return () => {}; // clean up
  }, [name]);

  return (
    <div className='App'>
      <h1 className='header'> Hello {name} </h1>
      {/* <OurText name='Rami' />
      <hr />
      <OurText name='Rami'></OurText> */}
      {loading && <div>Loading...</div>}
      {comments && (
        <OurList // '' false null 0 undefined
          accounts={comments}
          title='Comments'
        />
      )}
      <button onClick={() => setName('ahmad')}>change name</button>
    </div>
  );
}

export default App;
