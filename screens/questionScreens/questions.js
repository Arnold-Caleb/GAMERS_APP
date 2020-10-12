import React from "react";
import {
	View,
	Text,
	KeyboardAvoidingView,
	TextInput,
	StyleSheet,
} from "react-native";
import { RadioButton } from "react-native-paper";

import { styles } from "../../styles";

import { HelperNav } from "../../components/hnav";

// Redux
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

// Data
import { questions } from "../../data/questions";

export class Question1Screen extends React.Component {
	state = { ...questions };

	onChangeText = (text) => {
		this.setState({ name: text });
	};

	render() {
		return (
			<KeyboardAvoidingView
				style={[styles.enquiry, styles.body]}
				behaviour="height"
			>
				<Text>Enter patients name:</Text>
				<TextInput
					style={styles.textInput}
					onChangeText={(text) => this.onChangeText(text)}
					value={this.state.name}
					autoFocus={true}
				/>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 2"
					questions={this.state}
				/>
			</KeyboardAvoidingView>
		);
	}
}

export class Question2Screen extends React.Component {
	state = { ...this.props.route.params };

	onChangeText = (text) => {
		this.setState({ age: text });
	};

	render() {
		return (
			<KeyboardAvoidingView style={[styles.enquiry, styles.body]}>
				<Text>Enter patients age:</Text>
				<TextInput
					style={styles.textInput}
					onChangeText={(text) => this.onChangeText(text)}
					value={this.state.age}
					autoFocus={true}
					keyboardType="numeric"
				/>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 3"
					questions={this.state}
				/>
			</KeyboardAvoidingView>
		);
	}
}

export class Question3Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ gender: val });
	};

	render() {
		return (
			<View style={[styles.body, styles.enquiry]}>
				<Text>What is the patients gender?</Text>
				<View style={radioStyles.row}>
					<RadioButton
						value="male"
						status={
							this.state.gender === "male"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("male")}
					/>
					<Text style={radioStyles.rowText}> Male</Text>
				</View>
				<View style={radioStyles.row}>
					<RadioButton
						value="female"
						status={
							this.state.gender === "female"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("female")}
					/>
					<Text style={radioStyles.rowText}>Female</Text>
				</View>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 4"
					questions={this.state}
				/>
			</View>
		);
	}
}

export class Question4Screen extends React.Component {
	state = { ...this.props.route.params };

	onChangeText = (val) => {
		this.setState({ temp: val });
	};

	render() {
		return (
			<KeyboardAvoidingView style={[styles.enquiry, styles.body]}>
				<Text>What is the patients temperature:</Text>
				<TextInput
					style={styles.textInput}
					onChangeText={(text) => this.onChangeText(text)}
					value={this.state.temp}
					autoFocus={true}
					keyboardType="numeric"
				/>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 5"
					questions={this.state}
				/>
			</KeyboardAvoidingView>
		);
	}
}

export class Question5Screen extends React.Component {
	state = { ...this.props.route.params };

	onChangeText = (val) => {
		this.setState({ weight: val });
	};

	render() {
		return (
			<KeyboardAvoidingView style={[styles.enquiry, styles.body]}>
				<Text>What is the patients' weight:</Text>
				<TextInput
					style={styles.textInput}
					onChangeText={(text) => this.onChangeText(text)}
					value={this.state.weight}
					autoFocus={true}
					keyboardType="numeric"
				/>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 6"
					questions={this.state}
				/>
			</KeyboardAvoidingView>
		);
	}
}

export class Question6Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ fever: val });
	};

	render() {
		return (
			<View style={styles.body}>
				<Text>Does the patient have a fever?</Text>
				<View style={radioStyles.row}>
					<RadioButton
						value="yes"
						status={
							this.state.fever === "yes" ? "checked" : "unchecked"
						}
						onPress={() => this.setChecked("yes")}
					/>
					<Text style={radioStyles.rowText}>Yes</Text>
				</View>
				<View style={radioStyles.row}>
					<RadioButton
						value="no"
						status={
							this.state.fever === "no" ? "checked" : "unchecked"
						}
						onPress={() => this.setChecked("no")}
					/>
					<Text style={radioStyles.rowText}>No</Text>
				</View>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 7"
					questions={this.state}
				/>
			</View>
		);
	}
}

