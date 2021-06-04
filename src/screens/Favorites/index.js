import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, FlatList } from "react-native";
import GlobalStyles from "../../shared/GlobalStyles";
import Header from "../../components/Header";
import Card from "../../components/tools/Card";
import db from "../../http/db";

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
      <ScrollView style={GlobalStyles.contents}>
        {bookmarks.map((b) => {
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
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;
