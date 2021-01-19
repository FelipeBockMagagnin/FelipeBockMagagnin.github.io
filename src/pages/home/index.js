import './styles.css';
import Perfil from '../../images/perfil.jpeg'
import { Link } from 'react-router-dom'; 

export default function Home() {
  return (
    <div className='flexDivCenter'>
      <div style={{ flex: 1 }}>
        <h1 className='colorGradient'>
          Felipe Bock Magagnin
        </h1>

        <img src={Perfil} alt='perfil' className='profilePicture' />
        <p>Desenvolvedor Full Stack</p>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
  justifyContent: 'center' }}>
        <Link className='btnLarge withoutTextDecoration' to='/about'><span>Sobre</span></Link>
        <Link className='btnLarge withoutTextDecoration' to='/projects'><span>Trabalhos</span></Link>
        <Link className='btnLarge withoutTextDecoration' to='/contact'><span>Contato</span></Link>

      </div>
    </div>
  );
}