export class Question7Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ feverLength: val });
	};

	render() {
		return (
			<View style={styles.body}>
				<Text>How long has the patient had the fever?</Text>

				<View style={radioStyles.row}>
					<RadioButton
						value="day"
						status={
							this.state.feverLength === "day"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("day")}
					/>
					<Text style={radioStyles.rowText}>A day or less</Text>
				</View>

				<View style={radioStyles.row}>
					<RadioButton
						value="two"
						status={
							this.state.feverLength === "two"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("two")}
					/>
					<Text style={radioStyles.rowText}>2 to 3 days</Text>
				</View>

				<View style={radioStyles.row}>
					<RadioButton
						value="four"
						status={
							this.state.feverLength === "four"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("four")}
					/>
					<Text style={radioStyles.rowText}>4 or more days</Text>
				</View>

				<HelperNav
					navigation={this.props.navigation}
					loc="Question 8"
					questions={this.state}
				/>
			</View>
		);
	}
}

export class Question8Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ bodyWeak: val });
	};

	render() {
		return (
			<View style={styles.body}>
				<Text>Does the patient have general body weakness?</Text>

				<View style={radioStyles.row}>
					<RadioButton
						value="yes"
						status={
							this.state.bodyWeak === "yes"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("yes")}
					/>
					<Text style={radioStyles.rowText}>Yes</Text>
				</View>

				<View style={radioStyles.row}>
					<RadioButton
						value="no"
						status={
							this.state.bodyWeak === "no"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("no")}
					/>
					<Text style={radioStyles.rowText}>No</Text>
				</View>

				<HelperNav
					navigation={this.props.navigation}
					loc="Question 9"
					questions={this.state}
				/>
			</View>
		);
	}
}

export class Question9Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ cough: val });
	};

	render() {
		return (
			<View style={styles.body}>
				<Text>Does the patient cough?</Text>
				<View style={radioStyles.row}>
					<RadioButton
						value="yes"
						status={
							this.state.cough === "yes" ? "checked" : "unchecked"
						}
						onPress={() => this.setChecked("yes")}
					/>
					<Text style={radioStyles.rowText}>Yes</Text>
				</View>
				<View style={radioStyles.row}>
					<RadioButton
						value="no"
						status={
							this.state.cough === "no" ? "checked" : "unchecked"
						}
						onPress={() => this.setChecked("no")}
					/>
					<Text style={radioStyles.rowText}>No</Text>
				</View>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 10"
					questions={this.state}
				/>
			</View>
		);
	}
}

export class Question10Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ looseStool: val });
	};

	render() {
		return (
			<View style={styles.body}>
				<Text>Does the patient pass loose stools?</Text>
				<View style={radioStyles.row}>
					<RadioButton
						value="yes"
						status={
							this.state.looseStool === "yes"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("yes")}
					/>
					<Text style={radioStyles.rowText}>Yes</Text>
				</View>
				<View style={radioStyles.row}>
					<RadioButton
						value="no"
						status={
							this.state.looseStool === "no"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("no")}
					/>
					<Text style={radioStyles.rowText}>No</Text>
				</View>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 11"
					questions={this.state}
				/>
			</View>
		);
	}
}

export class Question11Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ bloodStool: val });
	};

	render() {
		return (
			<View style={styles.body}>
				<Text>Does the patient pass stool in blood?</Text>
				<View style={radioStyles.row}>
					<RadioButton
						value="yes"
						status={
							this.state.bloodStool === "yes"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("yes")}
					/>
					<Text style={radioStyles.rowText}>Yes</Text>
				</View>
				<View style={radioStyles.row}>
					<RadioButton
						value="no"
						status={
							this.state.bloodStool === "no"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("no")}
					/>
					<Text style={radioStyles.rowText}>No</Text>
				</View>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 12"
					questions={this.state}
				/>
			</View>
		);
	}
}

export class Question12Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ vomit: val });
	};

	render() {
		return (
			<View style={styles.body}>
				<Text>Does the patient vomit?</Text>
				<View style={radioStyles.row}>
					<RadioButton
						value="yes"
						status={
							this.state.vomit === "yes" ? "checked" : "unchecked"
						}
						onPress={() => this.setChecked("yes")}
					/>
					<Text style={radioStyles.rowText}>Yes</Text>
				</View>
				<View style={radioStyles.row}>
					<RadioButton
						value="no"
						status={
							this.state.vomit === "no" ? "checked" : "unchecked"
						}
						onPress={() => this.setChecked("no")}
					/>
					<Text style={radioStyles.rowText}>No</Text>
				</View>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 13"
					questions={this.state}
				/>
			</View>
		);
	}
}

