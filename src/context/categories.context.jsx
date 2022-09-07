import { 
    createContext, 
    useContext, 
    useState ,
    useEffect} from "react";
import SHOP_DATA from "../shop-data.js";
import { 
    addColletionAndDocuments, 
    getCategoriesAndDocuments 
    } from "../utilitys/firebase/firebase.utilis";


export const CategoriesContext = createContext({
    categoriesMap:{},
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    const getCategoriesMap = async () => {
        const categoriesMap =  await getCategoriesAndDocuments()
        setCategoriesMap(categoriesMap)
    }
    useEffect(() => {
        getCategoriesMap()
        // you run this function when you want to add a data to your firestore database
        // addColletionAndDocuments('categories', SHOP_DATA)
    }, [])
    const value = { categoriesMap }
    return <CategoriesContext.Provider value={value}>{ children}</CategoriesContext.Provider>
}
