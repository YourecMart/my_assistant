import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Button
        color="primary"
        href="#"
        tag="a"
      >Тестовая кнопка реактстрапа</Button>
    </div>
  );
}

export default App;
