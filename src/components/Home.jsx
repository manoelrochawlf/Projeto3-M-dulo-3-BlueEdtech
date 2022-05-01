import './Home.css';
import RolexList from 'RolexList';

function Home() {
  return (
    <div className="Home">
      <header>
        <nav className="logo-rolex">
            <img src="assets/images/rolex.png" alt="Logo Rolex"/>
        </nav>
            <div className="carrinho">
              <img
                src="assets/icons/carrinho.png"
                width="40px"
                alt="Carrinho de compras"
                />
            </div>  
    </header>        
    
      <div className="Home__container">
        <RolexList />
      </div>
    </div>
    
  );
}
  
  export default Home;