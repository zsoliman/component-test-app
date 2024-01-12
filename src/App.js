import './App.css';
import Home from './components/Home';

import Navigation from './components/Navigation';
import { useState } from 'react';

function App() {
  const [activeKey, setActiveKey] = useState(null);

  const componentChange = () => {
    return <Home />
  }
  return (
    <div className="App">
      <>
        {/* <Navigation activeKey={activeKey} onSelect={setActiveKey} />
        <hr />
        <Navigation appearance="inverse" activeKey={activeKey} onSelect={setActiveKey} />
        <hr /> */}
        <Navigation appearance="subtle" activeKey={activeKey} onSelect={setActiveKey} />
      </>

      <Home />


    </div>
  );
}

export default App;
