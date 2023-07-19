import { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import Table from './Table';

function App() {

  // eslint-disable-next-line
  const [btnSave, setBtnSave] = useState(true);
  const [transferencias, setTransferencias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/transferencias")
    .then(response => response.json())
    .then(converted_response => setTransferencias(converted_response));
  }, []);

  return (
    <div>
      <Form button={btnSave} />
      <Table arr={transferencias} />
    </div>
  );
}

export default App;