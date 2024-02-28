function testcontroller(){
    return{
        test(req,res){
            res.send({message:"this is my test route with route distribution"})    
        }
    }
}

module.exports = testcontroller;