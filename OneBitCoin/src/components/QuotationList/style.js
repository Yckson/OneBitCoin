import { StyleSheet } from "react-native";



const STYLE = StyleSheet.create({

    filters: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 20,
        paddingVertical: 15,
    },

    buttonQuery: {
        width: 50,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        backgroundColor: '#f50d41',
        justifyContent: 'center',
    },

    textButtonQuery: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    }
    

});

export default STYLE;