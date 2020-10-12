import React, {useState} from 'react';
import { View, Modal, TouchableOpacity, Text } from 'react-native';

import { styles } from '../styles';

export const ModalView = () => {
    
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={{ ...styles.items }}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>Request for transportation</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...styles.items }}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>Request For supplies</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[ styles.items, styles.red ]}
                onPress={() => setModalVisible(false)}>
                <Text style={[styles.textStyle, styles.white]}>First Aid</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
    );
}