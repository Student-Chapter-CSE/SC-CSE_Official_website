import styles from '../../styles/Hod.module.css';
import Image from 'next/image';
import Avatar from '../../assets/hod_img.webp'

const Hod = () => {
    return (
        <>
            <section id={styles.hod_container}>
                <div className={styles.hod_container_wrap}>

                    <div className={styles.hod_image}>
                        <Image src={Avatar} width={200} height={200} className={styles.hod_image_style} alt='' />
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.hod_right}>
                        <div className={styles.hod_title}>
                            A note from the SC CSE Head
                        </div>
                        <div className={styles.hod_body}>
                            <div>
                                <div className={styles.hod_desciption}>
                                    It is my immense pleasure to extend a warm welcome to you on behalf of the IEI Students' Chapter CSE (AOT). Our chapter serves as a dynamic platform for aspiring engineers to connect, collaborate, and create. At IEI SC CSE, we are committed to nurturing a community of curious minds who are passionate about the ever-evolving field of computer science and engineering. Through a range of meticulously crafted events, workshops, seminars, and projects, we aim to provide you with opportunities to expand your horizons, exchange ideas, and enhance your technical prowess.
                                </div>
                                <div className={styles.hod_name}>Sir Prasenjit Das</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hod;
