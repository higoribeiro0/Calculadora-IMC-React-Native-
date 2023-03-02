import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 30,
        paddingTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    form: {
        width: "100%",
    },

    formLabel: {
        color: "black",
        fontSize: 19,
        paddingLeft: 20,
    },

    input: {
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 15,
        paddingLeft: 10,
    },

    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 30,
    },

    textButtonCalculator: {
        fontSize: 25,
        color: "#fff",
    },

    errorMessage: {
        fontSize: 14,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    
    exhibitionResultIMC: {
        width: "100%",
        height: "50%",
    },

    listIMCs: {
        marginTop: 20,
    },

    resultIMCItem: {
        fontSize: 22,
        color: "black",
        height: 50,
        width: "100%",
        paddingRight: 20,
    },

    textResultItemList: {
        fontSize: 22,
    },
})

export default styles;