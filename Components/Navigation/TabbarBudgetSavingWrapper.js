import React from 'react';
import Tabbar from './Tabbar';
import Budget from '../../Screens/BudgetSavings/Budget';
import Saving from '../../Screens/BudgetSavings/Saving';
import AddBudget from '../../Screens/BudgetSavings/AddBudget';
import AddSaving from '../../Screens/BudgetSavings/AddSaving';

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
