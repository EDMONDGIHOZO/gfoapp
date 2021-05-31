import React from "react";
import {View, Image, SafeAreaView, StyleSheet} from "react-native";
import GlobalStyles from "../../shared/GlobalStyles";
import Header from "../../components/Header";
import CurrentIssue from "../Issues/CurrentIssue";
import Tags from "../../components/Tags";
import Featured from "../../components/FeaturedArticles";
import {ScrollView} from "react-native-gesture-handler";


const BG_IMG = require('../../../assets/images/bg.jpg')

const Home = () => {
    return (
        <SafeAreaView style={GlobalStyles.container}>
            <Image  source={BG_IMG} style={StyleSheet.absoluteFillObject} blurRadius={20}/>
            <Header title={"Welcome to Aidspan"}/>
            <ScrollView>
                <View style={GlobalStyles.contents}>
                    <CurrentIssue/>
                    <Tags/>
                    <Featured/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
