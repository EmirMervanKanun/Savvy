import React, { useState } from "react";
import { View, StyleSheet, TouchableHighlight, ScrollView } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import TransStanOrder from "./TransStanOrder";
import Button from "../Buttons/Button";
import { useNavigation } from '@react-navigation/native';

const TransactionSwipeList = ({ transactions, height }) => {

    const navigation = useNavigation();

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
                            onPress: () => navigation.navigate('EditTransaction')
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
        <View style={{height}}>
            <SwipeListView
                contentContainerStyle={styles.listContainer}
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-100}
                disableRightSwipe
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        flexGrow: 1,
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
