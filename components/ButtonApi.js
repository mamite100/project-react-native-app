//import React, { useState, useEffect } from 'react';
//import { View, Text, TouchableOpacity, ActivityIndicator,  ImageBackground } from 'react-native';
//import styled from 'styled-components/native';



//const QuoteText = styled.Text`
//	font-weight: 700;
//`;

//const APIButton = styled.TouchableOpacity`
//	width: 50%;
//	background-color: green;
//`;

//const ButtonApi = () => {
//	const [quote, setQuote] = useState({});
//	const [loading, setLoading] = useState(false);

//	useEffect(() => {
//		generateQuote();
//	}, []);

//		setLoading(true);

//		fetch('http://api.quotable.io/random')
//			.then((res) => res.json())
//			.then((data) => setQuote(data))
//			.finally(() => setLoading(false));
//	};

//	if (loading) {
//		return <ActivityIndicator />;
//	}

//	return (
//		 <ScreenBackground source= {require('../assets/Background-app.png')}>
//			<Text>Click button to generate quote!</Text>
//			<APIButton onPress={generateQuote}>
//				<Text>Click</Text>
//			</APIButton>
//			<QuoteText>Quote: {quote.content}</QuoteText>
//			<Text>Author: {quote.author}</Text>
//		</ScreenBackground>
//	);
//};

export default ButtonApi;