import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';


const SearchBar = ({term, onTermChange, onTermSubmit}) => {
	return (
		<View style={styles.backgroundStyle}>
			<Entypo name ="magnifying-glass"  style={styles.iconStyle} />
			<TextInput
                autoCapitalize = "none"
                autoCorrect = {false}
                style={styles.inputStyle}
				placeholder = "Search"
                value = {term}
                onChangeText = {onTermChange}
                onEndEditing = {onTermSubmit}
			 />
		</View>
	);

};


const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop : 10,
		backgroundColor: '#F0EEEE',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
	},
	inputStyle:{
		flex: 1,
		fontSize: 17 // default is 14
	},
	iconStyle:{
		fontSize: 35,
		alignself: 'center',
		marginHorizontal: 15,
        top: 8
		
	},
});

export default SearchBar;  