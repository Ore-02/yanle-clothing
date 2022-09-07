import './button.styles.scss'

const Button_type_classes = {
    google: 'google-sign-in',
    inverted: 'inverted'
}


const Button = ({ text, buttonType, ...otherProps }) => {

    return (
        <button 
        className={`button-container ${Button_type_classes[buttonType]}`}
        {...otherProps}>
            {text}
        </button>
    )
}

export default Button;