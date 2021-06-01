import React from "react";
import Settings from "../screens/Settings";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import GlobalStyles from "../shared/GlobalStyles";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => {
	return (
		<Navigator headerMode={"screen"}>
			<Screen
				name="Home"
				component={Home}
				options={{
					headerTitleStyle: GlobalStyles.headerTitle,
				}}
			/>
			<Screen name="Settings" component={Settings} />
		</Navigator>
	);
};

export default HomeStack;
