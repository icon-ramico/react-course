import OurText from './components/OurText';
import bankAccounts from './data/accounts'
function App() {
  const name = 'Rami';
  // we use DHTML properties instead
  return (
    <div className="App">
      <h1 className="header"> Hello {name} </h1>
      {/* <OurText />
      <hr />
      <OurText></OurText> */}
    </div>
  );
}

export default App;
