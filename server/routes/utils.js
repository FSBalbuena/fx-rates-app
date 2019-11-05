
const symbols=["EUR","USD","ARS","BRL"]

const availableSymbols=(...args)=>{
    args.map(symbol=>{
        if(!symbols.includes(symbol)){
            return false
        }
    })
    return true
}

const fix=(num,fixed=5)=>Number(num.toFixed(fixed))

const divide=(first,second)=>fix(first/second)

const makePairName=(base,destination)=>`${base}/${destination}`

const makePairOfRates=(ratesOnEur,base,destination)=>{
        let direct={
            name:makePairName(base,destination),
            rate:divide(ratesOnEur[destination],ratesOnEur[base])
        }
        let reverse={
            name:makePairName(destination,base),
            rate:divide(ratesOnEur[base],ratesOnEur[destination])
        }
        return [direct,reverse]
    }

const ratesBeetween=(ratesOnEur,base,destination)=>({
    name:`${base} - ${destination}`,
    rates:makePairOfRates(ratesOnEur,base,destination)
    })

const ratesFromEurToBase=({rates},base)=>{
    let values=[]
    for(let key in rates){
        if(key!==base){
            values.push(ratesBeetween(rates,base,key))
        }
    }
    return values
}
const ratebyfeeType=(rate,fee)=>{
    return fee.type==="amount"?
    rate+fee.value
    :
    rate * (1+fee.value/100)
}
const calculateFee=(rate,newRate)=>({
    percent:fix((newRate/rate-1)*100),
    amount:fix(newRate-rate)
    })

const CustomRatesPairs=(rates,{base,destination,fee})=>{
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
    symbols,
    availableSymbols,
    ratesFromEurToBase,
    makePairOfRates,
    CustomRatesPairs
}