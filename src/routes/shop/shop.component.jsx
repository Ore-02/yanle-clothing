import { Route, Routes } from 'react-router-dom'
import Collection from '../collection/collection.component'
import Category from '../category/category.component'

const Shop = () => {
    return (
        <Routes>
            <Route index element={<Collection/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}

export default Shop;