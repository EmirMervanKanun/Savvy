import { StyleSheet, View, Image} from 'react-native';
import ButtonText from '../TextComponents/ButtonText';
import COLORS from '../Farben';


const ButtonBig=({text, img}) => {
    if (img == null){
        return (
            <View style={styles.containerBig}>
                <ButtonText style={styles.buttonText}>{text}</ButtonText>
            </View>
        );
    }
    
    return(
        <View style={styles.containerBig}>
            <Image style={styles.image} source={img} />
            <ButtonText style={styles.buttonText}>{text}</ButtonText>
        </View>
    );
}
export default ButtonBig;

export const ButtonMid=({text, img}) => {
    return(
        <View style={styles.containerMid}>
            <Image style={styles.image} source={img} />
            <ButtonText style={styles.buttonText}>{text}</ButtonText>
        </View>
    );
}

export const ButtonSmall=({text, img, isRed}) => {
    if(isRed == null){
        return(
            <View style={styles.containerSmall}>
             <Image style={styles.image} source={img} />
             <ButtonText style={styles.buttonText}>{text}</ButtonText>
         </View>
        );
    }
    return(
        <View style={styles.containerSmallRed}>
            <Image style={styles.image} source={img} />
            <ButtonText style={styles.buttonText}>{text}</ButtonText>
        </View>
    );
}

export const ButtonIcon=({img, isRed}) => {
    if(isRed == null){
        return(
            <View style={styles.containerIcon}>
                <Image style={styles.image} source={img} />
            </View>
        );
    }
    return(
        <View style={styles.containerIconRed}>
            <Image style={styles.image} source={img} />
        </View>
    );
}


const styles = StyleSheet.create({
    containerBig: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryMid,
        height: 32,
        width: 175,
        borderRadius: 8,
    },
    image: {
        resizeMode: 'stretch',
        width: 24,
        height: 24,
    },
    containerMid: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryMid,
        height: 32,
        width: 136,
        borderRadius: 8,
    },
    containerSmall: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryMid,
        height: 32,
        width: 116,
        borderRadius: 8,
    },
    containerSmallRed: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.redMid,
        height: 32,
        width: 116,
        borderRadius: 8,
    },
    containerIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryMid,
        height: 32,
        width: 32,
        borderRadius: 8,
    },
    containerIconRed: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.redMid,
        height: 32,
        width: 32,
        borderRadius: 8,
    },
    buttonText: {
        color: COLORS.schriftDark,
    },
});