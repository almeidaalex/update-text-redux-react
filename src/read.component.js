import React, {useState} from 'react';
import { connect } from 'react-redux';

const readComponent = ({notaFiscal}) =>  {
   
   return(
     <p>
        <div>
          <span>Chave Accesso</span>
          <p>{notaFiscal.chaveAcesso}</p>
        </div>
        <div>
          <span>Data Emissao</span>
          <p>{notaFiscal.dataEmissao}</p>
        </div>
     </p>
   )
}

const mapStateToProps = state => {
  const { ...notaFiscal } = state;  
  return notaFiscal; 
}

export default connect(mapStateToProps)(readComponent);