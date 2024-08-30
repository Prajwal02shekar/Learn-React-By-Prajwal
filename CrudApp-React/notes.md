yarn add axios -> for performing https request
react-router-dom -> for routing purposes
react-moment -> for date and time purpose
react-hot-toast -> for display toast messages
react-icons -> for generating icons
uuid -> for generating unique id

npm install -g json-server -> it should install globally
json-server --version ->to check version of json-server

json-server --watch backend/db.json --port=5000

without axios
await window.fetch("http://localhost:5000/courses",{
	method:"POST",
	headers:{
		"Content-Type":"application/json"
		},
		body:JSON.stringify(payload)
})

window.location.assign("/") ---> force refresh to clean cache in the browser



What is axios?

---> Axios is a popular JavaScript library used for making HTTP requests from a web browser or Node. js. It provides an easy-to-use API for sending and receiving data over the network. Axios allows you to create instances, which can be configured with default settings and reused across your application.
