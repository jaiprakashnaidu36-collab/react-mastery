import { useEffect , useState} from 'react'

// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json

const [curr , Storecurr] = useState({})

function useCurrencyconverter(currency){
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=>{
        return res.json
    })
    .then((res)=>{
        Storecurr(res[curr])
        
    })
    console.log(curr)
    return curr
}


export default useCurrencyconverter