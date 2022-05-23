import * as yup from 'yup';
export const UpdateProductSchema = yup.object().shape({
    name: yup.string().required(),
    min_order: yup.number("Please provide a valid number.").required().positive("Please provide a positive number.").integer("Please provide a whole number.").typeError("Please provide a value between (0-9)."),
    available: yup.number("Please provide a valid number.").required().positive("Please provide a positive number.").integer("Please provide a whole number.").typeError("Please provide a value between (0-9)."),
    price: yup.number("Please provide a valid number.").required().positive("Please provide a positive number.").typeError("Please provide a value between (0-9)."),
    description: yup.string().required(),

});

