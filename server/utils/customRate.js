const {
    fix,
    divide,
    makePairName,
    availableSymbols
}=require('./makeRates')

const _ = require('lodash')

const hasFields=(object,list)=>!_.difference(list,_.keys(object)).length
//-----------------------------------------------------------------------------------------

const evaluateSymbol=(symbol)=>{
    let errors=[]

    availableSymbols(symbol).status || errors.push("Its not an available symbol")
    
    return {status:!errors.length,errors}
}
//-----------------------------------------------------------------------------------------

const evaluateFee=(fee)=>{
    let errors=[]

    if(typeof(fee)!=="object" || !hasFields(fee,["type","value"])){
        errors.push("Missing fields on fee")
        return {status:!errors.length,errors}
    }

    ["amount","percent"].includes(fee.type) || errors.push("Not available fee`s type")

    typeof(fee.value)==='number' || errors.push("Fee value must be a number")

    fee.value>0 || errors.push("Fee value must be greater than cero")

    return {status:!errors.length,errors}

}
//-----------------------------------------------------------------------------------------

const evaluate=(field,name)=>name==="fee"?
                            evaluateFee(field):
                            evaluateSymbol(field)
//-----------------------------------------------------------------------------------------

const isCustomRatePostOk=(body)=>{
    let errors={}
    let listFields=["base","destination","fee"]
    if(!hasFields(body,listFields)){
        return {status:false,errors:{body:["request is not complete"]}}
    }
    listFields=listFields
    .map(field=>({
        name:field,
        ...evaluate(body[field],field)
    }))
    .map(field=>{
        
        if(!field.status){
            errors[field.name]=field.errors
        }
    })
    return {status:_.isEmpty(errors),errors}
}
//-----------------------------------------------------------------------------------------
const ratebyfeeType=(rate,fee)=>{
    return fee.type==="amount"?
    rate+fee.value
    :
    rate * (1+fee.value/100)
}
//-----------------------------------------------------------------------------------------

const calculateFee=(rate,newRate)=>({
    percent:fix((newRate/rate-1)*100),
    amount:fix(newRate-rate)
    })
//-----------------------------------------------------------------------------------------

const CustomRatesPairs=(rates,{base,destination,fee})=>{
    [base,destination]=[base.toUpperCase(),destination.toUpperCase()]
    let rate=divide(rates[destination],rates[base])
    let newRate=fix(ratebyfeeType(rate,fee))
    return {
        name:makePairName(base,destination),
        rate,
        newRate,
        fee:calculateFee(rate,newRate)
        }
}

module.exports = {
    isCustomRatePostOk,
    CustomRatesPairs
}