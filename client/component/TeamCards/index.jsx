import styles from '../../styles/TeamCards.module.css';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import { useIntersection } from '../../hooks/useIntersection';

export default function TeamCards({ img, name, desg, socials }) {
    const ref = useRef();
    const isVisible = useIntersection(ref, '0px');
    return (
        <>
            <div className={styles.cards_container}>
                <div className={styles.card_img} ref={ref}>
                    {isVisible ? <Image src={img} alt={name}></Image> : <></>}
                </div>

                <div className={styles.content_wrap}>
                    <div className={styles.card_name}>{name}</div>
                    <div className={styles.card_desg}>{desg}</div>

                    <div className={styles.socials}>
                        <div className={styles.icons1}>
                            <Link href={socials[0]} target="_blank">
                                <GithubLogo />
                            </Link>
                        </div>
                        <div className={styles.icons2}>
                            <Link href={socials[1]} target="_blank">
                                <LinkedinLogo />
                            </Link>
                        </div>
                        <div className={styles.icons3}>
                            <Link href={socials[2]} target="_blank">
                                <InstagramLogo />
                            </Link>
                        </div>
                    </div>
                    {/*<div className={styles.mailHolder}>
                        <div className={styles.mail}>
                            <div className={styles.mailLogo}>
                                <EnvelopeSimple display='block' />
                            </div>
                            <div className={styles.mailAddress}>example@gmail.com</div>
                        </div>
    </div>*/}
                </div>
            </div>
        </>
    );
}
