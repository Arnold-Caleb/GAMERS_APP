import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { styles, THEME } from "../styles";

import { diseases } from "../data/diagnoses";
import { addBiodata, visitation, referForDangerSigns, updateCase } from "../api/gamersapi";

export class Results extends React.Component {
	state = { ...this.props.route.params };

	closeCase = async () => {
		await addBiodata(this.state);
		await visitation(
			this.state.caseId,
			this.state.visitFrequency,
			this.state.durationUnits
		);
		await updateCase(this.state.caseId)
		this.props.navigation.navigate("Home");
	};

	render() {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
				}}
			>
				{this.state.diagnosis === diseases.unknown && (
					<View>
						<TouchableOpacity
							style={[styles.items, routineStyles.submit]}
							onPress={() =>
								this.referForDangerSigns(this.state.caseId)
							}
						>
							<Text
								style={[styles.white, routineStyles.submitText]}
							>
								Refer for treatment
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.items, routineStyles.submit]}
							onPress={() =>
								this.referForDangerSigns(this.state.caseId)
							}
						>
							<Text
								style={[styles.white, routineStyles.submitText]}
							>
								Danger signs
							</Text>
						</TouchableOpacity>
					</View>
				)}

				{this.state.diagnosis === diseases.pneumonia && (
					<View>
						<Text
							style={{
								margin: 5,
								marginBottom: 20,
								fontSize: 35,
								textAlign: "center",
							}}
						>
							{this.state.diagnosis.toUpperCase()}
						</Text>
						<Text
							style={{
								margin: 10,
								marginBottom: 20,
								fontSize: 15,
								textAlign: "center",
							}}
						>
							Give treatment (follow the prescription log below)
						</Text>
						<View
							style={[
								styles.details,
								{
									flexDirection: "column",
									margin: 10,
									paddingLeft: 20,
								},
							]}
						>
							<Text>Offer drug in the tool kit</Text>
							<Text>Procedure to follow</Text>
							<Text>Prescription log here</Text>
						</View>
						<TouchableOpacity
							style={[
								styles.items,
								routineStyles.submit,
								{ backgroundColor: "#fff", marginBottom: 0 },
							]}
							onPress={() =>
								this.referForDangerSigns(this.state.caseId)
							}
						>
							<Text
								style={[styles.black, routineStyles.submitText]}
							>
								Refer case
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.items, routineStyles.submit]}
							onPress={() => this.closeCase()}
						>
							<Text
								style={[styles.white, routineStyles.submitText]}
							>
								Close case
							</Text>
						</TouchableOpacity>
					</View>
				)}

				{this.state.diagnosis === diseases.malaria && (
					<View>
						<Text
							style={{
								margin: 5,
								marginBottom: 20,
								fontSize: 35,
								textAlign: "center",
							}}
						>
							{this.state.diagnosis.toUpperCase()}
						</Text>
						<Text
							style={{
								margin: 10,
								marginBottom: 20,
								fontSize: 15,
								textAlign: "center",
							}}
						>
							Give treatment (follow the prescription log below)
						</Text>
						<View
							style={[
								styles.details,
								{
									flexDirection: "column",
									margin: 10,
									paddingLeft: 20,
								},
							]}
						>
							<Text>Offer drug in the tool kit</Text>
							<Text>Procedure to follow</Text>
							<Text>Prescription log here</Text>
						</View>
						<TouchableOpacity
							style={[
								styles.items,
								routineStyles.submit,
								{ backgroundColor: "#fff", marginBottom: 0 },
							]}
							onPress={() =>
								this.referForDangerSigns(this.state.caseId)
							}
						>
							<Text
								style={[styles.black, routineStyles.submitText]}
							>
								Refer case
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.items, routineStyles.submit]}
							onPress={() => this.closeCase()}
						>
							<Text
								style={[styles.white, routineStyles.submitText]}
							>
								Close case
							</Text>
						</TouchableOpacity>
					</View>
				)}

				{this.state.diagnosis === diseases.diarrhea && (
					<View>
						<Text
							style={{
								margin: 5,
								marginBottom: 20,
								fontSize: 35,
								textAlign: "center",
							}}
						>
							{this.state.diagnosis.toUpperCase()}
						</Text>
						<Text
							style={{
								margin: 10,
								marginBottom: 20,
								fontSize: 15,
								textAlign: "center",
							}}
						>
							Give treatment (follow the prescription log below)
						</Text>
						<View
							style={[
								styles.details,
								{
									flexDirection: "column",
									margin: 10,
									paddingLeft: 20,
								},
							]}
						>
							<Text>Offer drug in the tool kit</Text>
							<Text>Procedure to follow</Text>
							<Text>Prescription log here</Text>
						</View>
						<TouchableOpacity
							style={[
								styles.items,
								routineStyles.submit,
								{ backgroundColor: "#fff", marginBottom: 0 },
							]}
							onPress={() => this.diagnosis()}
						>
							<Text
								style={[styles.black, routineStyles.submitText]}
							>
								Refer case
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.items, routineStyles.submit]}
							onPress={() => this.closeCase()}
						>
							<Text
								style={[styles.white, routineStyles.submitText]}
							>
								Close case
							</Text>
						</TouchableOpacity>
					</View>
				)}
			</View>
		);
	}
}

const routineStyles = StyleSheet.create({
	submit: {
		padding: 15,
		margin: 10,
		marginTop: 20,
		marginBottom: 20,
		backgroundColor: THEME,
		borderRadius: 25,
	},
	submitText: {
		textAlign: "center",
		fontSize: 16,
	},
	questionView: {
		margin: 10,
		padding: 10,
		backgroundColor: "#fff",
	},
});
