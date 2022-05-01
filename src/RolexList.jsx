import './RolexList'
import './RolexList.css'
import { rolex } from "mocks/rolex";
import React, { useState } from "react";

function RolexList() {

   const [rolexSelecionado, setRolexSelecionado] = useState({});

  const adicionarItem = (rolexIndex) => {
          const rolexx = { [rolexIndex]: Number(rolexSelecionado[rolexIndex] || 0) +1 }
          setRolexSelecionado({ ...rolexSelecionado, ...rolexx});
  }
    return <div className="RolexList">
  <section className="cards" id="all-rlx">

{rolex.map((rolex, index) =>
 

<div className="card" key={`card-${index}`}>

<span className="relogio__badge"> {rolexSelecionado[index] || 0} </span>

  <img className="img" src={rolex.img} alt="Datejust Rolex"/>
  
      <div className="textimg">
        <p className="descricao">{rolex.name}</p>
        <p className="descricao">{rolex.description}</p>      
      </div>
      <section className="btn-container"> 
            <button className="btn-adicionar" onClick={() => adicionarItem(index)}>
              Adicionar
             </button>
        </section>        
</div> 
)}

</section>`
    </div>;
  }
  
  export default RolexList;