import React from "react";
import { View, ScrollView, RefreshControl, SafeAreaView } from "react-native";

import { styles } from "../styles";
import { Case } from "../components/scase";
import { loadCases, loadHistory } from "../api/gamersapi";

/* History Screen */
export class HistoryScreen extends React.Component {
	state = {
		historyCases: [],
		numberHistory: null,
		refreshing: false,
	};

	componentDidMount() {
		this.LoadHistory();
	}

	LoadHistory = async () => {
		const results = await loadHistory();
		this.setState({ historyCases: results, numberHistory: results.length });
	};

	onRefresh = () => {
		this.setState({ refreshing: true });
		this.LoadHistory();
		this.wait(2000).then(() => this.setState({ refreshing: false }));
	};

	wait = (timeout) => {
		return new Promise((resolve) => {
			setTimeout(resolve, timeout);
		});
	};

	render() {
		return (
			<ScrollView
				contentContainerStyle={styles.body}
				refreshControl={
					<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={this.onRefresh}
					/>
				}
			>
				{this.state.historyCases.map((historyCase) => (
					<Case
						navigation={this.props.navigation}
						profile={historyCase}
						id={historyCase.CaseId}
						key={historyCase.CaseId}
					/>
				))}
			</ScrollView>
		);
	}
}

/* Assigned Cases Screen */
export class AssignedCasesScreen extends React.Component {
	state = {
		pendingCases: [],
		numberPending: null,
		refreshing: false,
	};

	componentDidMount() {
		this.LoadCases();
	}

	LoadCases = async () => {
		const results = await loadCases();
		this.setState({ pendingCases: results, numberPending: results.length });
	};

	onRefresh = () => {
		this.setState({ refreshing: true });
		this.LoadCases();
		this.wait(2000).then(() => this.setState({ refreshing: false }));
	};

	wait = (timeout) => {
		return new Promise((resolve) => {
			setTimeout(resolve, timeout);
		});
	};

	render() {
		return (
			<ScrollView
				contentContainerStyle={styles.body}
				refreshControl={
					<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={this.onRefresh}
					/>
				}
			>
				{this.state.pendingCases.map((pendingCase) => (
					<Case
						navigation={this.props.navigation}
						profile={pendingCase}
						key={pendingCase.CaseId}
					/>
				))}
			</ScrollView>
		);
	}
}
