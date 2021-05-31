import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import GlobalStyles from "../shared/GlobalStyles";

const Tags = () => {
  const [Tags, setTags] = useState([
    {
      key: "fddsa",
      title: "Chogm",
    },
    {
      key: "fddsea",
      title: "Hiv",
    },
    {
      key: "fdwdsa",
      title: "Tuberlclosis",
    },
    {
      key: "fddsdrtsa",
      title: "Malaria",
    },
    {
      key: "fddswdsa",
      title: "Kenya",
    },
    {
      key: "fdd2sdsa",
      title: "Kigali",
    },
  ]);

  const viewTag = (key) => {
    console.log(key);
  };

  return (
    <View style={GlobalStyles.tags}>
      <Text style={GlobalStyles.title}> NEW TAGS </Text>
      <FlatList
        horizontal
        data={Tags}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => viewTag(item.key)}>
            <View style={GlobalStyles.button}>
              <Text style={GlobalStyles.buttonText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Tags;
