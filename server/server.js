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
		filename: 'users.db',
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

app.get('/test', async (req,res) =>{
	res.json("Hello world");
});

//get data from all users
app.get('/users', async (req,res)=>{
	const result = await db.all('SELECT * from user');
	res.json(result);
})

//get all events
app.get('/events', async (req,res)=>{
	const result = await db.all('SELECT * from event');
	res.json(result);
})

//add new user
app.post('/add_user', async(req,res) => {
	let name = req.body.name;
	let email = req.body.email;
	let password = req.body.password;
	let host = req.body.host;
	const result = await db.run("INSERT INTO user (Name, Email, Password,Host) VALUES (?,?,?,?)", [name, email, password, host]);
	res.json(result);
})

//add new event
app.post('/add_event', async(req,res) => {
	let host_id = req.body.host_id;
	let host = req.body.host;
	let location = req.body.location;
	let date = req.body.date;
	const result = await db.run("INSERT INTO event (Host_ID, Host, Location, Date) VALUES (?,?,?,?)", [host_id, host, location, date]);
	res.json(result);
})

//login
app.get('/login', async(req,res) => {
	let email = req.body.email;
	let password = req.body.password;
	const result = password == db.run("SELECT Password FROM user WHERE Email = (email) VALUES",[email]);
	res.json(result);
})

//view event by location
app.get('/add_event', async(req,res) => {
	let email = req.body.location;
	const result = db.run("SELECT * FROM event WHERE location = (location) VALUES",[location]);
	res.json(result);
})

//view event by date
app.get('/add_event', async(req,res) => {
	let email = req.body.date;
	const result = db.run("SELECT * FROM event WHERE date = (date) VALUES(?)",[date]);
	res.json(result);
})

//change user to host
app.post('/update_host', async(req,res) => {
	let email = req.body.email;
	const result = await db.run("UPDATE user SET Host = 1 WHERE Email = (email) VALUES(?)", [email]);
	res.json(result);
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
