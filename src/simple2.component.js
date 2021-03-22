import { useSelector, shallowEqual, useDispatch } from "react-redux-7";
import React from 'react';


const simpleComponent2 = () => {
  
  const selector = useSelector(state => state, shallowEqual);
  const dispatch = useDispatch();

  console.log(selector);

  
  return  <div>
            <input type="button" value="Dispatch" onClick={() => dispatch({type:"first", newH: "React-Redux 7"})}></input>
            Simples 2 - {selector.name}
        </div> ;

};

export default simpleComponent2;


