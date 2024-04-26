import React from "react";
import { View, Text } from "react-native";

import STYLE from "./style";

export default function CurrentPrice(props) {


    return (

        <View style={STYLE.headerPrice}>
            <Text style={STYLE.CurrentPrice}>$ {props.currentPrice}</Text>
            <Text style={STYLE.textPrice}>Última Cotação: </Text>
        </View>

    );


}