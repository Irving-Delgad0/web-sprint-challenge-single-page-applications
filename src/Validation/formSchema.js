import * as yup from "yup"

const formSchema = yup.object().shape({
    name: yup.string()
    .trim()
    .required("name is required")
    .min(2,"name must be at least 2 characters"),

    size: yup.string()
    .required()
    .oneOf(["Small", "Medium", "Large"], "Size is required"),

    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    ham: yup.boolean(),
    pineapple: yup.boolean(),

    special: yup.string()
    .required()

})

export default formSchema