import Image from "next/image"
import styles from '../../styles/Testimonials.module.css'


const Testimonial = ({ img, heading, content }) => {
    return (
        <div className={styles.testimonial_wrap}>
            <div className={styles.testimonial_img_container}>
                <Image src={img} width={150} height={150} className="testimonial_img" alt="" />
            </div>
            <div className={styles.testimonial_heading}>
                {heading}
            </div>
            <div className={styles.testimonial_content}>
                {content}
            </div>
        </div>
    )
}

export default Testimonial