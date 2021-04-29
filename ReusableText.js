import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {navigate} from '../screens/navigationRef';
import {withNavigation} from 'react-navigation';
import Spacer from './Spacer';

const ReusableText = ({navigation, editText, routeName}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.text}>{editText}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
});

export default withNavigation(ReusableText);
