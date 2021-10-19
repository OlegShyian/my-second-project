import React, { useState } from 'react';
import MyForm from './Form';
import './styles/style.css'
import Wishes from './Wishes';

function App() {
  const [wishes, setWishes] = useState([]);

  return (
    <div className="App">
      <MyForm
        values={[setWishes, wishes]}
      >Enter your wishes</MyForm>
      <Wishes
        wishes={wishes}
      />
    </div>
  );
}

export default App;
