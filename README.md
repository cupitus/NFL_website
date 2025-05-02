TO setup to localhost please go to the backend/server.js and uncomment:

// Uncomment the following lines if you want to run the server locally line 65 -72 


// if (process.env.VERCEL) {
//   console.log("Running on Vercel, exporting app..."); // Optional log
// } else {
//   const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000
//   app.listen(PORT, () => {
//     console.log(`Server is running locally on http://localhost:${PORT}`);
//   });
// }

and comment line 49 - 50

module.exports = app;
console.log("Running on Vercel, exporting app..."); // Optional log


If its still isnt working use npm install in backend and frontend file 
then npm run start 


NOTE:

- You can be able to edit and delete product in the admin page however you wouldn't be able to add products unless you have access to MongoDB database
- To access the admin username: admin@example.com password:123456
