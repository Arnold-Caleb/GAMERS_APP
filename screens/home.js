import React from "react";
import {
	View,
	Modal,
	TouchableOpacity,
	Text,
	RefreshControl,
	ScrollView,
	SafeAreaView,
} from "react-native";
import Icons from "react-native-vector-icons/FontAwesome5";
import Icon from "react-native-vector-icons/EvilIcons";

import { styles } from "../styles";
import {
	loadCases,
	referForDangerSignsCHW,
	loadHistory,
} from "../api/gamersapi";

export class HomeScreen extends React.Component {
	state = {
		modalVisible: false,
		refreshing: false,
		numberPending: 0,
		historyPending: 0,
	};

	componentDidMount() {
		this.LoadCases();
	}

	LoadCases = async () => {
		const results = await loadCases();
		this.setState({ numberPending: results.length });
	};

	LoadHistory = async () => {
		const results = await loadHistory();
		this.setState({ historyPending: results.length });
	};

	onRefresh = () => {
		this.setState({ refreshing: true });
		this.LoadCases();
		this.LoadHistory();
		this.wait(2000).then(() => this.setState({ refreshing: false }));
	};

	wait = (timeout) => {
		return new Promise((resolve) => {
			setTimeout(resolve, timeout);
		});
	};

	setModalVisible = (modalvisibility) => {
		this.setState({ modalVisible: modalvisibility });
	};

	refer = (id) => {
		referForDangerSignsCHW(id);
		this.setState({ modalVisible: false });
	};

	render() {
		return (
			<View style={styles.body}>
				<SafeAreaView style={styles.container}>
					<ScrollView
						contentContainerStyle={styles.scrollView}
						refreshControl={
							<RefreshControl
								refreshing={this.state.refreshing}
								onRefresh={this.onRefresh}
							/>
						}
					>
						<Text
							style={{
								margin: 5,
								marginBottom: 40,
								fontSize: 35,
							}}
						>
							Welcome, Arnold
						</Text>
						<View style={styles.stats}>
							<TouchableOpacity style={styles.mx20}>
								<Icons
									style={{ textAlign: "center" }}
									name="align-center"
									size={25}
									color="#000"
								/>
								<Text
									style={[
										styles.theme,
										{ textAlign: "center" },
									]}
								>
									Pending
								</Text>
								<Text
									style={[
										styles.theme,
										{ textAlign: "center" },
									]}
								>
									{this.state.numberPending}
								</Text>
							</TouchableOpacity>

							<TouchableOpacity style={styles.mx20}>
								<Icons
									style={{ textAlign: "center" }}
									name="history"
									size={25}
									color="#000"
								/>
								<Text
									style={[
										styles.theme,
										{ textAlign: "center" },
									]}
								>
									Completed
								</Text>
								<Text
									style={[
										styles.theme,
										{ textAlign: "center" },
									]}
								>
									{this.state.historyPending}
								</Text>
							</TouchableOpacity>

							<TouchableOpacity style={styles.mx20}>
								<Icons
									style={{ textAlign: "center" }}
									name="dollar-sign"
									size={25}
									color="#000"
								/>
								<Text
									style={[
										styles.theme,
										{ textAlign: "center" },
									]}
								>
									Credit
								</Text>
								<Text
									style={[
										styles.theme,
										{ textAlign: "center" },
									]}
								>
									UGX: 30,000
								</Text>
							</TouchableOpacity>
						</View>

						<View style={styles.container}>
							<TouchableOpacity
								style={styles.items}
								onPress={() =>
									this.props.navigation.navigate(
										"Assigned Cases"
									)
								}
							>
								<Text>See assigned cases</Text>
							</TouchableOpacity>

							<TouchableOpacity
								style={[styles.items, styles.red]}
								onPress={() =>
									this.setModalVisible(
										!this.state.modalVisible
									)
								}
							>
								<Text style={styles.white}>
									Request Service
								</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</SafeAreaView>
				<Modal
					animationType="slide"
					transparent={true}
					visible={this.state.modalVisible}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<TouchableOpacity
								onPress={() => this.setModalVisible(false)}
							>
								<Icon
									style={{
										textAlign: "center",
										paddingBottom: 30,
									}}
									name="close"
									size={25}
									color="#612639"
								/>
							</TouchableOpacity>
							<TouchableOpacity
								style={{ ...styles.items }}
								onPress={() => this.refer(34)}
							>
								<Text style={styles.textStyle}>
									Request for transportation
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{ ...styles.items }}
								onPress={() => this.setModalVisible(false)}
							>
								<Text style={styles.textStyle}>
									Request For supplies
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={[styles.items, styles.red]}
								onPress={() => this.setModalVisible(false)}
							>
								<Text style={[styles.textStyle, styles.white]}>
									Consultation
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
			</View>
		);
	}
}
