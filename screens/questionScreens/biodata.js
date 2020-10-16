import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
	KeyboardAvoidingView,
	TextInput,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { biodata } from "../../data/biodata";

import { styles, THEME } from "../../styles";

export class BiodataScreen extends React.Component {
	state = {
		...biodata,
		caseId: this.props.route.params.CaseId,
		bioassertation: false,
	};

	biodataContinue = () => {
		console.log(this.state);
		this.props.navigation.navigate("Home", { ...this.state });
	};

	render() {
		return (
			<ScrollView>
				<KeyboardAvoidingView>
					<Text
						style={{ margin: 25, fontSize: 20, fontWeight: "bold" }}
					>
						Case ID {this.state.caseId}
					</Text>
					<CheckBox
						title="Is the patient's Mother alive?*"
						checked={this.state.mother}
						checkedColor={THEME}
						onPress={() =>
							this.setState({ mother: !this.state.mother })
						}
					/>
					<CheckBox
						title="Is the patiet's Father alive?*"
						checked={this.state.father}
						checkedColor={THEME}
						onPress={() =>
							this.setState({ father: !this.state.father })
						}
					/>
					<View
						style={{
							margin: 10,
							padding: 10,
							backgroundColor: "#fff",
						}}
					>
						<Text>
							How many children does the patient have? (Leave
							blank for no children)*
						</Text>
						<TextInput
							style={styles.textInput}
							onChangeText={(text) =>
								this.setState({ children: text })
							}
							value={this.state.children}
							keyboardType="numeric"
						/>
					</View>
					{this.state.children > 0 && (
						<View>
							<View
								style={{
									margin: 10,
									padding: 10,
									backgroundColor: "#fff",
								}}
							>
								<Text>
									How many daughters does the patient have?
									(Leave blank for no daughters)*
								</Text>
								<TextInput
									style={styles.textInput}
									onChangeText={(text) =>
										this.setState({ girls: text })
									}
									value={this.state.girls}
									keyboardType="numeric"
								/>
							</View>
							<View
								style={{
									margin: 10,
									padding: 10,
									backgroundColor: "#fff",
								}}
							>
								<Text>
									How many sons does the patient have? (Leave
									blank for no sons)*
								</Text>
								<TextInput
									style={styles.textInput}
									onChangeText={(text) =>
										this.setState({ boys: text })
									}
									value={this.state.boys}
									keyboardType="numeric"
								/>
							</View>
						</View>
					)}

					<View
						style={{
							margin: 10,
							padding: 10,
							backgroundColor: "#fff",
						}}
					>
						<Text>What type of family does the patient have?*</Text>
						<TextInput
							style={styles.textInput}
							onChangeText={(text) =>
								this.setState({ familyType: text })
							}
							value={this.state.familyType}
						/>
					</View>

					<View
						style={{
							margin: 10,
							padding: 10,
							backgroundColor: "#fff",
						}}
					>
						<Text>What is the patients birthday?*</Text>
						<TextInput
							style={styles.textInput}
							onChangeText={(text) =>
								this.setState({ birthIndex: text })
							}
							value={this.state.birthIndex}
						/>
					</View>
					<CheckBox
						title="Does the patient have any disability?*"
						checked={this.state.disability}
						checkedColor={THEME}
						onPress={() =>
							this.setState({
								disability: !this.state.disability,
							})
						}
					/>

					{this.state.disability && (
						<View
							style={{
								margin: 10,
								padding: 10,
								backgroundColor: "#fff",
							}}
						>
							<Text>What disability does the patient have?*</Text>
							<TextInput
								style={styles.textInput}
								onChangeText={(text) =>
									this.setState({
										disabilityDescription: text,
									})
								}
								value={this.state.disabilityDescription}
							/>
						</View>
					)}

					<CheckBox
						title="I assert that all the information I have entered for the current patient is true*"
						checked={this.state.bioassertation}
						checkedColor={THEME}
						onPress={() =>
							this.setState({
								bioassertation: !this.state.bioassertation,
							})
						}
					/>

					{this.state.bioassertation && (
						<TouchableOpacity
							style={[styles.items, routineStyles.submit]}
							onPress={() => this.biodataContinue()}
						>
							<Text
								style={[styles.white, routineStyles.submitText]}
							>
								Save and Send
							</Text>
						</TouchableOpacity>
					)}
				</KeyboardAvoidingView>
			</ScrollView>
		);
	}
}

export const routineStyles = StyleSheet.create({
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
});
