import React, {useState} from "react";
import {useFormik} from "formik";
import './NewBoxForm.css'

const NewBoxForm = ({addBox}) => {
    const formik = useFormik({
        initialValues: { backgroundColor: "", width: "", height: "" },
        onSubmit: (values, {resetForm}) => {
            addBox(values);
            resetForm();
        },
        validate: (values) => {
            const errors = {};
            if (!values.backgroundColor) errors.backgroundColor = 'Required';
            if (!values.width) errors.width = 'Required';
            if (!values.height) errors.height = 'Required';
            return errors;
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="backgroundColor">Background color:</label>
            <input 
            id="backgroundColor"
            type="text"
            name="backgroundColor"
            value={formik.values.backgroundColor}
            onChange={formik.handleChange}
             />
            {formik.errors.backgroundColor && formik.touched.backgroundColor && (
                <div className="error-message">{formik.errors.backgroundColor}</div>
            )}
            <label htmlFor="width">Width:</label>         
            <input 
            id="width"
            type="number"
            name="width"
            value={formik.values.width}
            onChange={formik.handleChange}
             />
            {formik.errors.width && formik.touched.width && (
                <div className="error-message">{formik.errors.width}</div>
            )}             
            <label htmlFor="height">Height:</label>         
            <input 
            id="height"
            type="number"
            name="height"
            value={formik.values.height}
            onChange={formik.handleChange}
             />
            {formik.errors.height && formik.touched.height && (
                <div className="error-message">{formik.errors.height}</div>
            )}             
            <button>Add box</button>
        </form>
    );
};

export default NewBoxForm;