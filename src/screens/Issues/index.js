import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	SafeAreaView,
	FlatList,
	ActivityIndicator,
	TextInput,
} from "react-native";
import GlobalStyles from "../../shared/GlobalStyles";
import Background from "../../components/Background";
import Header from "../../components/Header";
import axios from "axios";
import Loading from "../../components/Loading";
import Issue from "./Issue";
import { uidata } from "../../Languages/fr";
import Styles from "./styles";

const Issues = () => {
	const [issues, setIssues] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		setIsLoading(true);
		getData();
		return () => {};
	}, [currentPage]);

	const getData = async () => {
		await axios
			.get("/gfo?page=" + currentPage)
			.then((res) => {
				let page = res.data.page;
				let lastPage = res.data.lastPage;
				let data = res.data.data;
				setIssues(Array.from(new Set(issues.concat(data))));
				setLoaded(true);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const renderFooter = () => {
		return isLoading ? (
			<View style={Styles.loader}>
				<ActivityIndicator size="large" color="#fff" />
			</View>
		) : null;
	};

	const handleLoadMore = () => {
		setCurrentPage(currentPage + 1);
		setIsLoading(true);
	};

	if (loaded) {
		return (
			<SafeAreaView style={GlobalStyles.container}>
				<Header title={uidata.issues} />
				<View style={GlobalStyles.contents}>
					<FlatList
						data={issues}
						onEndReachedThreshold={0.5}
						onEndReached={() => handleLoadMore()}
						keyExtractor={(item) => item.nid.toString()}
						renderItem={({ item, index }) => {
							return (
								<Issue title={item.title} date={item.created} nid={item.nid} />
							);
						}}
						ListFooterComponent={renderFooter}
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
