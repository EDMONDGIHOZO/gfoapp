import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import GlobalStyles from "../../shared/GlobalStyles";
import Header from "../../components/Header";
import Card from "../../components/tools/Card";
import db from "../../http/db";
import colors from "../../shared/colors";

const Favorites = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [bnumber, setBnumber] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const getData = async () => {
    setRefreshing(true);
    try {
      db.transaction((tx) => {
        tx.executeSql("select * from issuebookmarks", [], (tx, results) => {
          let len = results.rows.length;
          setBnumber(len);
          if (len > 0) {
            const data = results.rows._array;
            setBookmarks(data);
          }
        });
      });
      setRefreshing(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    return () => {};
  }, [bookmarks]);

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Header title={"BOOKMARKS" + " " + bnumber} />
      <ScrollView
        style={GlobalStyles.contents}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => getData()} />
        }
      >
        {bnumber > 0 ? (
          bookmarks.map((b) => {
            return (
              <Card
                title={b.title}
                date={b.date}
                nid={b.nid}
                type={b.type}
                key={b.id}
                updateData={() => getData()}
              />
            );
          })
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{
                fontFamily: "nunito-bold",
                fontSize: 30,
                color: colors.accent,
              }}
            >
              no bookmark available
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;
