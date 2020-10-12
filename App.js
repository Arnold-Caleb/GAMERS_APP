import React from "react";
import {
	Button,
	TouchableOpacity,
	Text,
	View,
	TextInput,
	Image,
	ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { HistoryScreen, AssignedCasesScreen } from "./screens/assignedCases";
import { ProfilesScreen } from "./screens/chwprofile";
import { HomeScreen } from "./screens/home";
import { ProfileScreen } from "./screens/profile";
import * as Screen from "./screens/questionScreens/questions";
import { Results } from "./screens/results";
import {
	RoutineScreen,
	EmergencyScreen,
	EmergencyType,
	FinalDecision,
	RoutineCall,
} from "./screens/questionScreens/pregnancy";
import { CheckScreen } from "./screens/check";
import {
	BiodataScreen,
	routineStyles,
} from "./screens/questionScreens/biodata";
import { QuestionnaireScreen } from "./screens/questionScreens/trial";

// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Login
import Icon from "react-native-vector-icons/FontAwesome";

// styles
import { styles } from "./styles";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const CaseStack = createStackNavigator();
const HistoryStack = createStackNavigator();

/*
function CasesStack() {
	return (
		<CaseStack.Navigator>
			<CaseStack.Screen
				name="Question 1"
				component={Screen.Question1Screen}
			/>
			<CaseStack.Screen
				name="Question 2"
				component={Screen.Question2Screen}
			/>
			<CaseStack.Screen
				name="Question 3"
				component={Screen.Question3Screen}
			/>
			<CaseStack.Screen
				name="Question 4"
				component={Screen.Question4Screen}
			/>
			<CaseStack.Screen
				name="Question 5"
				component={Screen.Question5Screen}
			/>
			<CaseStack.Screen
				name="Question 6"
				component={Screen.Question6Screen}
			/>
			<CaseStack.Screen
				name="Question 7"
				component={Screen.Question7Screen}
			/>
			<CaseStack.Screen
				name="Question 8"
				component={Screen.Question8Screen}
			/>
			<CaseStack.Screen
				name="Question 9"
				component={Screen.Question9Screen}
			/>
			<CaseStack.Screen
				name="Question 10"
				component={Screen.Question10Screen}
			/>
			<CaseStack.Screen
				name="Question 11"
				component={Screen.Question11Screen}
			/>
			<CaseStack.Screen
				name="Question 12"
				component={Screen.Question12Screen}
			/>
			<CaseStack.Screen
				name="Question 13"
				component={Screen.Question13Screen}
			/>
			<CaseStack.Screen
				name="Question 14"
				component={Screen.Question14Screen}
			/>
			<CaseStack.Screen
				name="Question 15"
				component={Screen.Question15Screen}
			/>
			<CaseStack.Screen
				name="Question 16"
				component={Screen.Question16Screen}
			/>
			<CaseStack.Screen
				name="Question 17"
				component={Screen.Question17Screen}
			/>
			<CaseStack.Screen
				name="Question 18"
				component={Screen.Question18Screen}
			/>
			<CaseStack.Screen
				name="Question 19"
				component={Screen.Question19Screen}
			/>
			<CaseStack.Screen
				name="Question 20"
				component={Screen.Question20Screen}
			/>
			<CaseStack.Screen
				name="Question 21"
				component={Screen.Question21Screen}
			/>
			<CaseStack.Screen
				name="Question 22"
				component={Screen.Question22Screen}
			/>
			<CaseStack.Screen
				name="Question 23"
				component={Screen.Question23Screen}
			/>
			<CaseStack.Screen
				name="Results"
				component={Results}
				options={{ title: "Diagnosis" }}
			/>
		</CaseStack.Navigator>
	);
}
*/

function HistoryCasesStack() {
	return (
		<HistoryStack.Navigator>
			<HistoryStack.Screen
				name="History Cases"
				component={HistoryScreen}
			/>
		</HistoryStack.Navigator>
	);
}

function MyStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen
				name="Assigned Cases"
				component={AssignedCasesScreen}
			/>
			<Stack.Screen name="Profile" component={ProfileScreen} />
			<Stack.Screen name="Assess patient" component={CheckScreen} />
			<Stack.Screen name="Results" component={Results} />
			<Stack.Screen name="Biodata" component={BiodataScreen} />
			<Stack.Screen name="Question" component={QuestionnaireScreen} />
			<Stack.Screen name="Routine" component={RoutineScreen} />
			<Stack.Screen name="Emergency" component={EmergencyScreen} />
			<Stack.Screen name="Emergency Type" component={EmergencyType} />
			<Stack.Screen name="Final Decision" component={FinalDecision} />
			<Stack.Screen name="Routine Call" component={RoutineCall} />
		</Stack.Navigator>
	);
}

function TabNavigator() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Cases") {
						iconName = focused
							? "ios-information-circle"
							: "ios-information-circle-outline";
					} else if (route.name === "History") {
						iconName = focused ? "ios-list-box" : "ios-list";
					} else if (route.name === "Working Profile") {
						iconName = focused ? "ios-person" : "ios-people";
					}

					// You can return any component that you like here!
					return (
						<Ionicons name={iconName} size={size} color={color} />
					);
				},
			})}
			tabBarOptions={{
				activeTintColor: "tomato",
				inactiveTintColor: "gray",
			}}
		>
			<Tab.Screen name="Cases" component={MyStack} />
			<Tab.Screen name="History" component={HistoryCasesStack} />
			<Tab.Screen name="Working Profile" component={ProfilesScreen} />
		</Tab.Navigator>
	);
}

export default class App extends React.Component {
	state = { isLoggedIn: false };

	render() {
		return (
			<Provider store={store}>
				{this.state.isLoggedIn && (
					<NavigationContainer>
						<TabNavigator />
					</NavigationContainer>
				)}
				{!this.state.isLoggedIn && (
					<View style={{ flex: 1, justifyContent: "center" }}>
						<View>
							<Image
								source={require("./assets/loder.png")}
								style={{
									width: 100,
									height: 100,
									alignSelf: "center",
								}}
								PlaceholderContent={<ActivityIndicator />}
							/>
							<Text
								style={{
									textAlign: "center",
									marginTop: 20,
									fontSize: 16,
								}}
							>
								Saving lives at a click
							</Text>
							<View
								style={{
									margin: 10,
									padding: 10,
									backgroundColor: "#fff",
								}}
							>
								<TextInput
									style={styles.textInput}
									placeholder="CHW ID"
								/>
							</View>
							<View
								style={{
									margin: 10,
									marginTop: 0,
									padding: 10,
									backgroundColor: "#fff",
								}}
							>
								<TextInput
									style={[
										styles.textInput,
										{ backgroundColor: "#fff" },
									]}
									secureTextEntry={true}
									placeholder="Password"
								/>
							</View>
						</View>
						<TouchableOpacity
							onPress={() =>
								this.setState({
									isLoggedIn: !this.state.isLoggedIn,
								})
							}
							style={[routineStyles.submit, styles.items]}
						>
							<Text
								style={[styles.white, routineStyles.submitText]}
							>
								Log in
							</Text>
						</TouchableOpacity>
					</View>
				)}
			</Provider>
		);
	}
}
