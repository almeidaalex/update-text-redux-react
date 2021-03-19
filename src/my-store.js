import { createStore } from 'redux';

const initialState = {
  name: "Alex",
  age: 37,
  notaFiscal: {
    chaveAcesso: "sleep",
    dataEmissao: "eat",
    id: "repeat"
  },
  habilities: {
    
  }
}

function myReducer(state = initialState, action)
{
  switch(action.type)
  {
    case "first":
     return { ...state,               
              notaFiscal: {
                ...state.notaFiscal,
                chaveAcesso: action.newH
              }
            }
    case "second":
     return { ...state,               
              notaFiscal: {
                ...state.notaFiscal,
                dataEmissao: action.newH
              }
            }       
    default:
      return state;        
  }
}
const store = createStore(myReducer);
export default store;