import * as yup from 'yup';
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png','image/webp','image/svg+xml'];
export const productSchema = yup.object().shape({
    name: yup.string().required(),
    min_order: yup.number("Please provide a valid number.").required().positive("Please provide a valid number.").integer(),
    available: yup.number("Please provide a valid number.").required().positive("Please provide a valid number.").integer(),
    price: yup.number("Please provide a valid number.").required().positive("Please provide a valid number."),
    description: yup.string().required(),
    image: yup.mixed()
        .test(
            "required",
            "Please select a image",
            value => value && value.length > 0)
        .test(
            "fileSize",
            "Please upload a photo smaller than 300KB.",
            value => value && (value.length > 0 && value[0]?.size <= 300000))
        .test(
            "fileFormat",
            "PNG, JPG, JPEG,SVG,webp up to 100KB",
            value => value && SUPPORTED_FORMATS.includes(value[0]?.type)
        )
});

