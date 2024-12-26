import { create } from "zustand"
import {devtools} from 'zustand/middleware'
import { Cryptocurrency, Pair } from "./types"
import { getCryptos,fetchCurrentCryptoPrice } from "./services/CryptoServices"


type CriptoStore = {
    cryptocurrencies:Cryptocurrency[],
    fetchCryptos: () => Promise<void>,
    fetchData: (pair: Pair) => Promise<void>

}


export const useCryptoStore = create<CriptoStore>()(devtools((set) => ({
    cryptocurrencies:[],
    fetchCryptos: async () =>{
       const cryptocurrencies = await getCryptos()
       set(()=> ({
        cryptocurrencies
       }))
    },

    fetchData: async (pair) => {
       const result =  await fetchCurrentCryptoPrice(pair)
       console.log(result);
       
    }
})))