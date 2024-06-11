import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import BudgetSwipe from "../../Components/Objects/BudgetSwipe";
import Budgets from "./Budgets";

const BudgetSwipeList = () => {
    const [listData, setListData] = useState(
        Budgets.map((BudgetItem, index) => ({
            key: `${index}`,
            title: BudgetItem.title,
            details: BudgetItem.details,
        }))
    );

    const VisibleItem = props => {
        const { data } = props;
        return (
            <TouchableHighlight>
                <BudgetSwipe props={data.item} />
            </TouchableHighlight>
        );
    };

    const renderItem = (data, rowMap) => {
        return (
            <View style={styles.itemContainer}>
                <VisibleItem data={data} />
            </View>
        );
    };

    const renderHiddenItem = () => {
        return <View />;
    };

    return (
        <SwipeListView
            data={listData}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-75}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 24,
    },
    // Weitere Styles hier definieren
});

export default BudgetSwipeList;
