
const symbols=["EUR","USD","ARS","BRL"]

const availableSymbols=(...args)=>{
    let data={status:true}
    args.map(symbol=>{
        if(!symbols.includes(symbol.toUpperCase())){
            data.status=false
            data.symbol=symbol
        }
    })
    return data
}

const fix=(num,fixed=5)=>Number(num.toFixed(fixed))

const divide=(first,second)=>fix(first/second)

const makePairName=(base,destination,divider="/")=>`${base}${divider}${destination}`.toUpperCase()

const makePairOfRates=(ratesOnEur,base,destination)=>{
        [base,direction]=[base,direction].map(item=>item.toUpperCase())
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
    name:makePairName(base,destination," - "),
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
    availableSymbols,
    ratesFromEurToBase,
    makePairOfRates,
    divide,
    fix,
    makePairName
}