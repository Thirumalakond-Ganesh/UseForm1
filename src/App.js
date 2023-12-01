import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';


function MyForm() {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data) => {
    console.log('Form data submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input {...register('name', { required: true })} />
      </label>

      <label>
        Email:
        <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
      </label>

      <button type="submit">Submit</button>

      {/* Display form state information */}
      <div>
        <p>Is Dirty: {formState.isDirty ? 'Yes' : 'No'}</p>
        <p>Is Submitted: {formState.isSubmitted ? 'Yes' : 'No'}</p>
        <p>Submit Count: {formState.submitCount}</p>
        <p>Is Submitting: {formState.isSubmitting ? 'Yes' : 'No'}</p>
        <p>Is Valid: {formState.isValid ? 'Yes' : 'No'}</p>
        <p>Is Validating: {formState.isValidating ? 'Yes' : 'No'}</p>
      </div>
    </form>
  );
}

export default MyForm;
