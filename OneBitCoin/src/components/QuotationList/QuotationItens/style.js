import { StyleSheet } from "react-native";

const STYLE = StyleSheet.create({

    mainContent: {
        width: '95%',
        height: 'auto',
        backgroundColor: 'black',
        marginLeft: '3%',
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },

    logoBitcoin: {
        width: 40,
        height: 40,
        marginLeft: 2,
    },

    boxLogo: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    contentLeft: {
        width: '36%',
        alignItems: 'flex-start',
    },

    contentRight: {
        width: '60%',
        alignItems: 'flex-end',
    },

    dayCotation: {
        fontSize: 16,
        paddingLeft: 2,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 10,
    },

    price: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    }

});


export default STYLE;