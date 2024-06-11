import React from 'react';
import Tabbar from './Tabbar';
import Budget from '../../Screens/BudgetSavings/Budget';
import Saving from '../../Screens/BudgetSavings/Saving';

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
