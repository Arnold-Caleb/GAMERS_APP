import React, { useState } from "react";
import { View, Modal, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

import { styles } from "../styles";

export const ProfileScreen = ({ route, navigation }) => {
	const profile = route.params;

	const [modalVisible, setModalVisible] = useState(false);

	const requestTransportation = async (id) => {
		try {
			const response = await fetch(
				`https://gamers.pagekite.me/transporter?caseid=${id}`
			);
			const result = await response.json();
			setModalVisible(false);
			alert(
				`Transporter name: ${result.Transporter} \nTranportation means: ${result.Type} \nTranporter contact: ${result.Phone}`
			);
		} catch (e) {
			setModalVisible(false);
			alert("Unable to get transporter for the current case");
		}
	};

	return (
		<View style={styles.body}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<TouchableOpacity
							onPress={() => setModalVisible(false)}
						>
							<Icon
								style={{
									textAlign: "center",
									paddingBottom: 30,
								}}
								name="close"
								size={25}
								color="#612639"
							/>
						</TouchableOpacity>
						<TouchableOpacity
							style={{ ...styles.items }}
							onPress={() =>
								requestTransportation(profile.CaseId)
							}
						>
							<Text style={styles.textStyle}>
								Request for transportation
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{ ...styles.items }}
							onPress={() => setModalVisible(false)}
						>
							<Text style={styles.textStyle}>
								Request For supplies
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.items, styles.red]}
							onPress={() => setModalVisible(false)}
						>
							<Text style={[styles.textStyle, styles.white]}>
								First Aid
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>

			<Text
				style={{
					margin: 5,
					marginBottom: 40,
					fontSize: 35,
				}}
			>
				Case {profile.CaseId}
			</Text>

			<View style={styles.details}>
				<View style={{ marginRight: 10 }}>
					<Text style={[styles.black]}>CASE LOCATION</Text>
					<Text style={[styles.black]}>CATEGORY</Text>
					<Text style={[styles.black]}>VHT NAME</Text>
					<Text style={[styles.black]}>VHT CONTACT</Text>
				</View>

				<View>
					<Text style={styles.theme}>
						{profile.Location.toUpperCase()}
					</Text>
					<Text style={styles.theme}>
						{profile.Category.toUpperCase()}
					</Text>
					<Text style={styles.theme}>{profile.VHTName}</Text>
					<Text style={styles.theme}>{profile.VHTPhone}</Text>
				</View>
			</View>

			<View style={styles.container}>
				{profile.Category !== "pregnancy" && (
					<TouchableOpacity
						style={styles.items}
						onPress={() =>
							navigation.navigate("Assess patient", {
								CaseId: profile.CaseId,
							})
						}
					>
						<Text>Assess patient</Text>
					</TouchableOpacity>
				)}

				{profile.Category === "pregnancy" && (
					<View>
						<TouchableOpacity
							style={styles.items}
							onPress={() =>
								navigation.navigate("Routine", { ...profile })
							}
						>
							<Text>Routine Call</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.items}
							onPress={() =>
								navigation.navigate("Emergency", { ...profile })
							}
						>
							<Text>Emergency Call</Text>
						</TouchableOpacity>
					</View>
				)}

				<TouchableOpacity
					style={[styles.items, styles.red]}
					onPress={() => setModalVisible(!modalVisible)}
				>
					<Text style={styles.white}>Danger signs</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
