import { useFormik } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
          "Password must contain at least one number, one uppercase and one lowercase letter, also no symbols"
        ),
    }),
    onSubmit: (values) => {
      alert("Login Functionality is still under work!");
    },
  });

  return (
    <div className="bg-gray-200 h-[130vh] bg-fixed flex justify-center">
      <div className="max-w-xl bg-white  rounded-xl py-6 px-9 absolute mt-12 ">
        <div className="flex justify-center flex-col items-center space-y-4">
          <p className="font-bold text-4xl mt-4  text-red-800">
            Sign In
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="mt-12">
          <div className="space-y-8">
            <div className="space-y-2 font-[poppins] font-semibold relative">
              <label htmlFor="email" className="text-gray-800">
                Email Address
              </label>
              <input type="email" id="email" className="border-2 border-gray-500 py-3 w-full rounded-xl pl-12"
                placeholder="yourName@gmail.com"
                {...formik.getFieldProps("email")}
              />

              <i className="fa-regular  text-lg font-bold fa-envelope absolute left-1 top-10 px-3"></i>
              {formik.errors.email && formik.touched.email ? (
                <div className="text-red-500 ml-2">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="space-y-2 font-[poppins] font-semibold relative">
              <label htmlFor="password" className="text-gray-800">
                Password
              </label>
              <input type="password" id="password" placeholder="password"
                {...formik.getFieldProps("password")}
                className="border-2 border-gray-500 py-3  w-full rounded-xl pl-12"
              />

              <i className="fa-solid fa-lock absolute top-10 left-1 px-3 text-lg font-bold"></i>
              {formik.errors.password && formik.touched.password ? (
                <div className="ml-2 text-red-500">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
          </div>
          
          <div className="flex justify-center">
            <button type="submit"className="w-1/3 p-2 py-3 bg-red-800 mt-10 font-semibold text-white rounded-xl">
              Sign In
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SignIn;
