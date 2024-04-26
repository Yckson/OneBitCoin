import React from "react";
import { View, Text, Image } from "react-native";


import STYLE from "./style";


export default function QuotationItens(props) {

    const logo = require('../../../img/Bitcoin.svg.webp');


    return(

        <View style={STYLE.mainContent}>
            <View style={STYLE.contentLeft}>
                <View style={STYLE.boxLogo}>
                    <Image style={STYLE.logoBitcoin} source={logo}></Image>
                    <Text style={STYLE.dayCotation}>{props.data}</Text>
                </View>
                
            </View>
            <View style={STYLE.contentRight}>
                <Text style={STYLE.price}>$ {props.val}</Text>
            </View>
        </View>

    );

}
