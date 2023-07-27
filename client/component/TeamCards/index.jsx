import styles from '../../styles/TeamCards.module.css'
import Avatar from '../../assets/avatar.png'
import Image from 'next/image'
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
const TeamCards = () => {
    return (
        <>
            <div className={styles.cards_container}>

                <div className={styles.card_img}>

                    <Image src={Avatar}></Image>

                </div>

                <div className={styles.content_wrap}>
                    <div className={styles.card_name}>
                        Arnab Chaterjee
                    </div>
                    <div className={styles.card_desg}>
                        Tech Lead
                    </div>
                </div>

                <div className={styles.socials}>
                    <div className={styles.icons1}>
                        <GithubLogo size={32} />
                    </div>
                    <div className={styles.icons2}>
                        <LinkedinLogo size={32} />
                    </div>
                    <div className={styles.icons3}>
                        <InstagramLogo size={32} />
                    </div>
                </div>




            </div>
        </>
    )
}

export default TeamCards