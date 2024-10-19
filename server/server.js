const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const cors = require('cors');
const { resourceLimits } = require('worker_threads');

PORT=8080;

// connect to db
let db;
(async () => {
	db = await open({
		filename: 'data.sqlite',
		driver: sqlite3.Database
	});
})();

app = express();
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(cors());

app.get('/', (req,res) =>{
	res.json({});
});

app.get('/friends', async (req,res) =>{
	const result = await db.all('SELECT * from friend');
	res.json(result);
});

app.get('/courses', async (req,res) => {
	const courses = await db.all('SELECT * from course');
	const sections = await db.all('SELECT * from section');
	const instructor = await db.all('SELECT * from instructor');
	courses.map(course => course["sections"] = sections.filter(section => section.course_id == course.id));
	courses.map(course => console.log(course));
	res.json({instructor, courses});
});

app.post('/add', async(req,res) => {
	let courseId = req.body.courseId;
	let instructor = req.body.instructor;
	const result = await db.run("INSERT INTO section (course_id, insturctor_id) VALUES (?,?)", [courseId, instructor]);
	res.json(result);
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
