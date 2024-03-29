const router=require("express").Router()
const axios =require("axios")

const {symbols,
    availableSymbols,
    ratesFromEurToBase,
    makePairOfRates} = require('../utils/makeRates')

const {CustomRatesPairs,isCustomRatePostOk} = require('../utils/customRate')

//configuration for axios
axios.interceptors.response.use(
    response=>response.data,
    error=>Promise.reject(error.response.data)
);

const fixerApi=()=>`http://data.fixer.io/api/latest?symbols=${symbols.join()}&access_key=${process.env.API_KEY}`

const catchError=(res)=>err=>{
    res.status(err.status || 500)
    .send({message:err.message || "Something went wrong"})
}

//-----------------------------------------------------------------------------

router.get('/', (req, res, next) => {
    res.status(200).send({symbols}) 
});

//-----------------------------------------------------------------------------

router.get("/:id", (req,res,next)=>{
    let base=req.params.id
    //check for symbol available
    if(!availableSymbols(base).status){
        res.status(404).send({message:"Not available currency"})
    }

    axios.get(fixerApi())
    .then(apiData=> ratesFromEurToBase(apiData,base))
    .then(data=>res.send({data}))
    .catch(catchError(res))
})

//-----------------------------------------------------------------------------
/*
{
    base,
    destination
}
*/
router.post('/', (req, res, next) => {
    const {base,destination}=req.body
    //check if symbols are correct
    if(!availableSymbols(base,destination).status){
        res.status(401).send({message:"Not available pair of currency"})
    }

    axios.get(fixerApi())
    .then(apiData=> makePairOfRates(apiData.rates,base,destination))
    .then(rates=>res.send({rates}))
    .catch(catchError(res)) 
});

//-----------------------------------------------------------------------------
/*
{
    base,
    destination,
    fee:{
        type,
        value
    }
}
*/
router.post('/custom-rate', (req, res, next) => {
    let checkBody=isCustomRatePostOk(req.body)
    if(!checkBody.status){
        res.status(401).send({errors:checkBody.errors})
    }
    axios.get(fixerApi())
    .then(apiData=> CustomRatesPairs(apiData.rates,req.body))
    .then(rates=>res.send(rates))
    .catch(catchError(res)) 
});
module.exports=router