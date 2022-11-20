import React from 'react';
import './App.css';
import { GrammarlyEditor } from './components/spell-check-component';


const App = () => {
  // const dispatch = useDispatch();
  // const counterState = useSelector((state) => state.count);
  // const { value } = counterState;

  // const incCounter = () => {
  //   let newValue = value + 1;
  //   dispatch(updateValue(newValue));
  // }

  // const decCounter = () => {
  //   let newValue = value - 1;
  //   dispatch(updateValue(newValue));
  // }

  return (
    <div className="App">
      <GrammarlyEditor />
    </div>
  );

}

export default App;
