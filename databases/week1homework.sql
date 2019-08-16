1_Find out how many tasks are in the task table
_ _select count(*) from task ;
2_Find out how many tasks in the task table do not have a valid due date
_ _select id, count (id) from task where due_date is null;
3_Find all the tasks that are marked as done
_ _select status_id, count(id) from task where status_id=3;
4_Find all the tasks that are not marked as done
_ _select status_id, count(id) from task where status_id !=3;
5_Get all the tasks, sorted with the most recently created first
_ _select * from task order by created desc;
6_Get the single most recently created task
_ _ select * from task order by created DESC limit 1; 
7_Get the title and due date of all tasks where the title or description contains database
_ _ select title, due_date from task where title like '%database%' or description like '%database%';
8_Get the title and status (as text) of all tasks
_ _ select task.title, status.name from task inner join status on task.status_id = status.id;
9_Get the name of each status, along with a count of how many tasks have that status
_ _ select status.name, count(task.status_id) from task inner join status on task.status_id = status.id group by status;
