let mongoose =require ("mongoose");
let bcrypt = require ("bcrypt");

 //creation schema user
const userSchema = new mongoose.Schema({
    nom:String,
   prix:Number,
   description:String,
   photo: String,
    qteDispo:{
        type:Number,
        default:1
    }
    ,
    idClient:{
        type:Number,
    },
    createAt: {
        type:Date,
    default:Date.Now()
},
    updateAt: {
        type:Date,
    default:Date.Now()
}
   
});//creation mot de passe haché
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
    }
    next();
});
//declaration user
const User = mongoose.model("User", userSchema);
 module.exports =User;