import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Carrinho() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>Carrinho</h1>
      <p>Quantidade: {count}</p>
      <Button variant="primary" onClick={increment}>Adicionar</Button>
      <Button variant="danger" onClick={decrement}>Remover</Button>
    </div>
  );
}

export default Carrinho;