import { FC } from "react";
import Head from "next/head"
import styles from '../styles/Socials.module.scss'
import { socialsType } from "../types";

type socialProps = {
    socials: [socialsType]
}

const Socials: FC<socialProps> = ({ socials }) => {

    if (!socials) {
        return null
    }

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
            </Head>
            <ul className={styles.socials}>
                {socials && socials.map(social => (
                    <li key={social.id}>
                        <a href={social.path} target='_blank' rel="noopener noreferrer">
                            <i className={`fab fa-${social.icon}`} />
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Socials