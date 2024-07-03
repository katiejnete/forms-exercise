import React from "react";
import { useFormik } from "formik";

const NewTodoForm = ({ addTodo }) => {
  const formik = useFormik({
    initialValues: { task: "" },
    validate: (values) => {
      const errors = {};
      if (!values.task) errors.task = "Required";
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      addTodo(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="task"
        placeholder="Task Name"
        onChange={formik.handleChange}
        value={formik.values.task}
      />
      {formik.errors.task && formik.touched.task && (
        <div style={{ color: "red" }}>{formik.errors.task}</div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewTodoForm;
