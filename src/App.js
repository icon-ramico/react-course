import OurText from './components/OurText';
import OurList from './components/OurList';
import bankAccounts from './data/accounts'
function App() {
  const name = 'Rami';
  // we use DHTML properties instead
  return (
    <div className="App">
      <h1 className="header"> Hello {name} </h1>
      {/* <OurText name='Rami' />
      <hr />
      <OurText name='Rami'></OurText> */}
      <OurList accounts={bankAccounts.filter(account =>  'Male' === account.gender )} gender='Male' />
      <OurList accounts={bankAccounts.filter(account =>  'Female' === account.gender )} gender='Female' />
    </div>
  );
}

export default App;
