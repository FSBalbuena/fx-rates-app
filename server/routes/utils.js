
const symbols=["EUR","USD","ARS","BRL"]

const notAvailable=(currency)=>!symbols.includes(currency)

const fix=(num,fixed=5)=>Number(num.toFixed(fixed))

const divide=(firstNum,SecondNum)=>fix(firstNum/SecondNum)

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
module.exports = {
    symbols,
    notAvailable,
    ratesFromEurToBase
}