export class Question13Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ dbreathing: val });
	};

	render() {
		return (
			<View style={styles.body}>
				<Text>Does the patient have difficulty breathing?</Text>
				<View style={radioStyles.row}>
					<RadioButton
						value="yes"
						status={
							this.state.dbreathing === "yes"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("yes")}
					/>
					<Text style={radioStyles.rowText}>Yes</Text>
				</View>
				<View style={radioStyles.row}>
					<RadioButton
						value="no"
						status={
							this.state.dbreathing === "no"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("no")}
					/>
					<Text style={radioStyles.rowText}>No</Text>
				</View>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 14"
					questions={this.state}
				/>
			</View>
		);
	}
}

export class Question14Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ bodyChills: val });
	};

	render() {
		return (
			<View style={styles.body}>
				<Text>Does the patient have body chills?</Text>
				<View style={radioStyles.row}>
					<RadioButton
						value="yes"
						status={
							this.state.bodyChills === "yes"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("yes")}
					/>
					<Text style={radioStyles.rowText}>Yes</Text>
				</View>
				<View style={radioStyles.row}>
					<RadioButton
						value="no"
						status={
							this.state.bodyChills === "no"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("no")}
					/>
					<Text style={radioStyles.rowText}>No</Text>
				</View>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 15"
					questions={this.state}
				/>
			</View>
		);
	}
}

export class Question15Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ headache: val });
	};

	render() {
		return (
			<View style={styles.body}>
				<Text>Does the patient have a headache?</Text>
				<View style={radioStyles.row}>
					<RadioButton
						value="yes"
						status={
							this.state.headache === "yes"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("yes")}
					/>
					<Text style={radioStyles.rowText}>Yes</Text>
				</View>
				<View style={radioStyles.row}>
					<RadioButton
						value="no"
						status={
							this.state.headache === "no"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("no")}
					/>
					<Text style={radioStyles.rowText}>No</Text>
				</View>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 16"
					questions={this.state}
				/>
			</View>
		);
	}
}

export class Question16Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ bodyPain: val });
	};

	render() {
		return (
			<View style={styles.body}>
				<Text>Does the patient have joint or body pain?</Text>
				<View style={radioStyles.row}>
					<RadioButton
						value="yes"
						status={
							this.state.bodyPain === "yes"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("yes")}
					/>
					<Text style={radioStyles.rowText}>Yes</Text>
				</View>
				<View style={radioStyles.row}>
					<RadioButton
						value="no"
						status={
							this.state.bodypain === "no"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("no")}
					/>
					<Text style={radioStyles.rowText}>No</Text>
				</View>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 17"
					questions={this.state}
				/>
			</View>
		);
	}
}

export class Question17Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ hvomit: val });
	};

	render() {
		return (
			<View style={styles.body}>
				<Text>Does the patient have vomit?</Text>
				<View style={radioStyles.row}>
					<RadioButton
						value="yes"
						status={
							this.state.hvomit === "yes"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("yes")}
					/>
					<Text style={radioStyles.rowText}>Yes</Text>
				</View>
				<View style={radioStyles.row}>
					<RadioButton
						value="no"
						status={
							this.state.hvomit === "no" ? "checked" : "unchecked"
						}
						onPress={() => this.setChecked("no")}
					/>
					<Text style={radioStyles.rowText}>No</Text>
				</View>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 18"
					questions={this.state}
				/>
			</View>
		);
	}
}

export class Question18Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ fbreathing: val });
	};

	render() {
		return (
			<View style={styles.body}>
				<Text>Does the patient have fast breathing?</Text>
				<View style={radioStyles.row}>
					<RadioButton
						value="yes"
						status={
							this.state.fbreathing === "yes"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("yes")}
					/>
					<Text style={radioStyles.rowText}>Yes</Text>
				</View>
				<View style={radioStyles.row}>
					<RadioButton
						value="no"
						status={
							this.state.fbreathing === "no"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("no")}
					/>
					<Text style={radioStyles.rowText}>No</Text>
				</View>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 19"
					questions={this.state}
				/>
			</View>
		);
	}
}

