import classes from './HambergerMenu.module.scss'
import Image from "next/image";
import Link from 'next/link'
export default function HambergerMenu(props) {
    return (
        <div className={classes.topMenu}>
            <div className={classes.container}>
                <Link href='/'>
                    <a><Image height={50} width={50} src='/images/home-page/logo.svg' alt='Logo' /></a>
                </Link>
                <div className={classes.hamberger} onClick={e => props.setNavOpen(true)} >
                    <div className={classes.line}></div>
                    <div className={classes.line}></div>
                    <div className={classes.line}></div>
                </div>
            </div>
        </div>
    )
}
