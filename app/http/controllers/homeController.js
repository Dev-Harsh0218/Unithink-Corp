function homeController(){
    return{
        home(req, res){
            res.send({message:"You have reached to UniThink api home route Weclomeeeeee !!!!!"})
        }
    }
}

module.exports = homeController;