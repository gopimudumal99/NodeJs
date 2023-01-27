# MYSQL & SQL

1. MYSQL Workbench

- it provides a graphical tool for working with MySQL servers and databases. (We can run the SQL Command ). Storing,
  Manipulating, Retrieving Data in Database.

2. MYSQL Shell
3. MYSQL Server.

# SQL Introduction.

- SQL stands for Structured Query Language.
- SQL is a standard language for accessing and manipulating databases.
- SQL can execute queries against a database
- SQL can retrieve data from a database
- SQL can insert records in a database
- SQL can update records in a database
- SQL can delete records from a database
- SQL can create new databases
- SQL can create new tables in a database

Important Question for Interview

|                                        DBMS                                        |                    RDBMS                    |
| :--------------------------------------------------------------------------------: | :-----------------------------------------: |
|                             Database management system                             |    Relational database management system    |
|                         In DBMS Data are Stored as a File.                         | In RDBMS Data are stored in a Tabular Form. |
|                      Normalization is not Available in DBMS.                       |    Normalization is Available in RDBMS.     |
|                            It Allow one user at a time.                            |   It Allows more than one user at a time.   |
|          Hierarchal Arrangement of data. (tree structure form data store)          | Stores Data in the form of Rows and Column. |
| It Does not Support ACID [Atomicity, Consistency, Isolation, Durability.] Property |          It Support ACID Property.          |
|                   It Does Not support Client Server Architecture                   |    It support Client Server Architecture    |

## 1. Create Table

```sql
        create table learnSql.employer
            (
            pernsonId int,
            firstName varchar(255),
            lastName varchar(255),
            city varchar(255),
            salary int
            );
```

## 2. INSERT INTO

- it is used to insert new records in a table

```sql
    insert into learnSql.employer(pernsonId,firstName,lastName,city,salary) values (1,'gopi','mudumal','pune','2000');
    insert into learnSql.employer(pernsonId,firstName,lastName,city,salary) values (2,'sagar','kalashetty','pune','1000');
    insert into learnSql.employer(pernsonId,firstName,lastName,city,salary) values (3,'bheem','raya','yadgir','2000');
    insert into learnSql.employer(pernsonId,firstName,lastName,city,salary) values (4,'sameer','sab','banglore','1500');
    insert into learnSql.employer(pernsonId,firstName,lastName,city,salary) values (5,'sushma','gouda','kormangal','2300');
    insert into learnSql.employer(pernsonId,firstName,lastName,city,salary) values (6,'ramya','mandya','mandya','2000');
    insert into learnSql.employer(pernsonId,firstName,lastName,city,salary) values (7,'narendra','nani','hydrabad','2000');
    insert into learnSql.employer(pernsonId,firstName,lastName,city,salary) values (8,'chaithra','shree','banglore','1900');

    SELECT * FROM learnSql.employer;
```

## 3. AND & OR operator

```sql
    SELECT * from learnSql.employer where firstName = 'gopi' AND lastName = 'mudumal';

    -- no case sensitive
    SELECT * FROM learnSql.employer WHERE firstName = 'sagar' and LastName = 'kalasHetty';
```

## 4. WHERE CLause

- it is used to extract only those records that fullfil a specified criterion

```sql
    select from * learnSql.employer where pernsonId = 3
```

## 5. Order By

- it is used to sort the result set by specified column

```sql
    -- is order is default is ascending
    select * from learnSql.employer order by salary;

    -- if you want descending order
    select * from learnSql.employer order by salary desc;
```

## 6. Distinct statement

- in a table some of columns have duplicate values this is not a problem. sometimes you want to list only the different values in a table

```sql
    select distinct(lastName) from learnSql.employer;
```

## 7. Delete statement

- it is used to delete row in table

```sql
    DELETE FROM learnSql.employer WHERE pernsonId=3;

    use learnSql;
    select * from employer;
```

## 8. Date Time

```sql
    select now(),curdate(),curtime()
```

## 9. Delete entire table

```sql
    DROP TABLE orders;
```

## 10. Functions.

- **AVG()** => SELECT AVG(column_name) from table_name;
- **COUNT()** => SELECT COUNT(column_name) from table_name;
- **LCASE()** => SELECT LCASE(column_name) from table_name;
- **MAX()** => SELECT MAX(column_name) from table_name;
- **MIN()** => SELECT MIN(column_name) from table_name;
- **SUM()** =>SELECT SUM(column_name) FROM table_name WHERE condition;
- **ROUND()** =>SELECT column_name, ROUND(column_name, decimals) from table_name;
- **SUBSTRING()** => is used to get part of a String.
  SELECT LastName, SUBSTR(FirstName,1,1) AS Initial from Persons;
- **UCASE()** =>SELECT UCASE(column_name) from table_name;`
- **REPLACE()** => SELECT REPLACE(CustomerName, "Brown', "Hello") from Orders;

```sql
    use learnSql;
    select max(salary) from employer;
    select min(salary) from employer;
    select sum(salary) from employer;
    select avg(salary) from employer;
    select ucase(firstName) from employer;
    select lcase(firstName) from employer;
    select firstName, substr(ucase(lastName),1,1) from employer;
