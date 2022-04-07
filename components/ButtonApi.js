import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import styled from 'styled-components/native';

const QuoteText = styled.Text`
font-weight: 400;
color: #63182d;
margin: 80px 70px;
font-size: 20px;
justify-content: center;
`;

const APIButton = styled.TouchableOpacity`
width: 80%;
background-color: #784150;
margin: 20px;
text-align: center;
border-radius: 15px;
`;

const ButtonText = styled.Text`
font-weight: slim;
color: #f7d7cb;
`;

const ScreenBackground = styled.ImageBackground`
justify-content: center;
height: 100%;
`;
const Main =styled.View`
display: flex;
align-items: center;
flex-direction: column;
padding: 50px;
`;

const ButtonApi = () => {
const [quote, setQuote] = useState({});
const [loading, setLoading] = useState(false);
const [location, setLocation] = useState({});

useEffect(() => {
generateQuote();
}, []);

const generateQuote = () => {
        setLoading(true);
        fetch('http://api.quotable.io/random')
        .then((res) => res.json())
        .then((data) => setQuote(data))
        .finally(() => setLoading(false));
    };

    fetch(URL)
        .then((res) => res.json())
        .then((data) => console.log(data));

    if (loading) {
        return <ActivityIndicator/>
    };

return (
 <ScreenBackground source= {require('../assets/Background-app1.png')}>
     <Main>
<APIButton onPress={generateQuote}>
<ButtonText>Click the button to generate a quote!</ButtonText>
</APIButton>
<QuoteText>"{quote.content}"</QuoteText>
<Text>Author: {quote.author}</Text>
</Main>
</ScreenBackground>
)};

export default ButtonApi;