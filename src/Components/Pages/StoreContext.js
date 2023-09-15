import { createContext } from "react"
const StoreContext= createContext(
    {
        products:[],
    }
)
export default StoreContext;