```

## 11. GROUP BY Statement.

- GROUP BY Statement is used in conjunction with the aggregate functions to group the result set by one or more columns.
  SELECT column_name(s), FROM table_name
  WHERE condition GROUP BY column_name(s)

  ```sql
    use learnSql;
    create table orders
    (
    o_id int,
    orderPrice int,
    customer varchar(255)
    );
    insert into orders (o_id,orderPrice,customer) values (1,122,'gopi');
    insert into orders (o_id,orderPrice,customer) values (2,132,'sushma');
    insert into orders (o_id,orderPrice,customer) values (3,189,'gopi');
    insert into orders (o_id,orderPrice,customer) values (4,200,'nani');
    insert into orders (o_id,orderPrice,customer) values (5,322,'gopi');
    insert into orders (o_id,orderPrice,customer) values (6,222,'sushma');
    insert into orders (o_id,orderPrice,customer) values (7,122,'nani');
    insert into orders (o_id,orderPrice,customer) values (8,314,'sagar');
    insert into orders (o_id,orderPrice,customer) values (9,421,'bheem');
    insert into orders (o_id,orderPrice,customer) values (10,121,'bheem');

    select * from orders
  ```

### 1). find the total sum(total orders) from each customer

````sql
    select customer, sum(orderPrice) from orders group by customer;```
````

## 12. HAVING Clause

- THE HAVING clause was added to SQL because the Where keyword cannot be used with aggregate functions.

### 2). we have find any one of the customers have a total order of more than 500

````sql
    select customer, sum(orderPrice) from orders group by customer having sum(orderPrice) > 500;```
````

## 13. 12. ALTER TABLE STATEMENT

- ALTER TABLE statement is used to add, delete, or modify columns in an existing table.
- To Add a Column in a table -> (ALTER TABLE table_name ADD column_name datatypes)
- To delete a column in a table -> (ALTER TABLE table_name drop column column_name)
- To change the data types of a column in a table -> (ALTER TABLE table_name modify column column_name datatypes).

```sql
    alter table orders add column location varchar(255);
    alter table orders modify column location varchar(200);
    alter table orders drop column location;
```

## 14. ALIAS

- SQL ALIAS - you can give a table or a column another name by using an alias,
- Select Column_name as alias_name from table_name

```sql
    select location as loc from orders;
```

## 15. DROP

```sql
    drop database databaseName;
    drop table table_name
```

## 16. Between operator

- The Between Operator is used in a where Clause to select a range of data between two values. Begin and end value are
  included.

```sql
  select * from orders where orderPrice between 100 and 200;
```

## 17. IN Operator.

- IN Operator allows you to specify multiple values in a where clause. The number of values in the parenthesis can be one or more,
  with each values separated by comma.

```sql
    select * from orders where customer in ('gopi','sushma');
```

## 18. SQL LIKE Operator

- The SQL Like Operator is used in a Where CLAUSE to search for a specified Pattern in a column.
- WHERE CustomerName LIKE (a%' Finds any values that start with "a"
- WHERE CustomerName LIKE '%a' Finds any values that end with "a"
- WHERE CustomerName LIKE '%or%' Finds any values that have "on" in any position
- WHERE CustomerName LIKE '\_' Finds any values that have "r" in the second position
- WHERE CustomerName LIKE 'a\_%' Finds any values that start with ta and are at least 2 characters
- in length.
- WHERE CustomerName LIKE 'a\_\_\_\_%' Finds any values that start with "a" and are at least 3 characters
  in length.
- WHERE Contact Name LIKE 'a%o' Finds any values that start with "a" and ends with "o"

```sql
    select * from orders where customer like "g%";
```

## 19. TRUNCATE Command

- The SQL TRUNCATE TABLE command is used to delete complete data from an existing table.

```sql
    truncate table table_name
```

## 20. UPDATE Command

- The Update statement is used to update records in a table.

```sql
-- UPDATE table_name.
-- SET column1 = value1, column2 = value2, ...
-- WHERE condition;

-- UPDATE Customers
-- SET ContactName='Juan'
-- WHERE Country='Mexico';

update orders
set orderPrice = 200
where o_id=1;

```

## 20. Constraint

- SQL Constraints are used to specify rules for the data in a table.

**NOT NULL** - Ensures that a column cannot have a NULL value
**UNIQUE**- Ensures that all values in a column are different
**PRIMARY KEY** - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
**FOREIGN KEY** - Prevents actions that would destroy links between tables
**CHECK** Ensures that the values in a column satisfies a specific condition
**DEFAULT** - Sets a default value for a column if no value is specified

```sql
use learnSql;
create table Users
(
id int not null unique,
personName varchar(255),
location varchar(255),
age int,
check(age>=18)
);

insert into users(id,personName,location,age) values (1,"gopi","raichur",22);

insert into users(id,personName,location,age) values (2,"sagar","pune",27);

select * from users;
```

## 25. Foreign Key

- A FOREIGN KEY is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in
  another table.

- The table with the foreign key is called the child table, and the table with the primary key is called the referenced or parent
  table.

````sql
CREATE TABLE Orders (
OrderID int NOT NULL,
OrderNumber int NOT NULL,
PersonID int,
PRIMARY KEY (OrderID),
FOREIGN KEY (PersonID) REFERENCES Persons (PersonID)
);```
````
