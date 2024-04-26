import React, { Fragment } from "react";
import { View, Text, ScrollView, TouchableOpacity, FlatList } from "react-native";

import STYLE from "./style";
import QuotationItens from "./QuotationItens";



export default function QuotationList(props) {
    const daysQuery = props.filterDay;
    const days = props.days;

    return(
        <Fragment>
            <View style={STYLE.filters}>
                <TouchableOpacity style={STYLE.buttonQuery} onPress={()=>{ 
                    console.log(days);
                    daysQuery(7);
                    
                }}>
                    <Text style={STYLE.textButtonQuery}>7D</Text>
                </TouchableOpacity>
                <TouchableOpacity style={STYLE.buttonQuery} onPress={()=>{ daysQuery(15) }}>
                    <Text style={STYLE.textButtonQuery}>15D</Text>
                </TouchableOpacity>
                <TouchableOpacity style={STYLE.buttonQuery} onPress={()=>{ daysQuery(30) }}>
                    <Text style={STYLE.textButtonQuery}>1M</Text>
                </TouchableOpacity>
                <TouchableOpacity style={STYLE.buttonQuery} onPress={()=>{ daysQuery(90) }}>
                    <Text style={STYLE.textButtonQuery}>3M</Text>
                </TouchableOpacity>
                <TouchableOpacity style={STYLE.buttonQuery} onPress={()=>{ daysQuery(180) }}>
                    <Text style={STYLE.textButtonQuery}>6M</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <FlatList data={props.listTransactions} renderItem={(item)=>{
                    return <QuotationItens data={item.item.data} val={item.item.val} />
                }}>

                </FlatList>
            </ScrollView>
            
        </Fragment>
    );
}