export class Question19Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ iChest: val });
	};

	render() {
		return (
			<View style={styles.body}>
				<Text>Does the patient have an indrawn chest?</Text>
				<View style={radioStyles.row}>
					<RadioButton
						value="yes"
						status={
							this.state.iChest === "yes"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("yes")}
					/>
					<Text style={radioStyles.rowText}>Yes</Text>
				</View>
				<View style={radioStyles.row}>
					<RadioButton
						value="no"
						status={
							this.state.iChest === "no" ? "checked" : "unchecked"
						}
						onPress={() => this.setChecked("no")}
					/>
					<Text style={radioStyles.rowText}>No</Text>
				</View>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 20"
					questions={this.state}
				/>
			</View>
		);
	}
}

export class Question20Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ headNoddling: val });
	};

	render() {
		return (
			<View style={styles.body}>
				<Text>Does the patient have head noddling?</Text>
				<View style={radioStyles.row}>
					<RadioButton
						value="yes"
						status={
							this.state.headNoddling === "yes"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("yes")}
					/>
					<Text style={radioStyles.rowText}>Yes</Text>
				</View>
				<View style={radioStyles.row}>
					<RadioButton
						value="no"
						status={
							this.state.headNoddling === "no"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("no")}
					/>
					<Text style={radioStyles.rowText}>No</Text>
				</View>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 21"
					questions={this.state}
				/>
			</View>
		);
	}
}

export class Question21Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ sunken: val });
	};

	render() {
		return (
			<View style={styles.body}>
				<Text>Does the patient have sunken eye balls?</Text>
				<View style={radioStyles.row}>
					<RadioButton
						value="yes"
						status={
							this.state.sunken === "yes"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("yes")}
					/>
					<Text style={radioStyles.rowText}>Yes</Text>
				</View>
				<View style={radioStyles.row}>
					<RadioButton
						value="no"
						status={
							this.state.sunken === "no" ? "checked" : "unchecked"
						}
						onPress={() => this.setChecked("no")}
					/>
					<Text style={radioStyles.rowText}>No</Text>
				</View>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 22"
					questions={this.state}
				/>
			</View>
		);
	}
}

export class Question22Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ pSkin: val });
	};

	render() {
		return (
			<View style={styles.body}>
				<Text>Does the patient slow pinch skin?</Text>
				<View style={radioStyles.row}>
					<RadioButton
						value="yes"
						status={
							this.state.pSkin === "yes" ? "checked" : "unchecked"
						}
						onPress={() => this.setChecked("yes")}
					/>
					<Text style={radioStyles.rowText}>Yes</Text>
				</View>
				<View style={radioStyles.row}>
					<RadioButton
						value="no"
						status={
							this.state.pSkin === "no" ? "checked" : "unchecked"
						}
						onPress={() => this.setChecked("no")}
					/>
					<Text style={radioStyles.rowText}>No</Text>
				</View>
				<HelperNav
					navigation={this.props.navigation}
					loc="Question 23"
					questions={this.state}
				/>
			</View>
		);
	}
}

export class Question23Screen extends React.Component {
	state = { ...this.props.route.params };

	setChecked = (val) => {
		this.setState({ eDrink: val });
		console.log(this.state);
	};

	render() {
		return (
			<View style={styles.body}>
				<Text>Is the patient eager to drink?</Text>
				<View style={radioStyles.row}>
					<RadioButton
						value="yes"
						status={
							this.state.eDrink === "yes"
								? "checked"
								: "unchecked"
						}
						onPress={() => this.setChecked("yes")}
					/>
					<Text style={radioStyles.rowText}>Yes</Text>
				</View>
				<View style={radioStyles.row}>
					<RadioButton
						value="no"
						status={
							this.state.eDrink === "no" ? "checked" : "unchecked"
						}
						onPress={() => this.setChecked("no")}
					/>
					<Text style={radioStyles.rowText}>No</Text>
				</View>
				<HelperNav
					navigation={this.props.navigation}
					loc="Results"
					questions={this.state}
				/>
			</View>
		);
	}
}

const radioStyles = StyleSheet.create({
	row: {
		flexDirection: "row",
		marginBottom: 8,
	},
	rowText: {
		marginTop: 8,
	},
});
