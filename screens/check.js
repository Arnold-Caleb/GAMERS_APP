import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { styles, THEME } from "../styles";

export class CheckScreen extends React.Component {
	state = {
		CaseId: this.props.route.params.CaseId,
		...this.props.route.params,
	};

	refer = (loc) => {
		console.log(this.state);
		this.props.navigation.navigate(loc, { ...this.state });
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
						checkStyles.submit,
						{
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "row",
						},
					]}
					onPress={() =>
						this.refer("Biodata", {
							CaseId: this.state.CaseId,
						})
					}
				>
					{this.props.route.params.bioassertation && (
						<Icon
							name="check"
							size={15}
							color="green"
							style={{ paddingRight: 10 }}
						/>
					)}

					<Text style={[styles.white, checkStyles.submitText]}>
						Patient biodata
					</Text>
				</TouchableOpacity>
				{this.props.route.params.bioassertation && (
					<TouchableOpacity
						style={[
							styles.items,
							checkStyles.submit,
							{ alignItems: "center", justifyContent: "center" },
						]}
						onPress={() => this.refer("Question")}
					>
						<Text style={[styles.white, checkStyles.submitText]}>
							Diagnostic questions
						</Text>
					</TouchableOpacity>
				)}
			</View>
		);
	}
}

const checkStyles = StyleSheet.create({
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
