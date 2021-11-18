import classes from './Button.module.scss'
export default function Button(props) {
    const { onClick, children, color } = props

    function getBtnColor(btnColor) {
        switch (btnColor) {
            case 'green':
                return classes.green
            case 'blue':
                return classes.blue
            case 'black':
                return classes.black
            case 'fb':
                return classes.fb
            case 'google':
                return classes.google
        }
    }

    return (
        <button
            onClick={onClick}
            className={`btn ${getBtnColor(color)}`}
        >
            {children}
        </button>
    )
}
