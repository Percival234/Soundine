import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import Button from '@UI/Buttons/Button';
import InputField from '@UI/Input/InputField';
import ErrorMessage from '@Components/Error/ErrorMessage';

import { useSignInMutation } from '@Redux/APIEndpoints/userEndpoints';

export default function SignInForm() {
  const [signInUser] = useSignInMutation();

  const formik = useFormik({
    initialValues: {
      signInEmail: '',
      signInPassword: '',
    },
    initialErrors: {
      serverError: '',
    },
    validate: ({ signInEmail, signInPassword }) => {
      const errors = {};

      if (!signInEmail) {
        errors.signInEmail = 'Email is required';
      }

      if (!signInPassword) {
        errors.signInPassword = 'Password is required';
      }

      return errors;
    },
    onSubmit: async ({ signInEmail, signInPassword }, { setErrors }) => {
      try {
        const userData = { email: signInEmail, password: signInPassword };
        await signInUser(userData).unwrap();
      } catch (error) {
        setErrors({ serverError: error?.data?.message });
      }
    },
  });

  const { handleChange, handleSubmit, values, errors, isSubmitting } = formik;

  return (
    <form
      onSubmit={handleSubmit}
      id="sign-in"
      className="animate-bounceIn md:-translate-x-full md:min-h-[30rem] flex flex-col justify-center rounded p-5 sm:p-10 z-20 bg-white  dark:bg-zinc-900">
      <h3 className="text-3xl text-center">Sign in</h3>
      <div className="grid gap-4 mt-8 mb-2">
        <InputField
          value={values.signInEmail}
          onChange={handleChange}
          id="sign-in-email"
          label="Email"
          type="text"
          name="signInEmail"
        />
        <InputField
          value={values.signInPassword}
          onChange={handleChange}
          id="sign-in-password"
          label="Password"
          type="password"
          name="signInPassword"
        />
      </div>
      <ErrorMessage error={errors.signInEmail || errors.signInPassword || errors.serverError} />
      <Button type="submit" disabled={isSubmitting} className="text-md">
        {isSubmitting ? 'Waiting...' : 'Sign in'}
      </Button>
      <div className="mt-3 text-center md:hidden">
        Don&apos;t have an account?{' '}
        <Link className="text-main font-bold" to="/user/sign-up">
          Sign up!
        </Link>
      </div>
    </form>
  );
}
