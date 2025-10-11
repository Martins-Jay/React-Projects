import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [curStep, setCurStep] = useState(1);
  const [curCount, setCurCount] = useState(0);

  const curDate = new Date()

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    borderRadius: '10%',
  };

  function previousStep() {
    if (curStep > 1) {
      setCurStep((curStep) => curStep - 1);
    }
  }

  function nextStep() {
    if (curStep) {
      setCurStep((curStep) => curStep + 1);
    }
  }

  function previousCount() {
    setCurCount((curCount) => curCount - 1);
  }

  function nextCount() {
    setCurCount((curCount) => {
      return curCount + curStep;
    });
  }

  function addDays(curCount) {
    const newDate = new Date(curDate); // create copy so we dont mutate the object
    newDate.setDate(curDate.getDate() + curCount);
    return newDate.toDateString();
  }

  return (
    <>
      <div className="step-wrapper">
        <button className="" style={buttonStyle} onClick={previousStep}>
          -
        </button>
        <span style={{ fontWeight: 'bold' }}>Step</span>: {curStep}
        <button className="" style={buttonStyle} onClick={nextStep}>
          +
        </button>
      </div>

      <div className="count-wrapper">
        <button className="" style={buttonStyle} onClick={previousCount}>
          -
        </button>
        <span style={{ fontWeight: 'bold' }}>Count</span>: {curCount}
        <button className="" style={buttonStyle} onClick={nextCount}>
          +
        </button>
      </div>

      <div className="date-wrapper">
        <p className="flex">
          {curCount === 0
            ? `Today is ${curDate.toDateString()}`
            : curCount > 0
            ? `${curCount} days from today is ${addDays(curCount)}`
            : curCount < 0
            ? `${curCount * -1} days ago was ${addDays(curCount)}`
            : ''}
        </p>
      </div>
    </>
  );
}

export default App;
