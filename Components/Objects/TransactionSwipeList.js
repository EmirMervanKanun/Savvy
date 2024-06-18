import React, { useState } from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import TransStanOrder from "./TransStanOrder";
import Button from "../Buttons/Button";

const TransactionSwipeList = ({ transactions }) => {
    const [listData, setListData] = useState(
        transactions.map((TransactionItem, index) => ({
            key: `${index}`,
            title: TransactionItem.title,
            details: TransactionItem.details,
        }))
    );

    const VisibleItem = props => {
        const { data } = props;
        return (
            <TouchableHighlight>
                <TransStanOrder props={data.item} />
            </TouchableHighlight>
        );
    };

    const renderItem = (data) => {
        return (
            <View style={styles.itemContainer}>
                <VisibleItem data={data} />
            </View>
        );
    };

    const renderHiddenItem = () => {
        return (
            <View style={styles.rowBack}>
                <View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
                    <Button
                        props={{ 
                            color: "blue", 
                            img: require("../../Icons/Button/edit.png"),
                            onPress: () => console.log("Edit button clicked")
                        }}
                    />
                </View>

                <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
                    <Button
                        props={{ 
                            color: "red", 
                            img: require("../../Icons/Button/delete.png"), 
                            onPress: () => console.log("Delete button clicked")
                        }}
                    />
                </View>
            </View>
        );
    };

    return (
        <SwipeListView
            contentContainerStyle={styles.container}
            data={listData}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-100}
            disableRightSwipe
        />
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
    },
    itemContainer: {
        marginBottom: 24,
        backgroundColor: "white",
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    backRightBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 8.5,
    },
    backRightBtnLeft: {
        right: 50,
    },
    backRightBtnRight: {
        right: 0,
    },
});

export default TransactionSwipeList;
