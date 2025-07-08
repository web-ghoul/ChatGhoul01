import * as Yup from 'yup';

const useUpdateGenderSchema = () => {
    const updateGenderSchema = Yup.object().shape({
        gender: Yup.string()
            .oneOf(['male', 'female'], 'Gender must be either "male" or "female"')
            .required('Gender is required'),
    });

    const updateGenderInitialValues = {
        gender: "male",
    }

    return { updateGenderSchema, updateGenderInitialValues }
}

export default useUpdateGenderSchema
