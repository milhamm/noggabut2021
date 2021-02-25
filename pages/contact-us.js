import TextInput from 'components/Form/TextInput';
import Layout from 'components/Layout';
import api from 'lib/api';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactUsPage = () => {
  const [message, setMessage] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await api.post('/contact/', data);
    setMessage(response.data.message);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <Layout>
      <div className='container mx-auto px-6 mb-24 lg:mb-32 mt-12 lg:mt-0'>
        <h1 className='font-bold text-4xl lg:text-6xl mb-4'>Hay fellas.</h1>
        <p className='font-medium text-lg lg:text-2xl'>
          Have a new project or just say hi?
        </p>
        <div className='mt-10 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24'>
          <div>
            <p className='w-full text-sm lg:text-lg lg:w-3/4'>
              For all work related inquiries and general questioning. please get
              in touch by filling this short form. We will get back to you in
              1x24 hours.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {message && (
                <div
                  className={`${
                    message ? 'bg-green-500' : 'bg-red-500'
                  } mb-8 px-6 py-3 text-white rounded`}
                >
                  {message ? message : 'Oops Something wrong'}
                </div>
              )}

              <label htmlFor='name'>Name</label>
              <TextInput
                name='name'
                placeholder='Ex. Muhammad Ilham Mubarak'
                required
                ref={register}
              />
              <label htmlFor='email'>Email</label>
              <TextInput
                name='email'
                type='email'
                placeholder='Ex. aang@gmail.com'
                required
                ref={register}
              />
              <label htmlFor='message'>Message</label>
              <TextInput
                name='message'
                type='textarea'
                required
                ref={register}
              />
              <button className='bg-black text-white px-12 py-3 rounded w-full lg:w-auto'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUsPage;
