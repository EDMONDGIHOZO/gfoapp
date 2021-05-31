import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import GlobalStyles from "../shared/GlobalStyles";

const Featured = () => {
  return (
    <View style={GlobalStyles.featured}>
      <Text style={GlobalStyles.featuredTitle}> Featured Articles </Text>
    </View>
  );
};

export default Featured;
