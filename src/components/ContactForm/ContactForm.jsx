import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

export default function ContactForm({ onAdd }) {
  const id = useId();

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, "Too Short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .trim()
      .matches(/^\+?[0-9\s\-()]*$/, "Invalid phone number format")
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    onAdd({
      id: Date.now(),
      name: values.name.trim(),
      number: values.number.trim(),
    });
    actions.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <label htmlFor={id + "name"} className={css.label}>
              Name
            </label>
            <Field
              type="text"
              name="name"
              id={id + "name"}
              className={css.field}
            />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </div>
          <div className={css.fieldWrapper}>
            <label htmlFor={id + "number"} className={css.label}>
              Number
            </label>
            <Field
              type="text"
              name="number"
              id={id + "number"}
              className={css.field}
            />
            <ErrorMessage
              className={css.errorMessage}
              name="number"
              component="span"
            />
          </div>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
