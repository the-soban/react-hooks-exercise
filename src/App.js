import './App.css';
import UseState from './UseState';
import UseState2 from './UseState2';
import UseReducer from './UseReducer';
import UseEffect from './UseEffect';
import UseRef from './UseRef';
import UseLayoutEffect from './UseLayoutEffect';
import UseImperativeHandle from './UseImperativeHandle';
import UseContext from './UseContext';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <UseState />
      <br />
      <UseState2 />
      <br />
      <UseReducer />
      <br />
      <UseEffect />
      <br />
      <UseRef />
      <br />
      <UseLayoutEffect />
      <br />
      <UseImperativeHandle />
      <br />
      <UseContext />
    </div>
  );
}

export default App;
