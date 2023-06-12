import React from "react"
import styles from './index.module.scss'
import FooterLogoIcon from '../../assets/images/black_logo.svg'


export default function SignUpFormFooterContent() {
    return (
        <div className={styles.main_container}> 
        <div className={styles.wrappper}>
            <div className={styles.content_container}>
            <div className={styles.logo_container}>
                <img src={FooterLogoIcon} alt={`${FooterLogoIcon}`} width={56} height={14}/>
                <p>© 2023</p>
            </div>
            <div className={styles.list_main_container}>
                <ul>
                    <li>about</li>
                    <li>accessibility</li>
                    <li>user agreement</li>
                    <li>privacy policy</li>
                    <li>cookie policy</li>
                    <li>copyright policy</li>
                    <li>brand policy</li>
                    <li>guest controls</li>
                    <li>community guidlines</li>
                    <li>language</li>
                </ul>
            </div>
            </div>
            </div>
        </div>
    )

}