import * as Yup from 'yup';

const useUpdatePhoneSchema = () => {
    const updatePhoneSchema = Yup.object().shape({
        phone: Yup.string().required('Phone Number is Required'),
    });

    const updatePhoneInitialValues = {
        phone: "",
    }

    return { updatePhoneSchema, updatePhoneInitialValues }
}

export default useUpdatePhoneSchema
