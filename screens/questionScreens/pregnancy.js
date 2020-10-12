import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { risk, etype } from "../../data/pregnancy";

import { styles, THEME } from "../../styles";

// API
import { referForDangerSigns } from "../../api/gamersapi";

// Routine call section
export class RoutineScreen extends React.Component {
	state = { ...risk, CaseId: this.props.route.params.CaseId };

	render() {
		return (
			<ScrollView>
				<Text style={{ margin: 25, fontSize: 20, fontWeight: "bold" }}>
					Who is a risk mother?
				</Text>
				<CheckBox
					title="Is the mother younger than 19 years of age?"
					checked={this.state.young}
					checkedColor={THEME}
					onPress={() => this.setState({ young: !this.state.young })}
				/>
				<CheckBox
					title="Is the mother older than 39 years of age?"
					checked={this.state.old}
					checkedColor={THEME}
					onPress={() => this.setState({ old: !this.state.old })}
				/>
				<CheckBox
					title="Has the mother had more than 4 pregnacies?"
					checked={this.state.many}
					checkedColor={THEME}
					onPress={() => this.setState({ many: !this.state.many })}
				/>
				<CheckBox
					title="Is the mother's height less than 1.5M?"
					checked={this.state.short}
					checkedColor={THEME}
					onPress={() =>
						this.setState({
							short: !this.state.short,
						})
					}
				/>
				<CheckBox
					title="Was the last pregnancy less than 2 years ago?"
					checked={this.state.lastPregnancy}
					checkedColor={THEME}
					onPress={() =>
						this.setState({
							lastPregnancy: !this.state.lastPregnancy,
						})
					}
				/>
				<CheckBox
					title="Is the current pregnancy of twins or more?"
					checked={this.state.multiple}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ multiple: !this.state.multiple })
					}
				/>
				<CheckBox
					title="Has the mother had abdominal / Uterine surgery in the past?"
					checked={this.state.surgery}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ surgery: !this.state.surgery })
					}
				/>
				<CheckBox
					title="Has the mother had a miscarriage in the past?"
					checked={this.state.abortion}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ abortion: !this.state.abortion })
					}
				/>
				<CheckBox
					title="Has the mother had excessive bleeding before or after birth in the past?"
					checked={this.state.excessiveBleeding}
					checkedColor={THEME}
					onPress={() =>
						this.setState({
							excessiveBleeding: !this.state.excessiveBleeding,
						})
					}
				/>
				<CheckBox
					title="Does the mother have high blood pressure in the past?"
					checked={this.state.hypertension}
					checkedColor={THEME}
					onPress={() =>
						this.setState({
							hypertension: !this.state.hypertension,
						})
					}
				/>
				<CheckBox
					title="Does the mother have high blood sugar?"
					checked={this.state.bloodSugar}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ bloodSugar: !this.state.bloodSugar })
					}
				/>
				<CheckBox
					title="Is the mother a known HIV client?"
					checked={this.state.hiv}
					checkedColor={THEME}
					onPress={() => this.setState({ hiv: !this.state.hiv })}
				/>
				<CheckBox
					title="Has the mother ever experienced fits/convulsions while pregnant?"
					checked={this.state.convulsions}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ convulsions: !this.state.convulsions })
					}
				/>
				<CheckBox
					title="Has the mother ever had a fetal Death?"
					checked={this.state.fetalDeath}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ fetalDeath: !this.state.fetalDeath })
					}
				/>
				<CheckBox
					title="Has the mother ever gotten to labor before term?"
					checked={this.state.lbterm}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ lbterm: !this.state.lbterm })
					}
				/>
				<CheckBox
					title="Has the mother suffered STDs during this pregnancy?"
					checked={this.state.stds}
					checkedColor={THEME}
					onPress={() => this.setState({ stds: !this.state.stds })}
				/>

				<TouchableOpacity
					style={[styles.items, routineStyles.submit]}
					onPress={() =>
						this.props.navigation.navigate("Routine Call", {
							...this.state,
						})
					}
				>
					<Text style={[styles.white, routineStyles.submitText]}>
						Continue
					</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

