# MovieApp

* Description
* Technologies
* Database Schema
* Jenkins Setup

:warning: **If you come here from the HackerNoon blog post, it's currently on maintenance and will be changed soon to match these repositories versions**

## Description

MovieApp is a small CRUD app that allows you to manage your movies.

## Technologies

* Front End
	* React
* Back End 
	* Flask RESTful
* Database
	* MariaDB

## Database Schema

### Categories Table

| Field | Type         | Null | KEY     | Default | Extra          |
|-------|--------------|------|---------|---------|----------------|
| id    | int          | no   | primary |         | auto_increment |
| name  | varchar(100) | no   |         |         | unique         |

### Movies Table

| Field       | Type         | Null | KEY     | Default     | Extra          |
|-------------|--------------|------|---------|-------------|----------------|
| id          | int          | no   | primary |             | auto_increment |
| title       | varchar(100) | no   |         |             | unique         |
| image       | varchar(100) | no   |         | default.png |                |
| rating      | float        | no   |         |             |                |
| category_id | int          | no   | foreign |             |                |

## Jenkins Setup

You will need for Jenkins the following env variables.
```bash
remoteUser -> string
remoteHost -> string ( IP Address )
registry -> string
database_root_password -> password
database_name -> string
database_user -> string
database_password -> password
```
