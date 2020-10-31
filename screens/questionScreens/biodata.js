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
//import { biodata } from "../../data/biodata";

import { styles, THEME } from "../../styles";
import { addBiodata } from "../../api/gamersapi";

export class BiodataScreen extends React.Component {
	state = {
		//...biodata,
		caseId: this.props.route.params.CaseId,
		bioassertation: false,
		biodata : [
			{field:"caseId", value: this.props.route.params.CaseId},
			{field: "mother", value: true},
			{field:"father", value: false},
			{field: "children", value: 0},
			{field: "boys", value: 0},
			{field: "girls", value: 0},
			{field: "familyType", value: null},
			{field: "birthIndex", value: null},
			{field: "disability", value: true},
			{field: "disabilityDescription", value: null}
			]

	};
  
	biodataContinue = async() => {
		console.log(this.state);
		const newbiodata = [...this.state.biodata];
		alert("Sending data, please wait...");

		const result = await addBiodata(newbiodata);
		if(result ==="success"){
			this.props.navigation.navigate("Home", { ...this.state });
		}
		
	};

	updateValue = (newvalue,field)=>{
		
		let newbio = [...this.state.biodata];
		const index = newbio.findIndex(obj => obj.field === field );
		newbio[index] = {...newbio[index], value :newvalue }
		this.setState({biodata:newbio});
	}
	currentValue = (field)=>{
		let newbio = [...this.state.biodata];
		const index = newbio.findIndex(obj => obj.field === field );
		const property = newbio[index].value;
		return property;
	}

	
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
						checked={this.currentValue("mother")}
						checkedColor={THEME}
						onPress={() =>	
							this.updateValue(!this.currentValue("mother"),"mother")
						}
					/>
					<CheckBox
						title="Is the patiet's Father alive?*"
						checked={this.currentValue("father")}
						checkedColor={THEME}
						onPress={() =>this.updateValue(!this.currentValue('father'),"father")	}
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
								this.updateValue(text,"children")
							}
							value={this.currentValue("children")}
							keyboardType="numeric"
						/>
					</View>
					{this.currentValue("children") > 0 && (
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
										this.updateValue(text,"girls")
									}
									value={this.currentValue('girls')}
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
										this.updateValue(text,'boys')
									}
									value={this.currentValue('boys')}
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
								this.updateValue(text,"familyType")
							}
							value={this.currentValue('familyType')}
						/>
					</View>

					<View
						style={{
							margin: 10,
							padding: 10,
							backgroundColor: "#fff",
						}}
					>
						<Text>What is the patients birth index?*</Text>
						<TextInput
							style={styles.textInput}
							onChangeText={(text) =>
								this.updateValue(text,"birthIndex")
							}
							value={this.currentValue('birthIndex')}
						/>
					</View>
					<CheckBox
						title="Does the patient have any disability?*"
						checked={this.currentValue('disability')}
						checkedColor={THEME}
						onPress={() =>
							this.updateValue(!this.currentValue('disability'),"disability")
						}
					/>

					{this.currentValue("disability") && (
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
									this.updateValue(text,"disabilityDescription")
								}
								value={this.currentValue("disabilityDescription")}
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