export class RoutineCall extends React.Component {
	state = { ...this.state };

	refer = (CaseId) => {
		referForDangerSigns(CaseId);
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
				<TouchableOpacity
					style={[
						styles.items,
						routineStyles.submit,
						{ alignItems: "center", justifyContent: "center" },
					]}
					onPress={() => {}}
				>
					<Text style={[styles.white, routineStyles.submitText]}>
						Offer ANC package at home
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[
						styles.items,
						routineStyles.submit,
						{ alignItems: "center", justifyContent: "center" },
					]}
					onPress={() => this.refer(this.state.CaseId)}
				>
					<Text style={[styles.white, routineStyles.submitText]}>
						Refer for ANC package
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

// Emergency Section
export class EmergencyScreen extends React.Component {
	state = { ...risk, ...this.props.route.params };

	render() {
		return (
			<ScrollView>
				<Text style={{ margin: 25, fontSize: 20, fontWeight: "bold" }}>
					Who is a risk mother?
				</Text>
				<CheckBox
					title="Is the mother younger than 19 years of age?"
					checked={this.state.young}
					checkedColor={THEME}
					onPress={() => this.setState({ young: !this.state.young })}
				/>
				<CheckBox
					title="Is the mother older than 39 years of age?"
					checked={this.state.old}
					checkedColor={THEME}
					onPress={() => this.setState({ old: !this.state.old })}
				/>
				<CheckBox
					title="Has the mother had more than 4 pregnacies?"
					checked={this.state.many}
					checkedColor={THEME}
					onPress={() => this.setState({ many: !this.state.many })}
				/>
				<CheckBox
					title="Is the mother's height less than 1.5M?"
					checked={this.state.short}
					checkedColor={THEME}
					onPress={() =>
						this.setState({
							short: !this.state.short,
						})
					}
				/>
				<CheckBox
					title="Was the last pregnancy less than 2 years ago?"
					checked={this.state.lastPregnancy}
					checkedColor={THEME}
					onPress={() =>
						this.setState({
							lastPregnancy: !this.state.lastPregnancy,
						})
					}
				/>
				<CheckBox
					title="Is the current pregnancy of twins or more?"
					checked={this.state.multiple}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ multiple: !this.state.multiple })
					}
				/>
				<CheckBox
					title="Has the mother had abdominal / Uterine surgery in the past?"
					checked={this.state.surgery}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ surgery: !this.state.surgery })
					}
				/>
				<CheckBox
					title="Has the mother had a miscarriage in the past?"
					checked={this.state.abortion}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ abortion: !this.state.abortion })
					}
				/>
				<CheckBox
					title="Has the mother had excessive bleeding before or after birth in the past?"
					checked={this.state.excessiveBleeding}
					checkedColor={THEME}
					onPress={() =>
						this.setState({
							excessiveBleeding: !this.state.excessiveBleeding,
						})
					}
				/>
				<CheckBox
					title="Does the mother have high blood pressure in the past?"
					checked={this.state.hypertension}
					checkedColor={THEME}
					onPress={() =>
						this.setState({
							hypertension: !this.state.hypertension,
						})
					}
				/>
				<CheckBox
					title="Does the mother have high blood sugar?"
					checked={this.state.bloodSugar}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ bloodSugar: !this.state.bloodSugar })
					}
				/>
				<CheckBox
					title="Is the mother a known HIV client?"
					checked={this.state.hiv}
					checkedColor={THEME}
					onPress={() => this.setState({ hiv: !this.state.hiv })}
				/>
				<CheckBox
					title="Has the mother ever experienced fits/convulsions while pregnant?"
					checked={this.state.convulsions}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ convulsions: !this.state.convulsions })
					}
				/>
				<CheckBox
					title="Has the mother ever had a fetal Death?"
					checked={this.state.fetalDeath}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ fetalDeath: !this.state.fetalDeath })
					}
				/>
				<CheckBox
					title="Has the mother ever gotten to labor before term?"
					checked={this.state.lbterm}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ lbterm: !this.state.lbterm })
					}
				/>
				<CheckBox
					title="Has the mother suffered STDs during this pregnancy?"
					checked={this.state.stds}
					checkedColor={THEME}
					onPress={() => this.setState({ stds: !this.state.stds })}
				/>

				<TouchableOpacity
					style={[styles.items, routineStyles.submit]}
					onPress={() =>
						this.props.navigation.navigate("Routine Call", {
							CaseId: this.state.CaseId,
						})
					}
				>
					<Text style={[styles.white, routineStyles.submitText]}>
						Continue
					</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

