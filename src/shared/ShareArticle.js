import { Share } from "react-native";

export async function shareArticle(nid, title) {
  try {
    const result = await Share.share({
      message: ` title: ${title} -  link: https://aidspan.org/issues/${nid} - download the app : https://playstore.com/aidspanapp`,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
}
