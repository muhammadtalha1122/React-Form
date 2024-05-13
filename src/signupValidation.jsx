import * as Yup from "yup"
export const signupValidation = Yup.object({
    name: Yup.string().min(3).required("Please Enter Your Name"),
    email: Yup.string().email("Please Enter Valid Email").required("Please Enter Email"),
    password: Yup.string().min(8).required("Please Enter Password"),
    cpassword: Yup.string().oneOf([Yup.ref("password")], "Password Not Matched")

})