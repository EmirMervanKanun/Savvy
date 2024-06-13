import React from 'react';
import Tabbar from './Tabbar';
import TList from '../../Screens/Transactions/TransactionsList';
import TDiagram from '../../Screens/Transactions/TransactionsDiagram';

const propsTabbarTransactionWrapper = { 
  tab1: { 
    title: "Liste",
    component: TList,
  }, 
  tab2: { 
    title: "Diagramm",
    component: TDiagram, 
  } 
};

function TransactionWrapper() {
  return <Tabbar {...propsTabbarTransactionWrapper} />;
}

export default TransactionWrapper;
