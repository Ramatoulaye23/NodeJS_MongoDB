let express =require("express")
let mongoose =require("mongoose") //import mongoose from "mongoose"
let routeUser = require("./route/routeUser.js")


let app = express();
app.use(express.json());    
app.use(express.urlencoded({extended : true})); 

let URI = 'mongodb+srv://ramatoulayefainke:Almamyabsetou@cluster0.4sfbgah.mongodb.net/BDD' ; 
mongoose.connect(URI,
{ useNewUrlParser: true, useUnifiedTopology: true , dbName : "PROJETF"})
.then(()=> console.log("Connexion a Mongo réussie !"))
.catch(()=> console.log("Connexion a Mongo échouée"));


app.use("/user",routeUser)
app.use("/annonce",routeUser)
app.use("/annonce/id",routeUser)



let port = 5000 ; 
app.listen(port, ()=> console.log(`Le serveur tourne bien sur ${port}`))