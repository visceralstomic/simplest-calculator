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
      <nav>
        <h1 class="site-title">Calculator</h1>
      </nav>

      <Calculator />
    </div>
  );
}

export default App;
