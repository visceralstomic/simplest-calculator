import logo from './logo.svg';
import {Helmet } from 'react-helmet';
import { Calculator } from './components/calculator'
import './App.css';

const TITLE = 'Calculator'

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
