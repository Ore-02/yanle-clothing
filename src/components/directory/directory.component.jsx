import Footer from "../../routes/footer/footer";
import DirectoryItem from "../directory-item/directory-item.component";
import './directory.style.scss'

const Directory = (props) => {
    return (
      <>
      <div className='directory-container'>
        {props.categories.map((category) => {
          return (
            <DirectoryItem
            key = {category.id}
            category = {category}
            />
          )
        })}
      </div>
      <Footer/>
      </>
        
    )
}

export default Directory;