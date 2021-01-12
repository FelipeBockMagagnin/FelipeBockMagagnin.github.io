import './App.css';
import Perfil from './images/perfil.jpeg'

function App() {
  return (
    <div className="App">
      <div style={{ flex: 1 }}>
      <p>Felipe Bock Magagnin</p>

        <img src={Perfil} alt='perfil' className='profilePicture' />
        <p>Desenvolvedor Full Stack</p>
      </div>

      <div style={{ flex: 1 }}>
        <button className='btnLarge'>Sobre</button>
        <button className='btnLarge'>Trabalhos</button>
        <button className='btnLarge'>Contato</button>
        
      </div>
    </div>
  );
}

export default App;
