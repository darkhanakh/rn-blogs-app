import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('post.db');

export default class Database {
  static init = () =>
    new Promise((res, rej) =>
      db.transaction(tx =>
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, img TEXT NOT NULL, date TEXT NOT NULL, booked INTEGER)',
          [],
          res,
          (_, error) => rej(error)
        )
      )
    );

  static getPosts = () =>
    new Promise((res, rej) =>
      db.transaction(tx =>
        tx.executeSql(
          'SELECT * FROM posts',
          [],
          (_, result) => res(result.rows._array),
          (_, e) => rej(e)
        )
      )
    );

  static createPost = ({ text, date, booked, img }) =>
    new Promise((res, rej) =>
      db.transaction(tx =>
        tx.executeSql(
          `INSERT INTO posts (text, date, booked, img) VALUES (?, ?, ?, ?)`,
          [text, date, 0, img],
          (_, result) => res(result.insertId),
          (_, e) => rej(e)
        )
      )
    );

  static updatePost = p =>
    new Promise((res, rej) =>
      db.transaction(tx =>
        tx.executeSql(
          'UPDATE posts SET booked = ? WHERE id = ?',
          [p.booked ? 0 : 1, p.id],
          res,
          (_, e) => rej(e)
        )
      )
    );

  static removePost = id =>
    new Promise((res, rej) =>
      db.transaction(tx =>
        tx.executeSql('DELETE FROM posts WHERE id = ?', [id], res, (_, e) =>
          rej(e)
        )
      )
    );
}
