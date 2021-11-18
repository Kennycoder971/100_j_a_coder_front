import Link from 'next/link'
import classes from './BtnLink.module.scss'
export default function BtnLink(props) {
    const { to, children, color } = props

    function getBtnColor(btnColor) {
        switch (btnColor) {
            case 'green':
                return classes.green
            case 'blue':
                return classes.blue
            case 'black':
                return classes.black
        }
    }

    return (
        <Link href={to}>
            <a className={`btn ${getBtnColor(color)}`}>
                {children}
            </a>
        </Link>
    )
}
