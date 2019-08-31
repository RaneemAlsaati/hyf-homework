create database meals;
use Meals;
create Table Meal(
 `id` int(10) unsigned not null,
 `title` varchar(255) not null,
 `description` text null default null,
 `location `  varchar (255) not null,
 `when` datetime not null,
 `max_reservations` int (10) unsigned not null,
 `price` decimal (20,2) not null,
 `created_date` date not null,
primary key (`id`)
) engine= innodb default charset= utf8mb4 collate=utf8mb4_unicode_ci;


create Table Reservation(
 `id` int(10) unsigned not null,
 `number_of_guests` int (10) unsigned not null,
 `meal_id` int (10) unsigned not null,
 `created_date `date not null,
primary key (`id`),
CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE 
) engine= innodb default charset= utf8mb4 collate=utf8mb4_unicode_ci;

create Table Review(
 `id` int(10) unsigned not null,
 `title` varchar(255) not null,
 `description` text null default null,
 `meal_id` int(10) unsigned not null,
 `stars` int(10) unsigned not null,
`created_date` date not null,
primary key (`id`),
CONSTRAINT `bk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
) engine= innodb default charset= utf8mb4 collate=utf8mb4_unicode_ci;
use Meals;
show databases;
-- Queries
select * from meal;
insert into meal (id,title,description,location,max_reservations,when,created date,price) values ('2','kebab','meat with tomat',roskilde,'5','2-09-2019','31-08-2019','20');
select * from  meal where id=3;
update meal set title = 'indomy' where id =1;
 delete from meal where id = 2;
 -- Reservation 
 select * from Reservation;
 insert into Reservation  values('1', '20',2,'20-12-2109');
 select * from Reservation where id=2;
 update meal set id = '3' where id =4;
 delete from Reservation where id = 2;
 -- Review
 select * from Review;
 insert into  Review values('1', 'very bad', 'i dont like kebab','1', '2', now());
 select * from Review where id=1;
 update Review set title= 'very good' where id =1;
 delete from Review where id = 2; 
