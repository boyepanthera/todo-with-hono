-- Migration number: 0003 	 2024-08-28T13:36:58.314Z
create table if not exists todos 
(
    id    INTEGER not null primary key,
   content TEXT

);