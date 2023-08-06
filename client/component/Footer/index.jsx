import styles from '../../styles/Footer.module.css';
import {
    FacebookLogo,
    TwitterLogo,
    InstagramLogo,
    YoutubeLogo,
    LinkedinLogo,
    PaperPlaneTilt,
} from '@phosphor-icons/react';
const Footer = () => {
    return (
        <footer>
            <div className={styles.Bg_details}>
                <div className={styles.FooterWrap}>
                    <div className={styles.Col1}>
                        Mail us at: <PaperPlaneTilt size={24} weight="bold" />
                        <br />
                        <strong>sccse.aot@gmail.com</strong>
                    </div>
                    <div className={styles.Footer_Anchor}>
                        <a href="https://www.facebook.com/sccseaot">
                            <FacebookLogo size={32} weight="bold" />
                        </a>
                        <a href="https://twitter.com/ieiaot">
                            <TwitterLogo size={32} weight="bold" />
                        </a>
                        <a href="https://www.instagram.com/sccse_aot/">
                            <InstagramLogo size={32} weight="bold" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCFvgz8LpzW5Vv9wSJWPpypQ">
                            <YoutubeLogo size={32} weight="bold" />
                        </a>
                        <a href="https://www.linkedin.com/company/sccseaot/about/">
                            <LinkedinLogo size={32} weight="bold" />
                        </a>
                    </div>
                </div>
                <div className={styles.FooterText}>
                    © {new Date().getFullYear()} Official Website of Student's
                    Chapter CSE of AOT.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
