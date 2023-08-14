CREATE TABLE department(
    department_id int PRIMARY KEY,
    department_name varchar2(50)
);

CREATE TABLE employee(
    emp_num int ,
    emp_name varchar2(50),
    department_id int,
    salary int,
    joining_year int,
    email varchar(20)
);

create table increment_salary(
    emp_name varchar(20),
    salary_increment varchar(20),
    emp_num int primary key
);



create table teacher(
    teacher_id int primary key,
    teacher_name varchar2(50)
);

create table students(
    std_id int primary key,
    teacher_id int,
    FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id)
);

insert into teacher values(1001, 'Ajay');
insert into teacher values(1002, 'Naveen');
insert into teacher values(1003, 'Kamal');
insert into teacher values(1004, 'Ashish');
insert into teacher values(1005, 'Manish');



insert into students values(101,1001);
insert into students values(102,1002);
insert into students values(103,1003);
insert into students values(104,1004);
insert into students values(105,1005);



insert into department values(101,'IT');
insert into department values(102,'Maths');
insert into department values(103,'Physics');
insert into department values(104,'CS');
insert into department values(105,'ECE');

insert into employee values (1,'Ramesh',101,30000,2018,'ramesh1@gmail.com');
insert into employee values (2,'Suresh',102,32000,2019,'suresh2@gmail.com');
insert into employee values (2,'Suresh',102,32000,2019,'suresh2@gmail.com');
insert into employee values (3,'Paresh',103,27000,2021,'paresh3@gmail.com');
insert into employee values (4,'Mahesh',104,35000,2022,'mahesh4@gmail.com');
insert into employee values (5,'Haresh',105,25000,2023,'haresh5@gmail.com');

insert into increment_salary values('Ramesh',5000,1);
insert into increment_salary values('Suresh',2000,2);
insert into increment_salary values('Paresh',3000,3);
insert into increment_salary values('Mahesh',1000,4);
insert into increment_salary values('Haresh',9000,5);

select * from department;
select * from students;
select * from teacher;
select * from increment_salary;
select * from employee;


-- --1
-- SELECT salary
-- from employee
-- order by salary desc
-- offset 1 rows fetch next 1 rows only;

select * from teachers group by teacher_id,teacher_name having
count(teacher_id)>1;

--3
-- select Emp_name,Salary/12 as Monthly_Salary 
-- from employee;

--4
-- SELECT *
-- from employee
-- fetch next 1 rows only;

--5
-- SELECT *
-- from department
-- order by department_id Desc
-- fetch next 1 rows only;

--6
-- SELECT *
-- from employee
-- fetch next 5 rows only;

--7
-- SELECT salary
-- from employee
-- order by salary desc
-- fetch next 3 rows only;

--8
--CREATE TABLE new_table like employee;

--9
-- select *
-- from employee
-- fetch first 50 percent rows only;

--10
-- select teacher_id,teacher_name,std_id
-- from teacher,students
-- where teacher.teacher_id=students.teacher_id;

--11
-- select *
-- from employee
-- where department_id=null;

--12
-- SELECT * FROM increment_salary
-- INTERSECT
-- SELECT * FROM increment_salary;

--13
-- select *
-- from employee
-- where emp_name='Ramesh' or emp_name='Haresh';

--14
-- select *
-- from employee
-- where emp_name!='Ramesh' and emp_name!='Haresh';

--15
-- Select Substr('ABCDE',Level,1) From Dual
-- Connect By Level<= Length('ABCDE');

--16
-- select *
-- from employee
-- where joining_year='2017';

--17
-- Select department_id,max(salary) from Employee group by department_id;

--18
-- select *
-- from employee
-- where joining_year='2016' and salary>=10000;

--19
-- DECLARE
--   N NUMBER := 7;
--   I NUMBER;
--   J NUMBER;
-- BEGIN
--   FOR I IN 1..N
--   LOOP
--     FOR J IN 1..I
--     LOOP
--       DBMS_OUTPUT.PUT('*') ; -- printing *
--     END LOOP;
--     DBMS_OUTPUT.NEW_LINE; -- for new line
--   END LOOP;
-- END;
-- Program End 

--20
-- SELECT
-- email
-- FROM
-- employee
-- where NOT REGEXP_LIKE(Email, '[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}', 'i');

--21
-- DECLARE
--   N NUMBER := 100;
--   I NUMBER;
-- BEGIN
--   FOR I IN 1..N
--   LOOP
--       DBMS_OUTPUT.PUT(I) ; 
--       DBMS_OUTPUT.NEW_LINE;
--     END LOOP;
-- END;

select emp_num,emp_name,count(*) from Employee group by emp_num,emp_name
having count(emp_num)>1;
Delete FROM employee WHERE ROWID not in
(Select min (rowid) from employee group by emp_num);

--22
-- SELECT count(COUNT(emp_num)) as dublicate_num
-- FROM employee
-- GROUP BY emp_num,emp_name,department_id,salary,joining_year,email
-- HAVING COUNT(emp_num) > 1;

--24
--1
select teacher.TEACHER_ID,teacher.TEACHER_NAME,students.STD_ID
from teacher
inner join students
on teacher.teacher_id=students.teacher_id;
--2
select teacher.TEACHER_ID,teacher.TEACHER_NAME,students.STD_ID
from teacher
left join students
on teacher.teacher_id=students.teacher_id;


select teachers.*,students.* from students right join teachers on
students.teacher_id=teachers.teacher_id;

select teachers.*,students.* from students left join teachers on
students.teacher_id=teachers.teacher_id
union
select teachers.*,students.* from students right join teachers on
students.teacher_id=teachers.teacher_id;



select * from department;

select Employee.*,department.department_name from Employee,department
where Employee.department_id=department.department_id;


select department.*,employee.emp_name from Employee,department where
Employee.department_id=department.department_id;


elect * from employee inner join department on
employee.department_id=department.department_id inner join increment on
employee.emp_num=increment.emp_num;










