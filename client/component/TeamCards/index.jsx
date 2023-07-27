import styles from '../../styles/TeamCards.module.css'
import Avatar from '../../assets/avatar.png'
import Image from 'next/image'
import Link from 'next/link'
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

const TeamCards = ({ img, name, desg, socials }) => {
    return (
        <>
            <div className={styles.cards_container}>

                <div className={styles.card_img}>

                    <Image src={img} alt={name}></Image>

                </div>

                <div className={styles.content_wrap}>
                    <div className={styles.card_name}>
                        {name}
                    </div>
                    <div className={styles.card_desg}>
                        {desg}
                    </div>
                </div>

                <div className={styles.socials}>
                    <div className={styles.icons1}>
                        <Link href={socials[0]} target='_blank'>
                            <GithubLogo size={32} />
                        </Link>
                    </div>
                    <div className={styles.icons2}>
                        <Link href={socials[1]} target='_blank'>
                            <LinkedinLogo size={32} />
                        </Link>
                    </div>
                    <div className={styles.icons3}>
                        <Link href={socials[2]} target='_blank'>
                            <InstagramLogo size={32} />
                        </Link>
                    </div>
                </div>


            </div>
        </>
    )
}

export default TeamCards