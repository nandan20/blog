CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL
);
INSERT INTO posts (title, content) VALUES ('Hello World', 'This is the first post.');
