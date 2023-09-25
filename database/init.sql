CREATE TABLE fighters(
id SERIAL PRIMARY KEY,
first_name VARCHAR(255) NOT NULL,
last_name VARCHAR(255) NOT NULL,
country_id INT NOT NULL,
style VARCHAR(50) NOT NULL
)


INSERT INTO fighters(first_name,last_name,country_id,style)VALUES('Bruce','Lee',2,'Jeet kune Do'),
('Chunck','Noris',34,'chunck kune Do'),
('Jackie','Chan',54,'kung fu'),
('Hari','San',89,'Javasript kune Do');
