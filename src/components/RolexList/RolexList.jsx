import 'components/RolexList/RolexList'
import './RolexList.css'
import RolexListItem from 'components/RolexListItem/RolexListItem';
import { rolex } from 'mocks/rolex';
import React, { useState } from "react";
import PaletaDetalhesModal from 'components/RolexDetalhesModal/RolexDetalhesModal';

function RolexList() {

   const [rolexSelecionado, setRolexSelecionado] = useState({});

   const [rolexModal, setRolexModal] = useState(false);

  const adicionarItem = (rolexIndex) => {
          const rolex = { [rolexIndex]: Number(rolexSelecionado[rolexIndex] || 0) +1 }
          setRolexSelecionado({ ...rolexSelecionado, ...rolex});
  }
  const removerItem = (rolexIndex) => {
    const rolex = { [rolexIndex]: Number(rolexSelecionado[rolexIndex] || 0) -1 }
    setRolexSelecionado({...rolexSelecionado, ...rolex});
}

    return <div className="RolexList">
  <section className="cards" id="all-rlx">

{rolex.map((rolex, index) =>
  <RolexListItem 
    key={`card-${index}`} 
    rolex={rolex}
    quantidadeSelecionada = {rolexSelecionado[index]}
    index = {index}
    onRemove = {index => removerItem(index)}
    onAdd = {index => adicionarItem(index)}
    clickItem = {(rolexId) => setRolexModal(rolex)}
  />
)}
</section>`
{rolexModal && <PaletaDetalhesModal rolex={rolexModal} closeModal={() => setRolexModal(false)} />}
    </div>;
  }
  
  export default RolexList;