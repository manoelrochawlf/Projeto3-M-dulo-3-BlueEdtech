import "./RolexListItem.css";

function RolexListItem( { rolex, quantidadeSelecionada, index, onRemove, onAdd, clickItem } ) {

	
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="btn_delete" onClick={(e) => {e.stopPropagation(); onRemove(index)}}>
        remover
      </button>
    );

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="relogio__badge"> {quantidadeSelecionada} </span>
    );

  return (
    <div className="card" key={`card-${index}`} onClick={() => clickItem(rolex.id)}> 
      {badgeCounter(quantidadeSelecionada, index)}

      <img className="img" src={rolex.img} alt="Datejust Rolex" />

      <div className="textimg">
        <p className="descricao">{rolex.name}</p>
        <p className="descricao">{rolex.description}</p>
      </div>
      <section className="btn-container">
        <button className="btn-adicionar" onClick={(e) => { e.stopPropagation(); onAdd(index); }}>
          Adicionar
        </button>
        {removeButton(quantidadeSelecionada, index)}
      </section>
    </div>
  );
}

export default RolexListItem;
