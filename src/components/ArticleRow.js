import React from 'react'
import {View, Text} from 'react-native'
import GlobalStyles from "../shared/GlobalStyles";

const ArticleRow = ({title, date}) => {
    return (
        <View style={GlobalStyles.articleRow}>
           <View style={GlobalStyles.datebox}>
               <Text style={GlobalStyles.featuredDate}>{date}</Text>
           </View>
            <View style={GlobalStyles.titleContainer}>
                <Text style={GlobalStyles.articleTitle}>
                    {title}
                </Text>
            </View>
        </View>
    )

}

export default ArticleRow
