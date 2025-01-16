import { useState } from 'react';
import './App.css';
import SimpleTransformTransition from './simple-transform-transition/SimpleTransformTransition';
import StackedComponent from './stacked-component/StackedComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <StackedComponent />
      <SimpleTransformTransition />
    </>
  )
}

export default App
