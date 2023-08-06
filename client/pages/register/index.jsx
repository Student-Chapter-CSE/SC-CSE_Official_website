import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const index = () => {
    const { register, handleSubmit } = useForm();
    const [image_base64, setImage_base64] = useState();
    const onSubmit = async (form_data) => {
        try {
            const { data } = await axios.post(
                'http://localhost:5000/api/v1/member',
                {
                    name: form_data?.name,
                    email: form_data?.email,
                    rollno: form_data?.rollno,
                    memberOf: form_data?.memberOf,
                    picture: image_base64,
                    courseCompletionYear: form_data?.courseCompletionYear,
                    section: form_data?.section,
                    phonenumber: form_data?.phonenumber,
                    paymentDone: form_data?.paymentDone,
                }
            );
            console.log(data);
        } catch (err) {
            throw new Error(err);
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

    //const getBase64;

    return (
        <div className="register_container">
            <h1 className="register_text">Register Student's Chapter</h1>
            <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    {...register('name', { required: true })}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    {...register('email', { required: true })}
                />

                <label htmlFor="rollno">Roll no:</label>
                <input
                    type="number"
                    id="rollno"
                    {...register('rollno', { required: true })}
                    placeholder="Your Roll no."
                />

                <label htmlFor="memberof">Member of:</label>
                <input
                    type="text"
                    id="memberof"
                    {...register('memberOf', { required: true })}
                    placeholder="Member of team"
                />

                <label htmlFor="courseCompletionYear">
                    Course Completion year:
                </label>
                <input
                    type="number"
                    id="courseCompletionYear"
                    {...register('courseCompletionYear', { required: true })}
                    placeholder="Course Completion year"
                />

                <label htmlFor="section">Section</label>
                <input
                    type="text"
                    id="section"
                    {...register('section', { required: true })}
                    placeholder="Your section"
                />

                <label htmlFor="phonenumber">Phone number</label>
                <input
                    type="text"
                    id="phonenumber"
                    {...register('phonenumber', { required: true })}
                    placeholder="Your phone number"
                />

                <label htmlFor="PaymentStatus">Payment Status</label>
                <input
                    type="checkbox"
                    id="PaymentStatus"
                    {...register('paymentDone')}
                    placeholder="Your pPaymentStatus"
                />

                <label htmlFor="picture">Picture</label>
                <input
                    type="file"
                    id="picture"
                    placeholder="picture"
                    onChange={(e) => handleFileRead(e)}
                />

                <button className="btn-register" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default index;
