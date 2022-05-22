import * as yup from 'yup';
export const purchaseSchema = yup.object().shape({
    quantity: yup.number("Please provide a valid number.").required().positive("Please provide a positive number.").integer("Please provide a whole number.").typeError("Please provide a value between (0-9)."),
    phone: yup.number("Please provide a valid number.").required().positive("Please provide a positive number.").integer("Please provide a whole number.").typeError("Please provide a value between (0-9)."),
    address: yup.string().required(),
  
});

