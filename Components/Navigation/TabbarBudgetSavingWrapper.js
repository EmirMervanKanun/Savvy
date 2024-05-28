import React from 'react';
import Tabbar from './Tabbar';
import Budget from '../../Screens/Navigation/Budget';
import Saving from '../../Screens/Navigation/Saving';

const propsTabbarBudgetSavingWrapper = { 
  tab1: { 
    title: "Budget",
    component: Budget,
  }, 
  tab2: { 
    title: "Sparziele",
    component: Saving, 
  } 
};

function BudgetSavingWrapper() {
  return <Tabbar {...propsTabbarBudgetSavingWrapper} />;
}

export default BudgetSavingWrapper;
