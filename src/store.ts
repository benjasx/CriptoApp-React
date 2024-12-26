import { create } from "zustand"
import {devtools} from 'zustand/middleware'
import { Cryptocurrency } from "./types"
import { getCryptos } from "./services/CryptoServices"


type CriptoStore = {
    cryptocurrencies:Cryptocurrency[],
    fetchCryptos: () => Promise<void>
}


export const useCryptoStore = create<CriptoStore>()(devtools((set) => ({
    cryptocurrencies:[],
    fetchCryptos: async () =>{
       const cryptocurrencies = await getCryptos()
       set(()=> ({
        cryptocurrencies
       }))
    }
})))