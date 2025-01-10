import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({});
    useEffect(() =>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        //converting json to txt
        .then((res) => res.json())
        .then((res) =>setData(res[currency]))
        console.log(data);//to hold the data 
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;