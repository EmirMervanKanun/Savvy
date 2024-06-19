import React, { useState } from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import SavingGoal from "./SavingGoal";
import Button from "../Buttons/Button";
import { useNavigation } from '@react-navigation/native';

const SavingSwipeList = ({ savings }) => {

    const navigation = useNavigation();

    const [listData, setListData] = useState(
        savings.map((SavingItem, index) => ({
            key: `${index}`,
            title: SavingItem.title,
            details: SavingItem.details,
        }))
    );

    const VisibleItem = props => {
        const { data } = props;
        return (
            <TouchableHighlight>
                <SavingGoal props={data.item} />
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
                            onPress: () => navigation.navigate('AddSaving')
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
        marginTop: 24,
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
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 16,
    },
    backRightBtnLeft: {
        right: 50,
    },
    backRightBtnRight: {
        right: 0,
    },
});

export default SavingSwipeList;
