import './Navbar.css'

function Navbar() {
    return (
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
    )
}

export default Navbar;