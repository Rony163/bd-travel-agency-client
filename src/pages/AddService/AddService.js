import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('https://enigmatic-refuge-81608.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Service added successfully');
                    reset();
                }
            })
    };
    return (
        <div className="add-service mt-5">
            <h2 className="text-info pt-5">Add a tourist place</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Place Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("img")} placeholder="Image url" />
                <input className="btn-submit" type="submit" />
            </form>
        </div>
    );
};

export default AddService;