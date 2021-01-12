import './App.css';
import Perfil from './images/perfil.jpeg'

function App() {
  return (
    <div className="App">
      <div style={{ flex: 1,  }}>
        <h1 className='colorGradient'>
          Felipe Bock Magagnin
        </h1>

        <img src={Perfil} alt='perfil' className='profilePicture' />
        <p>Desenvolvedor Full Stack</p>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
  justifyContent: 'center' }}>
        <button className='btnLarge'>Sobre</button>
        <button className='btnLarge'>Trabalhos</button>
        <button className='btnLarge'>Contato</button>

      </div>
    </div>
  );
}

export default App;
