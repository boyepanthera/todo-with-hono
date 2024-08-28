-- Migration number: 0004 	 2024-08-28T13:52:30.047Z
alter table todos add column is_completed boolean default false;