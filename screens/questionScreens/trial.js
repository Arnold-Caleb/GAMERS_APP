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
import { questions } from "../../data/questions";

import { styles, THEME } from "../../styles";
import Diagnosis from "../../data/diagnoses";
import { visitation } from "../../api/gamersapi";

import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";

export class QuestionnaireScreen extends React.Component {
	state = {
		...questions,
		caseId: this.props.route.params.CaseId,
		assertation: false,
		visitFrequency: null,
		durationUnits: "days",
	};

	diagnosis = () => {
		if (this.state.visitFrequency !== null) {
			let visitFrequency = this.state.visitFrequency.split(" ").join("");
			visitation(this.state.caseId, visitFrequency);
		}

		const d = new Diagnosis(this.state);
		this.props.navigation.navigate("Results", {
			diagnosis: d.getDiagnosis(),
			...this.state,
		});
	};

	assertationHelper = () => {
		if (this.state.temp === null || this.state.weight === null) {
			this.setState({ assertation: false });
		} else {
			this.setState({ assertation: !this.state.assertation });
		}
	};

	render() {
		return (
			<ScrollView style={{ paddingBottom: 20 }}>
				<KeyboardAvoidingView>
					<Text
						style={{ margin: 25, fontSize: 20, fontWeight: "bold" }}
					>
						Case ID {this.state.caseId} Questionnaire
					</Text>
					<View style={routineStyles.questionView}>
						<Text>What is the patients temperature?*</Text>
						<TextInput
							style={styles.textInput}
							onChangeText={(text) =>
								this.setState({ temp: text })
							}
							value={this.state.temp}
							keyboardType="numeric"
						/>
					</View>
					<View style={routineStyles.questionView}>
						<Text>Enter patient's weight*</Text>
						<TextInput
							style={styles.textInput}
							onChangeText={(text) =>
								this.setState({ weight: text })
							}
							value={this.state.weight}
							keyboardType="numeric"
						/>
					</View>
					<CheckBox
						title="Does the patient have a fever?*"
						checked={this.state.fever}
						checkedColor={THEME}
						onPress={() =>
							this.setState({ fever: !this.state.fever })
						}
					/>

					{this.state.fever && (
						<View
							style={{
								margin: 10,
							}}
						>
							<Text style={{ marginLeft: 5 }}>
								For how long has the patient had the fever?*
							</Text>
							<DropDownPicker
								items={[
									{
										label: "2 to 3 days",
										value: "two",
										icon: () => (
											<Icon
												name="clock"
												size={18}
												color="tomato"
											/>
										),
									},
									{
										label: "A day or less",
										value: "day",
										icon: () => (
											<Icon
												name="clock"
												size={18}
												color="tomato"
											/>
										),
									},
									{
										label: "4 or more days",
										value: "four",
										icon: () => (
											<Icon
												name="clock"
												size={18}
												color="tomato"
											/>
										),
									},
								]}
								defaultValue={this.state.feverLength}
								style={{
									backgroundColor: "#fafafa",
									marginTop: 10,
								}}
								itemStyle={{
									justifyContent: "flex-start",
								}}
								dropDownStyle={{
									backgroundColor: "#fafafa",
									marginTop: 10,
								}}
								onChangeItem={(item) =>
									this.setState({
										feverLength: item.value,
									})
								}
							/>
						</View>
					)}

					<CheckBox
						title="Does the patient have general body weakness?*"
						checked={this.state.bodyWeak}
						checkedColor={THEME}
						onPress={() =>
							this.setState({
								bodyWeak: !this.state.bodyWeak,
							})
						}
					/>

					<CheckBox
						title="Does the patient have a cough?*"
						checked={this.state.cough}
						checkedColor={THEME}
						onPress={() =>
							this.setState({
								cough: !this.state.cough,
							})
						}
					/>

					<CheckBox
						title="Does the patient pass loose stool?*"
						checked={this.state.looseStool}
						checkedColor={THEME}
						onPress={() =>
							this.setState({
								looseStool: !this.state.looseStool,
							})
						}
					/>

					<CheckBox
						title="Does the patient pass blood in stool?*"
						checked={this.state.bloodStool}
						checkedColor={THEME}
						onPress={() =>
							this.setState({
								bloodStool: !this.state.bloodStool,
							})
						}
					/>

					<CheckBox
						title="Does the patient vomit?*"
						checked={this.state.vomit}
						checkedColor={THEME}
						onPress={() =>
							this.setState({
								vomit: !this.state.vomit,
							})
						}
					/>

					<CheckBox
						title="Does the patient have difficulty breathing?*"
						checked={this.state.dbreathing}
						checkedColor={THEME}
						onPress={() =>
							this.setState({
								dbreathing: !this.state.dbreathing,
							})
						}
					/>

					<CheckBox
						title="Does the patient have body chills?*"
						checked={this.state.bodyChills}
						checkedColor={THEME}
						onPress={() =>
							this.setState({
								bodyChills: !this.state.bodyChills,
							})
						}
					/>

					<CheckBox
						title="Does the patient have a headache?*"
						checked={this.state.headache}
						checkedColor={THEME}
						onPress={() =>
							this.setState({
								headache: !this.state.headache,
							})
						}
					/>

					<CheckBox
						title="Does the patient have joint or body pain?*"
						checked={this.state.bodyPain}
						checkedColor={THEME}
						onPress={() =>
							this.setState({
								bodyPain: !this.state.bodyPain,
							})
						}
					/>

					<CheckBox
						title="Does the patient have vomit?*"
						checked={this.state.hvomit}
						checkedColor={THEME}
						onPress={() =>
							this.setState({
								hvomit: !this.state.hvomit,
							})
						}
					/>

					<CheckBox
						title="Does the patient have fast breathing?*"
						checked={this.state.fbreathing}
						checkedColor={THEME}
						onPress={() =>
							this.setState({
								fbreathing: !this.state.fbreathing,
							})
						}
					/>

					<CheckBox
						title="Does the patient have an indrawn chest?*"
						checked={this.state.iChest}
						checkedColor={THEME}
						onPress={() =>
							this.setState({
								iChest: !this.state.iChest,
							})
						}
					/>

					<CheckBox
						title="Does the patient have head noddling?*"
						checked={this.state.headNoddling}
						checkedColor={THEME}
						onPress={() =>
							this.setState({
								headNoddling: !this.state.headNoddling,
							})
						}
					/>

					<CheckBox
						title="Does the patient have sunken eye balls?*"
						checked={this.state.sunken}
						checkedColor={THEME}
						onPress={() =>
							this.setState({
								sunken: !this.state.sunken,
							})
						}
					/>

					<CheckBox
						title="Does the patient have slow pinch skin?*"
						checked={this.state.pSkin}
						checkedColor={THEME}
						onPress={() =>
							this.setState({
								pSkin: !this.state.pSkin,
							})
						}
					/>

					<CheckBox
						title="Is the patient eager to drink?*"
						checked={this.state.eDrink}
						checkedColor={THEME}
						onPress={() =>
							this.setState({
								eDrink: !this.state.eDrink,
							})
						}
					/>

					<View style={{ margin: 10, marginBottom: 50 }}>
						<Text style={{ marginLeft: 5 }}>
							How often is the patient visited?*
						</Text>
						<TextInput
							style={[
								styles.textInput,
								{ backgroundColor: "#fff" },
							]}
							onChangeText={(text) =>
								this.setState({ visitFrequency: text })
							}
							value={this.state.visitFrequency}
							keyboardType="number-pad"
						/>

						<DropDownPicker
							items={[
								{
									label: "months",
									value: "months",
									icon: () => (
										<Icon
											name="clock"
											size={18}
											color="tomato"
										/>
									),
								},
								{
									label: "weeks",
									value: "weeks",
									icon: () => (
										<Icon
											name="clock"
											size={18}
											color="tomato"
										/>
									),
								},
								{
									label: "days",
									value: "days",
									icon: () => (
										<Icon
											name="clock"
											size={18}
											color="tomato"
										/>
									),
								},
							]}
							defaultValue={this.state.durationUnits}
							style={{
								backgroundColor: "#fafafa",
								marginTop: 10,
							}}
							itemStyle={{
								justifyContent: "flex-start",
							}}
							dropDownStyle={{
								backgroundColor: "#fafafa",
								marginTop: 10,
							}}
							onChangeItem={(item) =>
								this.setState({
									durationUnits: item.value,
								})
							}
						/>
					</View>

					<CheckBox
						title="I assert that all the entered information is true for the patient I'm attending to*"
						checked={this.state.assertation}
						checkedColor={THEME}
						onPress={() => this.assertationHelper()}
					/>

					{this.state.assertation && (
						<TouchableOpacity
							style={[styles.items, routineStyles.submit]}
							onPress={() => this.diagnosis()}
						>
							<Text
								style={[styles.white, routineStyles.submitText]}
							>
								Get diagnosis
							</Text>
						</TouchableOpacity>
					)}
				</KeyboardAvoidingView>
			</ScrollView>
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
