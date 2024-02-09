'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import styles from '../../styles/RegistrationForm.module.css';

import { ArrowLeft } from '@phosphor-icons/react';
import Preloader from '../../component/Preloader';
import { axios_instance } from '../../axios/axios';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const [Isloading, SetIsLoading] = useState(false);
    const [image_base64, setImage_base64] = useState();
    const onSubmit = async (form_data) => {
        SetIsLoading(true);
        try {
            const { data } = await axios_instance.post('/member', {
                name: form_data?.name,
                email: form_data?.email,
                rollno: form_data?.rollno,
                memberOf: form_data?.memberOf,
                picture: image_base64,
                courseCompletionYear: form_data?.courseCompletionYear,
                section: form_data?.section,
                phonenumber: form_data?.phonenumber,
                paymentDone: form_data?.paymentDone,
            });

            alert('Registered successfully');
            console.log(data);
        } catch (err) {
            alert('Registration failed');
            throw new Error(err);
        } finally {
            SetIsLoading(false);
        }
    };
    const handleFileRead = async (e) => {
        try {
            const file = e.target.files[0];
            const base64 = await convertBase64(file);
            setImage_base64(base64);
        } catch (err) {
            console.log(err);
        }
    };
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    if (Isloading) {
        return <Preloader width="5rem" height="5rem" />;
    } else
        return (
            <div className={styles.formHolder}>
                <div className={styles.formContent}>
                    <div className={styles.leftBorder}>
                        <BackButton />
                    </div>
                    <h1 className={styles.formHeading}>
                        <div>Register</div>
                        <div>Students&apos; Chapter</div>
                    </h1>
                    <form
                        className={styles.form}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <FormSection name="Personal Info">
                            <div className={styles.col}>
                                <div className={styles.textInput}>
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Your name"
                                        {...register('name', {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <div className={styles.textInput}>
                                    <label htmlFor="rollno">Roll no:</label>
                                    <input
                                        type="number"
                                        id="rollno"
                                        {...register('rollno', {
                                            required: true,
                                        })}
                                        placeholder="Your Roll no."
                                    />
                                </div>
                            </div>
                            <div className={styles.col}>
                                <div className={styles.textInput}>
                                    <label htmlFor="section">Section</label>
                                    <input
                                        type="text"
                                        id="section"
                                        {...register('section', {
                                            required: true,
                                        })}
                                        placeholder="Your section"
                                    />
                                </div>
                                <div className={styles.textInput}>
                                    <label htmlFor="courseCompletionYear">
                                        Course Completion year:
                                    </label>
                                    <input
                                        type="number"
                                        id="courseCompletionYear"
                                        {...register('courseCompletionYear', {
                                            required: true,
                                        })}
                                        placeholder="Year"
                                        style={{ width: '10em' }}
                                    />
                                </div>
                            </div>

                            <div className={styles.inputChooseFile}>
                                <label htmlFor="picture">Photo</label>
                                <input
                                    className={styles.chooseFileBtn}
                                    type="file"
                                    id="picture"
                                    placeholder="picture"
                                    onChange={(e) => handleFileRead(e)}
                                />
                            </div>
                        </FormSection>

                        <Sectionless>
                            <div className={styles.formQuestion}>
                                <label htmlFor="memberof">
                                    Which team do you want to join ?
                                </label>
                                <input
                                    type="text"
                                    id="memberof"
                                    {...register('memberOf', {
                                        required: true,
                                    })}
                                    placeholder="Member of team"
                                />
                            </div>
                        </Sectionless>

                        <FormSection name="Contact Details">
                            <div className={styles.col}>
                                <div className={styles.textInput}>
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Your email"
                                        {...register('email', {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <div className={styles.textInput}>
                                    <label htmlFor="phonenumber">
                                        Phone number
                                    </label>
                                    <input
                                        type="text"
                                        id="phonenumber"
                                        {...register('phonenumber', {
                                            required: true,
                                        })}
                                        placeholder="Your phone number"
                                    />
                                </div>
                            </div>
                        </FormSection>

                        <Sectionless>
                            <div
                                className={
                                    styles.checkboxInput +
                                    ' ' +
                                    styles.paymentSection
                                }
                            >
                                <label htmlFor="PaymentStatus">
                                    Payment Status:
                                </label>
                                <input
                                    type="checkbox"
                                    id="PaymentStatus"
                                    {...register('paymentDone')}
                                    placeholder="Your pPaymentStatus"
                                    name="Payment Status"
                                />
                            </div>
                        </Sectionless>

                        <div className={styles.formActionSection}>
                            <button
                                className={`${styles.btn} ${styles.saveBtn}`}
                                type="submit"
                            >
                                Submit
                            </button>
                            <button
                                className={`${styles.btn} ${styles.cancelBtn}`}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
};


function FormSection({ name, children }) {
    return (
        <div className={styles.section}>
            <div className={styles.sectionTitle}>{name}</div>
            <div className={styles.sectionContent}>{children}</div>
        </div>
    );
}

function Sectionless({ children }) {
    return <div className={styles.sectionless}>{children}</div>;
}

function BackButton() {
    const router = useRouter();
    return (
        <div className={styles.backButton} onClick={() => router.back()}>
            <ArrowLeft display="block" />
        </div>
    );
}


export default Register;