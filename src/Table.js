function Table({ arr }) {

    if (!arr || !arr.content || !Array.isArray(arr.content)) {
      console.error("O argumento 'arr' não é um JSON válido.");
      return null;
    }
  
    const dataArr = arr.content;
  
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Data</th>
            <th>Valor (R$)</th>
            <th>Tipo</th>
            <th>Nome do operador transacionado</th>
            <th>Nome do responsável</th>
            <th>Selecionar</th>
          </tr>
        </thead>
        <tbody>
          {dataArr.map((obj) => (
            <tr key={obj.id}>
              <td>{obj.id}</td>
              <td>{obj.dataTransferencia}</td>
              <td>{obj.valor}</td>
              <td>{obj.tipo}</td>
              <td>{obj.nomeOperadorTransacao || "N/A"}</td>
              <td>{obj.conta.nomeResponsavel}</td>
              <td><button className="btn btn-success">Selecionar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}
  
export default Table;