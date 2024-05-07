import { StyleSheet, View, Image, Pressable} from 'react-native';
import ButtonText from '../TextComponents/ButtonText';
import COLORS from '../Farben';


const ButtonBig=({text, img}) => {
    if (img == null){
        return (
            <Pressable style={styles.containerBig}>
                <ButtonText style={styles.buttonText}>{text}</ButtonText>
            </Pressable>
        );
    }
    
    return(
        <Pressable style={styles.containerBig}>
            <Image style={styles.image} source={img} />
            <ButtonText style={styles.buttonText}>{text}</ButtonText>
        </Pressable>
    );
}
export default ButtonBig;

export const ButtonMid=({text, img}) => {
    return(
        <Pressable style={styles.containerMid}>
            <Image style={styles.image} source={img} />
            <ButtonText style={styles.buttonText}>{text}</ButtonText>
        </Pressable>
    );
}

export const ButtonSmall=({text, img, isRed}) => {
    if(isRed == null){
        return(
            <Pressable style={styles.containerSmall}>
             <Image style={styles.image} source={img} />
             <ButtonText style={styles.buttonText}>{text}</ButtonText>
            </Pressable>
        );
    }
    return(
        <Pressable style={styles.containerSmallRed}>
            <Image style={styles.image} source={img} />
            <ButtonText style={styles.buttonText}>{text}</ButtonText>
        </Pressable>
    );
}

export const ButtonIcon=({img, isRed}) => {
    if(isRed == null){
        return(
            <Pressable style={styles.containerIcon}>
                <Image style={styles.image} source={img}/>
            </Pressable>
        );
    }
    return(
        <Pressable style={styles.containerIconRed}>
            <Image style={styles.image} source={img} />
        </Pressable>
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