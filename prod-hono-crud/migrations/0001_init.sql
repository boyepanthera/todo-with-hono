-- Migration number: 0001 	 2024-08-23T23:39:50.321Z

create table if not exists users 
(
    id    TEXT not null primary key,
    email TEXT not null unique,
    hashed_password TEXT
);
create table if not exists sessions 
(
    id         TEXT    not null primary key,
    expires_at INTEGER not null,
    user_id    TEXT    not null
);
