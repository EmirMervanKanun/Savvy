import React, {useState} from 'react';
import { StyleSheet, View, Image, Pressable, Text} from 'react-native';
import ButtonText from '../TextComponents/ButtonText';
import COLORS from '../Farben';



const ButtonBig=({text, img, onPress}) => {
    if (img == null){
        return (
            <Pressable onPress={onPress} style={styles.containerBig}>
                <Text style={styles.buttonText}><ButtonText>{text}</ButtonText></Text>
            </Pressable>
        );
    }
    
    return(
        <Pressable onPress={onPress} style={styles.containerBig}>
            <Image style={styles.image} source={img} />
            <Text style={styles.buttonText}><ButtonText>{text}</ButtonText></Text>
        </Pressable>
    );
}
export default ButtonBig;

export const ButtonMid=({text, img, onPress}) => {
    return(
        <Pressable onPress={onPress} style={styles.containerMid}>
            <Image style={styles.image} source={img} />
            <Text style={styles.buttonText}><ButtonText>{text}</ButtonText></Text>
        </Pressable>
    );
}

export const ButtonSmall=({text, img, isRed, onPress}) => {
    if(isRed == null){
        return(
            <Pressable onPress={onPress} style={styles.containerSmall}>
             <Image style={styles.image} source={img} />
             <Text style={styles.buttonText}><ButtonText>{text}</ButtonText></Text>
            </Pressable>
        );
    }
    return(
        <Pressable onPress={onPress} style={styles.containerSmallRed}>
            <Image style={styles.image} source={img} />
            <Text style={styles.buttonText}><ButtonText>{text}</ButtonText></Text>
        </Pressable>
    );
}

export const ButtonIcon=({img, isRed, onPress}) => {
    if(isRed == null){
        return(
            <Pressable onPress={onPress} style={styles.containerIcon}>
                <Image style={styles.image} source={img}/>
            </Pressable>
        );
    }
    return(
        <Pressable onPress={onPress} style={styles.containerIconRed}>
            <Image style={styles.image} source={img} />
        </Pressable>
    );
}

export const ButtonBack=({onPress}) => {
    return(
        <Pressable onPress={onPress} style={styles.containerButtonBack}>
            <Image style={styles.image} source={require('../../Icons/Objects/arrowLeft.png')}/>
            <Text style={styles.buttonTextBack}><ButtonText>zurück</ButtonText></Text>
        </Pressable>
    );
}

export const ButtonSettingsItem=({children, onPress}) => {
    return(
        <Pressable onPress={onPress} style={styles.containerSettingsItem}>
            <Text style={styles.buttonText}><ButtonText>{children}</ButtonText></Text>
            <Image style={styles.image} source={require('../../Icons/Objects/arrowRight.png')}/>
        </Pressable>
    );
}

export const ButtonSettings=({onPress}) => {
    return(
        <Pressable onPress={onPress} style={styles.containerButtonSettings}>
            <Image style={styles.imageSettings} source={require('../../Icons/Sonstiges/settings.png')}/>
        </Pressable>
    );
}
/*
const ButtonFilterItem=({children, onPress}) => {
    const [isSelected, setIsSelected] = useState(true);

    const changeSelected = () => {
        setiIsSelected(!isSelected);
    }

    if(isSelected){
        return(
        <Pressable onPress={onPress} style={styles.containerFilter}>
            <Text style={styles.buttonTextUnderlined}><ButtonText>{children}</ButtonText></Text>
        </Pressable>
        );
    }
        return(
        <Pressable onPress={onPress} style={styles.containerFilter}>
            <Text style={styles.buttonText}><ButtonText>{children}</ButtonText></Text>
        </Pressable>
        );
}

export let ButtonFilter=({items, startSelected}) => {
    selectedFlag =items[startSelected];
    
    return(
        <View style={styles.containerButtonFilter}>
            <ButtonFilterItem isSelected onPress={()=>{changeSelected; console.log(selectedFlag); }}>{items[0]}</ButtonFilterItem>
            <ButtonFilterItem isSelected onPress={()=>{changeSelected; console.log(selectedFlag);}}>{items[1]}</ButtonFilterItem>
            <ButtonFilterItem isSelected onPress={()=>{changeSelected; console.log(selectedFlag);}}>{items[2]}</ButtonFilterItem>
        </View>

    );
}
*/

const styles = StyleSheet.create({
    containerButtonSettings: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
    },
    imageSettings: {
        resizeMode: 'stretch',
        width: 30,
        height: 30,
    },
    containerButtonFilter: {   
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 24,
        width: 292,
    },
    containerSettingsItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: COLORS.schriftLight,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        height: 56,
        width: 340,
        paddingHorizontal: 32,
    },
    containerButtonBack: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 24,
        width: 80,
    },
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
    buttonTextUnderlined: {
        color: COLORS.schriftDark,
        textDecorationLine: 'underline',
    },
    buttonTextBack: {
        color: COLORS.schriftDark,
        alignContent: 'center',
        height: 24,
    },
});