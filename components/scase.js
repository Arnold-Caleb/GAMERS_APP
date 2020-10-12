import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { styles } from "../styles";

export class Case extends React.Component {
	render() {
		return (
			<View>
				{this.props.profile.Category === "pregnancy" && (
					<TouchableOpacity
						style={[
							styles.items,
							{ backgroundColor: "tomato", flexDirection: "row" },
						]}
						onPress={() =>
							this.props.navigation.navigate("Profile", {
								...this.props.profile,
							})
						}
					>
						<Icon name="pregnant-woman" color="#fff" size={20} />
						<Text style={{ color: "#fff" }}>
							Case {this.props.profile.CaseId}
						</Text>
					</TouchableOpacity>
				)}
				{this.props.profile.Category === "child" && (
					<TouchableOpacity
						style={[
							styles.items,
							{
								backgroundColor: "#c4b9b5",
								flexDirection: "row",
							},
						]}
						onPress={() =>
							this.props.navigation.navigate("Profile", {
								...this.props.profile,
							})
						}
					>
						<Icon name="child-care" color="#fff" size={20} />
						<Text>Case {this.props.profile.CaseId}</Text>
					</TouchableOpacity>
				)}
				{this.props.profile.Category === "adultmale" && (
					<TouchableOpacity
						style={[
							styles.items,
							{
								backgroundColor: "#c4b9b5",
								flexDirection: "row",
							},
						]}
						onPress={() =>
							this.props.navigation.navigate("Profile", {
								...this.props.profile,
							})
						}
					>
						<Icon name="person" color="#fff" size={20} />
						<Text>Case {this.props.profile.CaseId}</Text>
					</TouchableOpacity>
				)}
				{this.props.profile.Category === "adultfemale" && (
					<TouchableOpacity
						style={[
							styles.items,
							{
								backgroundColor: "#c4b9b5",
								flexDirection: "row",
							},
						]}
						onPress={() =>
							this.props.navigation.navigate("Profile", {
								...this.props.profile,
							})
						}
					>
						<Icon name="person" color="#fff" size={20} />
						<Text>Case {this.props.profile.CaseId}</Text>
					</TouchableOpacity>
				)}
			</View>
		);
	}
}
