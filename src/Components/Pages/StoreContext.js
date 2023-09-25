import { createContext } from "react"
const StoreContext= createContext(
    {
        products:[],
        merch:[],
    }
)
export default StoreContext;