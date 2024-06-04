import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import COLORS from '../Farben';
import Header from '../TextComponents/Header';
import PlaceholderText from '../TextComponents/PlaceholderText';

export default OnboardingItem = ({item}) => {

    const {width} = useWindowDimensions();

    return (
        <View style = {[styles.container, {width}]}>
            <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]}/>
        
            <View style = {{flex: 0.2}}>
                <Header style={styles.Header}>{item.title}</Header>
                <PlaceholderText style={styles.PlaceholderText}>{item.description}</PlaceholderText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 46,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        flex: 0.6,
        justifyContent: 'center',
    },

    Header: {
        color: 'color: COLORS.schriftDark,',
    },

    PlaceholderText: {
        color: 'color: COLORS.schriftDark,',
    },
});