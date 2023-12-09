import app from "./app.js";
import connectDB from "./database.js";
connectDB();




app.listen(app.get('port'), () => {
  console.log(`Server running in port ${app.get('port')}`);
});
