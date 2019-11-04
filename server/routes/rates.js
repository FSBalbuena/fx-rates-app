const router=require("express").Router()
const axios =require("axios")

const symbols=["EUR","USD","ARS","BRL"]


router.get('/', (req, res, next) => {
    res.status(200).send({symbols}) 
});

router.get("/:id", (req,res,next)=>{
    
})

router.post('/', (req, res, next) => {
   
});

router.post('/custom-rate', (req, res, next) => {
    
});
module.exports=router