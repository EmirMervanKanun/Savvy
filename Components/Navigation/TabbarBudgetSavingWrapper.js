import React from 'react';
import Tabbar from './Tabbar';
import Budget from '../../Screens/BudgetSavings/Budget';
import Saving from '../../Screens/BudgetSavings/Saving';
import AddBudget from '../../Screens/BudgetSavings/AddBudget';
import AddSaving from '../../Screens/BudgetSavings/AddSaving';

const propsTabbarBudgetSavingWrapper = { 
  tab1: { 
    title: "Budget",
    component: AddBudget,
  }, 
  tab2: { 
    title: "Sparziele",
    component: AddSaving, 
  } 
};

function BudgetSavingWrapper() {
  return <Tabbar {...propsTabbarBudgetSavingWrapper} />;
}

export default BudgetSavingWrapper;
