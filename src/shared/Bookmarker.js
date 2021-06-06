import db from "../http/db";

export async function Bookmarker(title, date, nid, type) {
  if (title.length == 0 || date.length == 0 || nid.length == 0) {
    return;
  } else {
    try {
      await db.transaction(async (tx) => {
        await tx.executeSql(
          "INSERT INTO issuebookmarks (id,title, nid, type, date) VALUES (?,?, ?,?,?)",
          [nid, title, nid, type, date]
        );
      });
      alert("saved it");
    } catch (error) {
      console.log(error);
    }
  }
}
