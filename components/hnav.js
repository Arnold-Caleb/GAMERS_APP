import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { styles } from '../styles';

export const HelperNav = ({ navigation, loc, questions }) => {
    return (
        <View>
        <TouchableOpacity
            style={styles.items}
            onPress={() => navigation.goBack()}>
            <Text>Back</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={[styles.items, styles.red]}
            onPress={() => navigation.navigate(loc, {...questions})}>
            <Text style={styles.white}>Next</Text>
          </TouchableOpacity>
        </View>
    )
}