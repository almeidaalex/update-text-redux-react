import React, {useState} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {  
  const { ...notaFiscal } = state;  
  return notaFiscal;
}


const example = ({notaFiscal, dispatch}) => {

    const [text1st, setText1] = useState(notaFiscal.chaveAcesso);
    const [text2nd, setText2] = useState(notaFiscal.dataEmissao);
    const [text3rd, setText3] = useState(notaFiscal.third);
    
    return (
      <div>
        <p>Change my hobbies</p>

        <div>
          <label>Chave de Acesso</label>
          <input
            name="first"
            value={text1st}
            onChange={e => setText1(e.target.value)}            
            onBlur={e => dispatch({type: 'first', newH: e.target.value })}
            type="text"
            />             
        </div>

        <div>
          <label>Data Emissão</label>
          <input
            name="second"
            value={text2nd}
            onChange={e => setText2(e.target.value)}
            onBlur={e => dispatch({type: 'second', newH: e.target.value })}
            type="text"
            /> 
         </div> 

        <div>
          <label>Numero</label>
          <input
            name="third"
            value={text3rd}
            onChange={e => setText3(e.target.value)}
            type="text"
            />         
          </div>


        </div>
    );
}

export default connect(mapStateToProps)(example);
