import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import GlobalStyles from "../../shared/GlobalStyles";
import Header from "../../components/Header";
import colors from "../../shared/colors";
import { Button } from "react-native-paper";
import Card from "../../components/tools/Card";
import axios from "axios";

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [visible, setVisible] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChangeSearch = (query) => setSearchQuery(query);

  const search = async () => {
    setLoading(true);
    await axios.get(`/searcher?query=${searchQuery}`).then((response) => {
      const message = response.data.message;
      const data = response.data.data;
      const filtered = data.filter(
        (node) => node.type === "gfo_article" || node.type === "gfo_issue"
      );
      if (message !== "no data found found") {
        setResults(filtered);
        setVisible(true);
        setLoading(false);
      } else {
        setLoading(false);
        setVisible(true);
      }
    });
  };

  return (
    <View style={GlobalStyles.container}>
      <Header title={"search"} />
      <ScrollView style={GlobalStyles.contents}>
        <TextInput
          style={GlobalStyles.input}
          onChangeText={onChangeSearch}
          placeholder={"eg: 'Maralia' or 'Issue 300' "}
          value={searchQuery}
        />
        <View style={GlobalStyles.cardFooter}>
          <Button
            icon="text-search"
            mode="contained"
            loading={loading}
            disabled={searchQuery === "" ? true : false}
            color={colors.main}
            labelStyle={{ fontFamily: "nunito-bold", color: "#fff" }}
            style={{ height: 50, justifyContent: "center", width: 200 }}
            onPress={() => search()}
          >
            search
          </Button>
          <Button
            icon="text-search"
            mode="contained"
            color={colors.secondary}
            labelStyle={{ fontFamily: "nunito-bold", color: "#fff" }}
            style={{ height: 50, justifyContent: "center", maxWidth: 120 }}
            onPress={() => setSearchQuery("")}
          >
            clear
          </Button>
        </View>

        {visible ? (
          <View style={{ paddingTop: 10 }}>
            <Text
              style={{
                fontFamily: "nunito-extra-bold",
                fontSize: 20,
                color: colors.accent,
                textAlign: "right",
              }}
            >
              {results.length} results
            </Text>
            {results.map((res) => {
              return (
                <Card
                  title={res.title}
                  date={res.changed}
                  nid={res.nid}
                  type={res.type}
                  key={res.nid.toString()}
                  writer={res.field_article_author_value}
                  fromSearch={true}
                />
              );
            })}
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Search;
