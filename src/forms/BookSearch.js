import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';


const FormSchema = Yup.object(
    {
        title:Yup.string().email('Must be valid email format.').required(),
        author:Yup.string().required()
    }
)

const initialValues = {
    title:'',
    author:''
}

export default function BookSearch() {
    const handleSubmit=(values)=>
        console.log(values)

    const formik = useFormik(
        {
            initialValues: initialValues,
            validationSchema: FormSchema,
            onSubmit: (values)=> handleSubmit(values)
        })

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
            id = 'title'
            name = 'title'
            fullWidth
            sx={{mb: 1, mt:3}}
            label='Title'
            placeholder='Title'
            value={formik.values.title}
            onChange={formik.handleChange}
            error = {formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            />
        <TextField
            id ="author"
            name="author"
            type="author"
            fullWidth
            sx={{mb: 2, mt:2}}
            label="Author"
            placeholder="Author"
            value={formik.values.author}
            onChange={formik.handleChange}
            error = {formik.touched.author && Boolean(formik.errors.author)}
            helperText={formik.touched.author && formik.errors.author}
        />
        <Button variant="contained">Start Reading!</Button>
        </form>   
    )
}