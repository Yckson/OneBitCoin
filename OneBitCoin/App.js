import { StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';


import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationList from './src/components/QuotationList';


function formatDateNumber(number){
  if (number <= 9){
    return "0" + number;
  }
  return number;

}

function returnDateFormatted(day, month, year){
  return `${year}-${formatDateNumber(month)}-${formatDateNumber(day)}`
}

function url(qtdDays){
  const Data = new Date();
  const listLastDays = qtdDays;
  const endDate = returnDateFormatted(Data.getDate(), Data.getMonth() + 1, Data.getFullYear());

  Data.setDate(Data.getDate() - listLastDays);


  const startDate = returnDateFormatted(Data.getDate(), Data.getMonth() + 1, Data.getFullYear());


  const URL = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;
  return URL;
}

async function getListCoins(url){
  let response = await fetch(url);
  let returnApi = await response.json();

  const selectListQuotations = returnApi.bpi;
  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split('-').reverse().join('/'),
      val: selectListQuotations[key]
    };
  });

  const data = queryCoinsList.reverse();
  return data;
}

async function getListCoinsGraphic(url){
  let response = await fetch(url);
  let returnApi = await response.json();

  const selectListQuotations = returnApi.bpi;
  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split('-').reverse().join('/'),
      val: selectListQuotations[key]
    };
  });
  return queryCoinsList;
}

export default function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
  const [days, setDays] = useState(30);
  const [currentPrice, setCurrentPrice] = useState(0);

  const [updateData, setUpdateData] = useState(true);

  function updateDay(number){
    setDays(number);
    setUpdateData(true);
  }


  useEffect(
    ()=>{
      getListCoins(url(days)).then((data) => {setCoinsList(data)});

      getListCoinsGraphic(url(days)).then((data) => {setCoinsGraphicList(data)
      
      setCurrentPrice(data[data.length - 1].val);});

      if(updateData){
        setUpdateData(false);
      }
      console.log(coinsList);
    }, [updateData]
  );

  


  return (
    <SafeAreaView style={styles.container}>

      <StatusBar backgroundColor='#f50d41' barStyle='light-content'/>

      <CurrentPrice currentPrice={currentPrice}/>
      <HistoryGraphic infoDataGraphic={coinsGraphicList}/>
      <QuotationList filterDay={updateDay} listTransactions={coinsList} />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
});
