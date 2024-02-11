import { useFormik } from 'formik';
import { useSelector } from 'react-redux';

import Button from '@UI/Buttons/Button';
import InputField from '@UI/Input/InputField';
import ButtonOutline from '@UI/Buttons/ButtonOutline';
import ErrorMessage from '@Components/Error/ErrorMessage';

import { useAppContext } from '@Providers/AppProvider';

import { useUpdateUserMutation } from '@Redux/APIEndpoints/userEndpoints';

import { EMAIL_REGEX, NAME_REGEX } from '@Constants/Constants';

export default function SettingsForm() {
  const { user } = useSelector((state) => state.user);
  const { handleDeleteUserVisibility } = useAppContext();
  const [updateUser] = useUpdateUserMutation();

  const formik = useFormik({
    initialValues: {
      userName: user?.name || '',
      userEmail: user?.email || '',
    },
    initialErrors: {
      serverError: '',
    },
    validate: ({ userEmail, userName }) => {
      const errors = {};

      if (!EMAIL_REGEX.test(userEmail)) {
        errors.userEmail = 'Invalid login';
      }

      if (!NAME_REGEX.test(userName)) {
        errors.userName = 'Invalid username. Use "a-z,A-Z,0-9", length 6-20 characters';
      }

      return errors;
    },
    onSubmit: async ({ userEmail, userName }, { setErrors }) => {
      try {
        const personal = { email: userEmail, name: userName };
        await updateUser({ personal }).unwrap();
      } catch (error) {
        setErrors({ serverError: error?.data?.error });
      }
    },
  });

  const { handleChange, handleSubmit, values, errors, isSubmitting } = formik;
  return (
    <form onSubmit={handleSubmit} id="settings" className="flex flex-col justify-center w-[300px]">
      <div className="flex flex-col gap-3">
        <InputField
          type="text"
          label="Name"
          id="settings-name"
          name="userName"
          value={values.userName}
          onChange={handleChange}
        />
        <InputField
          type="text"
          label="Email"
          id="settings-email"
          name="userEmail"
          value={values.userEmail}
          onChange={handleChange}
        />
        <ErrorMessage error={errors.userName || errors.userEmail || errors.serverError} />
      </div>
      <div className="flex gap-2">
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Submiting...' : 'Save changes'}
        </Button>
        <ButtonOutline onClick={handleDeleteUserVisibility}>Delete account</ButtonOutline>
      </div>
    </form>
  );
}
