
const symbols=["EUR","USD","ARS","BRL"]

const notAvailable=(currency)=>!symbols.includes(currency)

module.exports = {
    symbols,
    notAvailable
}