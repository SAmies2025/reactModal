import { useState } from 'react';
import './App.css';
import Modal from './components/Modal.jsx';

function App() {
  const [modalState, setModalState] = useState(true);
  function handleClick() {
    if(modalState === true) {
      setModalState(false);
    } else {
      setModalState(true);
    }
  }

  return (    <main>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, quod!</p>
       <button onClick={handleClick}>Open modal</button>
      <Modal modalState={modalState} handleClick={handleClick} />
    </main>
  );
}

export default App;
