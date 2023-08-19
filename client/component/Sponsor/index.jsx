import styles from '../../styles/Sponsor.module.css'

// href Link to the sponsors website. @nullable
const Sponsor = ({ name, href, logoUrl, className }) => {
    return (
        <div
            className={`${styles.sponsor} ${className || ''}`}
            data-name={name}
            onClick={() => { if (typeof (href) === string) window.open(href, '_blank') }}
        >
            <img src={logoUrl} alt={name} />
        </div>
    )
}

const SponsorList = ({ sponsors, sponsorClassName, className }) => {
    return (
        <div className={`${styles.sponsorList} ${className || ''}`}>
            {
                sponsors.map((sponsor, id) => (
                    <Sponsor key={id} {...sponsor} className={sponsorClassName} />
                ))
            }
        </div>
    )
}

export default SponsorList