import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import GlobalStyles from "../../shared/GlobalStyles";
import Background from "../../components/Background";
import Header from "../../components/Header";
import axios from "axios";
import Loading from "../../components/Loading";
import Styles from "./styles";
import Issue from "./Issue";

const Issues = () => {
	const [issues, setIssues] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		axios.get("/gfo").then((res) => {
			let page = res.data.page;
			let lastPage = res.data.lastPage;
			let data = res.data.data;
			setIssues(data);
			setLoaded(true);
		});
	}, []);

	if (loaded) {
		return (
			<SafeAreaView style={GlobalStyles.container}>
				<Background />
				<Header title={"ALL ISSUES"} />
				<View style={GlobalStyles.contents}>
					<FlatList
						data={issues}
						keyExtractor={(item) => item.uuid}
						renderItem={({ item, index }) => {
							return (
								<Issue title={item.title} date={item.created} nid={item.nid} />
							);
						}}
					/>
				</View>
			</SafeAreaView>
		);
	} else {
		return (
			<SafeAreaView style={GlobalStyles.container}>
				<Background />
				<Loading percentage={100} />
			</SafeAreaView>
		);
	}
};

export default Issues;