export class EmergencyType extends React.Component {
	state = { ...etype, ...this.props.route.params };

	validateType = () => {
		let nav = false;
		let keyProps = { ...this.state };

		for (let property in this.state) {
			if (this.state[property] === false) {
				continue;
			} else if (this.state[property] === true) {
				nav = true;
				keyProps = {
					...keyProps,
					property: this.state[property],
				};
			}
		}
		if (nav) {
			this.props.navigation.navigate("Final Decision", {
				...keyProps,
				CaseId: this.state.CaseId,
			});
		} else return;
	};

	render() {
		return (
			<ScrollView>
				<Text style={{ margin: 25, fontSize: 20, fontWeight: "bold" }}>
					Select all that apply
				</Text>
				<CheckBox
					title="Per vaginal bleeding or leakage"
					checked={this.state.leakage}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ leakage: !this.state.leakage })
					}
				/>
				<CheckBox
					title="Abdominal pain"
					checked={this.state.pain}
					checkedColor={THEME}
					onPress={() => this.setState({ pain: !this.state.pain })}
				/>
				<CheckBox
					title="Fits"
					checked={this.state.fits}
					checkedColor={THEME}
					onPress={() => this.setState({ fits: !this.state.fits })}
				/>
				<CheckBox
					title="High fever"
					checked={this.state.fever}
					checkedColor={THEME}
					onPress={() => this.setState({ fever: !this.state.fever })}
				/>
				<CheckBox
					title="Excessive vomiting"
					checked={this.state.vomiting}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ vomiting: !this.state.vomiting })
					}
				/>
				<CheckBox
					title="Frequent loose watery / bloody stools"
					checked={this.state.stools}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ stools: !this.state.stools })
					}
				/>
				<CheckBox
					title="Difficulty breathing"
					checked={this.state.dbreathing}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ dbreathing: !this.state.dbreathing })
					}
				/>
				<CheckBox
					title="Confused mental state"
					checked={this.state.mental}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ mental: !this.state.mental })
					}
				/>
				<CheckBox
					title="Yellow eyes"
					checked={this.state.yellowEyes}
					checkedColor={THEME}
					onPress={() =>
						this.setState({ yellowEyes: !this.state.yellowEyes })
					}
				/>

				<TouchableOpacity
					style={[styles.items, routineStyles.submit]}
					onPress={() => this.validateType()}
				>
					<Text style={[styles.white, routineStyles.submitText]}>
						Continue
					</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

export class FinalDecision extends React.Component {
	state = { CaseId: this.props.route.params.CaseId };
	refer = (CaseId) => {
		referForDangerSigns(CaseId);
		this.props.navigation.navigate("Home");
	};

	render() {
		return (
			<TouchableOpacity
				style={[
					styles.items,
					routineStyles.submit,
					{ alignItems: "center", justifyContent: "center" },
				]}
				onPress={() => this.refer(this.state.CaseId)}
			>
				<Text style={[styles.white, routineStyles.submitText]}>
					Refer for danger signs
				</Text>
			</TouchableOpacity>
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
});
