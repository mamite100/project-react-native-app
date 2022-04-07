import React, {
  useState,
  useEffect
} from 'react';

import styled from "styled-components/native";
import {View,Text, ActivityIndicator} from 'react-native';
import {Accelerometer} from 'expo-sensors';

//styled components
const QuoteText = styled.Text `
font-size: 25px;
color: #63182d; 
margin:40px 80px;
text-align: center;
text-transform: capitalize;
`;

const ScreenBackground = styled.ImageBackground`
height:100%;
`;  
const Main = styled.View`
display: flex;
align-items: center;
flex-direction: column;
padding: 50px;
`;
const QuoteContainer = styled.View `
displey: flex; 
justify-content: center;
align-items: center; 
`;

const ShakeText = styled.Text `
font-size: 25px;
color: #521224;
margin: 80px 70px;
text-align: center;
font-weight: slim;
text-transform: capitalize;
`;

const ShakeApi = () => {
const [data, setData] = useState({
      x: 0,
      y: 0,
      z: 0,
    });
    const [quote, setQuote] = useState({});
    const [loading, setLoading] = useState(false);
    const [subscription, setSubscription] = useState(null);

    // generates a quote
    useEffect(() => {
      generateQuote();
    }, []);

    //when the component gets un-mounted we subribe to the accelerometer 

    useEffect(() => {
      Accelerometer.setUpdateInterval(500);
      subscribe();
      return () => unsubscribe();
    }, []);
    // determines if the shaking is enough to update the quote
    useEffect(() => {
      if (isShakingEnough(data)) {
        generateQuote();
      }
    }, [data]);

    // for better comment 1.11 in monday session
    const subscribe = () => {

      setSubscription(
        Accelerometer.addListener((accelerometerData) => {
          setData(accelerometerData);
        })
      );
    };
    const unsubscribe = () => {
      subscription && subscription.remove();
      setSubscription(null);
    };

    //fetch the quotes from API
    const generateQuote = () => {
      setLoading(true);
      fetch('http://api.quotable.io/random')
        .then((res) => res.json())
        .then((data) => setQuote(data))
        .finally(() => setLoading(false));
    };



    // a mathematical calculation to see if the shaking is big enough
    const isShakingEnough = (data) => {

      const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

      return totalForce > 1.78;
    };
    
    

    const { x, y, z } = data; 

    return (
<ScreenBackground source= {require('../assets/Background-app1.png')}> 
  <Main>
      <QuoteContainer>
          <QuoteText>
              "{quote.content}"
          </QuoteText>
            <ShakeText> Author: {quote.author} </ShakeText>
    </QuoteContainer>
  </Main>
</ScreenBackground>
    )};

    export default ShakeApi;