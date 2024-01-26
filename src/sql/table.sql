
 create TABLE users(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(255),
	password VARCHAR(255),
	full_name VARCHAR(255),
	birthday DATE,
	avatar VARCHAR(255),
	user_name VARCHAR(255)
)

INSERT into users(email, password, full_name, birthday,avatar, user_name) VALUES 
('user1@example.com', 'password1', 'User One', '1990-01-01', 'avatar1.jpg', 'user1'),
    ('user2@example.com', 'password2', 'User Two', '1991-02-02', 'avatar2.jpg', 'user2'),
    ('user3@example.com', 'password3', 'User Three', '1992-03-03', 'avatar3.jpg', 'user3'),
    ('user4@example.com', 'password4', 'User Four', '1993-04-04', 'avatar4.jpg', 'user4'),
    ('user5@example.com', 'password5', 'User Five', '1994-05-05', 'avatar5.jpg', 'user5'),
    ('user6@example.com', 'password6', 'User Six', '1995-06-06', 'avatar6.jpg', 'user6'),
    ('user7@example.com', 'password7', 'User Seven', '1996-07-07', 'avatar7.jpg', 'user7'),
    ('user8@example.com', 'password8', 'User Eight', '1997-08-08', 'avatar8.jpg', 'user8'),
    ('user9@example.com', 'password9', 'User Nine', '1998-09-09', 'avatar9.jpg', 'user9'),
    ('user10@example.com', 'password10', 'User Ten', '1999-10-10', 'avatar10.jpg', 'user10');
    
    
CREATE TABLE img (
    img_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
	FOREIGN KEY(user_id) REFERENCES users(user_id),
    img_name VARCHAR(255),
    img_description VARCHAR(255),
    url VARCHAR(255),
    img_tags VARCHAR(255)
);
ALTER TABLE img 
ADD CONSTRAINT FK_imguserid
FOREIGN KEY (user_id)
REFERENCES users(user_id)
ON DELETE set NULL
ON UPDATE CASCADE;




INSERT INTO img (user_id, img_name, img_description, url, img_tags)
VALUES
    (1, 'Landscape1', 'Beautiful sunset over the mountains', 'landscape1.jpg', 'mountain, sunset'),
    (2, 'Landscape2', 'Scenic view of a beach at sunrise', 'landscape2.jpg', 'beach, sunrise'),
    (3, 'Landscape3', 'Majestic waterfall in the forest', 'landscape3.jpg', 'waterfall, forest'),
    (1, 'Landscape4', 'Serene lake surrounded by green hills', 'landscape4.jpg', 'lake, hills'),
    (2, 'Landscape5', 'Aerial view of a cityscape at night', 'landscape5.jpg', 'city, night'),
    (3, 'Landscape6', 'Vivid colors of autumn in the countryside', 'landscape6.jpg', 'autumn, countryside'),
    (1, 'Landscape7', 'Sunrise over a tranquil countryside', 'landscape7.jpg', 'sunrise, countryside'),
    (2, 'Landscape8', 'Snow-capped mountains under a clear blue sky', 'landscape8.jpg', 'mountains, snow'),
    (3, 'Landscape9', 'Sunset over a peaceful lake', 'landscape9.jpg', 'sunset, lake'),
    (1, 'Landscape10', 'Golden hour in a beautiful meadow', 'landscape10.jpg', 'meadow, golden hour');
    
    
CREATE TABLE comments(
	comment_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	FOREIGN KEY(user_id) REFERENCES users(user_id),
	img_id INT,
	FOREIGN KEY(img_id) REFERENCES img(img_id),
	date_comment DATE,
	content VARCHAR(255)
);

ALTER TABLE comments
ADD CONSTRAINT FK_cmtuserid
FOREIGN KEY (user_id)
REFERENCES users(user_id)
ON DELETE set NULL
ON UPDATE CASCADE;

ALTER TABLE comments
ADD CONSTRAINT FK_cmtimgid
FOREIGN KEY (img_id)
REFERENCES img(img_id)
ON DELETE SET NULL
ON UPDATE CASCADE;

INSERT INTO comments (user_id, img_id, date_comment, content)
VALUES
    (1, 1, '2022-01-15', 'Beautiful landscape!'),
    (2, 2, '2022-01-16', 'Amazing sunset view.'),
    (3, 3, '2022-01-17', 'Incredible waterfall scene.'),
    (1, 4, '2022-01-18', 'Serene lake surrounded by hills.'),
    (2, 5, '2022-01-19', 'City lights at night are mesmerizing.'),
    (3, 6, '2022-01-20', 'Fall colors are so vibrant.'),
    (1, 7, '2022-01-21', 'Tranquil sunrise over the countryside.'),
    (2, 8, '2022-01-22', 'Snowy mountains are breathtaking.'),
    (3, 9, '2022-01-23', 'Peaceful sunset by the lake.'),
    (1, 10, '2022-01-24', 'Golden hour in the meadow is my favorite.');
    
    
CREATE TABLE saved (
    saved_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    img_id INT,
    FOREIGN KEY (img_id) REFERENCES img(img_id),
    saved_date DATE
);


ALTER TABLE saved
ADD CONSTRAINT FK_savedimgid1
FOREIGN KEY (img_id)
REFERENCES img(img_id)
ON DELETE CASCADE
ON UPDATE CASCADE;


ALTER TABLE saved
ADD CONSTRAINT FK_saveuserid
FOREIGN KEY (user_id)
REFERENCES users(user_id)
ON DELETE SET NULL
ON UPDATE CASCADE;

ALTER TABLE saved
DROP FOREIGN KEY FK_savedimgid


INSERT INTO saved (user_id, img_id, saved_date)
VALUES
    (1, 1, '2022-01-15'),
    (2, 2, '2022-01-16'),
    (3, 3, '2022-01-17'),
    (1, 4, '2022-01-18'),
    (2, 5, '2022-01-19'),
    (3, 6, '2022-01-20'),
    (1, 7, '2022-01-21'),
    (2, 8, '2022-01-22'),
    (3, 9, '2022-01-23'),
    (1, 10, '2022-01-24');