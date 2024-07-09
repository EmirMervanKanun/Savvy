import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';
import PlaceholderText from '../TextComponents/PlaceholderText';
import COLORS from '../Colors';

const CategorySwipe = ({ props }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={props.details.img}
                testID="category-image" // Set the testID for the image component
            />
            <Text style={{color: COLORS.schriftDark}}>
                <PlaceholderText>{props.title}</PlaceholderText>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 292,
        height: 48,
        paddingHorizontal: 16,
        paddingVertical: 8,
        gap: 8,
    },
    image: {
        resizeMode: 'stretch',
        width: 32,
        height: 32,
    },
});

export default CategorySwipe;
