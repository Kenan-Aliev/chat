import RegisterForm from "../components/RegisterForm";
import {withFormik} from "formik";
import validateForm from "../../../utils/validations";

export default withFormik({
    mapPropsToValues: () => ({
        email: '',
        fullname: '',
        confirmPassword: '',
        password: ''
    }),
    validate: values => {
        const errors = {};
        validateForm({isAuth: false, values, errors})
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
