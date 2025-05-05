import { useState } from 'react';
import './App.css';
import ShowCount from './components/ShowCount/ShowCount.jsx';

function App() {
  const [contador, setContador] = useState(0);
  const [sumarContador, setSumarContador] = useState(0);
  const [restarContador, setRestarContador] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);

  return (
    <div className='app'>
      <ShowCount label='Contador de Sumar' count={sumarContador} />
      <ShowCount label='Contador de Restar' count={restarContador} />
      <ShowCount label='Sumar vs Restar' count={contador} />
      <ShowCount label='Total de clicks' count={totalClicks} />

      <hr className='divider' />

      <div className='buttons-container'>
        <button
          onClick={() => {
            setContador(contador + 1);
            setSumarContador(sumarContador + 1);
            setTotalClicks(totalClicks + 1);
          }}
          className='sumar'
        >
          Sumar 1 punto
        </button>

        <button
          onClick={() => {
            setContador(contador - 1);
            setRestarContador(restarContador + 1);
            setTotalClicks(totalClicks + 1);
          }}
          className='restar'
        >
          Restar 1 punto
        </button>

        <button
          onClick={() => {
            setContador(0);
            setSumarContador(0);
            setRestarContador(0);
            setTotalClicks(0);
          }}
          className='resetear'
        >
          Resetear puntos
        </button>
      </div>
    </div>
  );
}

export default App;
