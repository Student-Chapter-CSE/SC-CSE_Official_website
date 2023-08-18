import styles from '../../styles/Sponsor.module.css'

// href Link to the sponsors website. @nullable
export function Sponsor({name, href, logoUrl, className}) {
    return (
        <div 
            className={`${styles.sponsor} ${className || ''}`}
            data-name={name}
            onClick={() => { if (typeof(href) == 'string') window.location.href = href; }}
        >
            <img src={logoUrl}></img>
        </div>
    )
}

export function SponsorList({sponsors, sponsorClassName, className}) {
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