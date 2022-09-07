import { useContext } from 'react'
import { CategoriesContext } from '../../context/categories.context'
import CategoryPreview from '../../components/category-preview/category-preview.component'
import './collection.styles.scss'
import Footer from '../footer/footer'

const Collection = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
            <>
            <div className='shop-container'>
            {Object.keys(categoriesMap).map((title) =>{
                const products = categoriesMap[title]
                return <CategoryPreview
                            key={title}
                            title={title}
                            products={products}/>
            }     
                )
            }

            </div>
            
            <Footer/>
            </>
    )
}

export default Collection;