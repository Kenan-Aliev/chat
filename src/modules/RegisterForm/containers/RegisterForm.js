import RegisterForm from "../components/RegisterForm";
import {withFormik} from "formik";


export default withFormik({
    validate: values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Введите email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Неверный email адрес';
        }
        if (!values.password) {
            errors.password = 'Введите пароль'
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(values.password)) {
            errors.password = 'Пароль должен содержать цифры,буквы,одну заглавную букву'
        }
        return errors;
    },

    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'Register Form',
})(RegisterForm);
