import { connect } from "react-redux";
import React from 'react';

const simpleComponent = () => {
  return <div>Simples</div>;
};

const map = (store) => {
  console.log('Oi eu sou simples')
  return store;
}

export default connect(map)(simpleComponent);
