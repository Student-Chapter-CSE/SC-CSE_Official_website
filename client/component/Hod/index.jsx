import styles from '../../styles/Hod.module.css';
import Image from 'next/image';
import Avatar from '../../assets/hod_img.jpg'

const Hod = () => {
    return (
        <>
            <section id={styles.hod_container}>
                <div className={styles.hod_container_wrap}>

                    <div className={styles.hod_image}>
                        <Image src={Avatar} width={200} height={200} className={styles.hod_image_style} alt=''/>
                        <div className={styles.hod_name}>PD SIR</div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.hod_right}>
                        <div className={styles.hod_title}>
                            A note from the SC CSE head
                        </div>
                        <div className={styles.hod_desciption}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dignissimos facere impedit provident quod eaque nihil, at magni perspiciatis sapiente consectetur similique nisi inventore molestiae itaque illo corporis iusto veritatis.
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hod;
