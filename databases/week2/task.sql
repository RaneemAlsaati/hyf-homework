•	Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID
insert into Task (title,description,created,updated,dueDate,statusID,userID) values ('washing clothes','the white clothes','22-08-2019',now(),'23-08-2019',1,1);
•	Change the title of a task with these attributes: taskID, newTitle
update task set title = 'washing' where id =1;
•	Change the task due date with these attributes: taskID, newDueDate
update task set due_date = '24-09.2019' where id =2;
•	Change the task status with these attributes: taskID, newStatus
update task set status = '6' where id = 9;
•	Mark a task as complete with this attribute: taskID
update task set status = '3' where id = 29;
•	Delete task with this attribute: taskID
              delete from task where id = 2;
