import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
export const THEME = "tomato";

export const styles = StyleSheet.create({
	mx10: {
		marginLeft: 10,
		marginRight: 10,
	},
	mx20: {
		marginLeft: 20,
		marginRight: 20,
	},
	mx30: {
		marginLeft: 30,
		marginRight: 30,
	},
	body: {
		flex: 1,
		padding: 10,
	},
	container: {
		flex: 1,
		alignItems: "flex-end",
		justifyContent: "space-between",
		padding: 5,
		flexDirection: "row",
	},
	items: {
		borderRadius: 25,
		padding: 15,
		borderColor: "#ccc",
		borderWidth: 1,
		marginBottom: 5,
		marginTop: 5,
	},
	stats: {
		backgroundColor: "#fff",
		padding: 10,
		paddingTop: 20,
		paddingBottom: 20,
		marginBottom: 20,
		borderRadius: 20,
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "space-around",
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: THEME,
	},
	details: {
		backgroundColor: "#fff",
		padding: 5,
		paddingTop: 20,
		paddingBottom: 20,
		marginBottom: 20,
		borderRadius: 20,
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "space-around",
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: THEME,
	},
	red: {
		backgroundColor: "tomato",
	},
	black: {
		color: "#000",
		fontSize: 15,
	},
	white: {
		color: "#fff",
		fontSize: 15,
	},
	theme: {
		color: "#5e2608",
		fontSize: 15,
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
		marginTop: "120%",
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		shadowColor: "#000",
		shadowOffset: {
			width: 3,
			height: 20,
		},
		shadowOpacity: 0.9,
		shadowRadius: 100,
		elevation: 2,
	},
	modalView: {},
	openButton: {
		borderRadius: 5,
		padding: 10,
		borderColor: "#ccc",
		borderWidth: 1,
		marginBottom: 5,
		marginTop: 5,
	},
	textStyle: {
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
	enquiry: {
		padding: 10,
	},
	textInput: {
		borderStyle: "solid",
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
		borderColor: THEME,
		marginTop: 5,
	},
});
