import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

import BudgetSwipe from "../../Components/Objects/BudgetSwipe";
import Budgets from "./Budgets";
import { render } from "react-native-web";
import { TouchableHighlight } from "react-native-gesture-handler";

const BudgetSwipeList = () => {
    const [listData, setListData] = useState(
        Budgets.map((BudgetsItem, index) => ({
            key: `${index}`,
            title: BudgetsItem.title,
            details: BudgetsItem.details,
        }))
    );

    const VisibleItem = props => {
        const { data } = props;
        return (
            <TouchableHighlight>
                <BudgetSwipe props={data} />
            </TouchableHighlight>
        )
    }

    const renderItem = (data, rowMap) => {
        return(
            <VisibleItem data={data} rowMap={rowMap} />
        )
    };

    const renderHiddenItem = () => {

    };

    return (
        <SwipeListView>
            data={listData}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}

        </SwipeListView>
    )
}

export default BudgetSwipeList;

const styles = StyleSheet.create({

});