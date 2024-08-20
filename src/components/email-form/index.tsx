'use client';

import { ChangeEvent, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '@/components/button';
import { Form, Input, InputWrapper } from './styled';
import { sendEmail } from '@/utils/api';
import Typography from '../typography';

export type FormType = {
  email: string;
};

const schema = yup.object({
  email: yup.string().trim().email('Email must be valid').required(),
});

const EmailForm = () => {
  const [emailValue, setEmailValue] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<FormType>({ resolver: yupResolver(schema), defaultValues: { email: '' } });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (errors.email) {
      clearErrors();
    }

    const { value } = e.target;

    setEmailValue(value);
  };

  const onSubmit: SubmitHandler<FormType> = (data) => {
    sendEmail(data, reset);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      Subscribe to our Newsletter
      <InputWrapper>
        <div>
          <Input
            {...register('email')}
            id="mail"
            type="text"
            placeholder="Email"
            name="email"
            value={emailValue}
            onChange={handleInputChange}
          />
          <Typography size="s">{errors.email?.message}</Typography>
        </div>
        <Button type="submit">Submit</Button>
      </InputWrapper>
    </Form>
  );
};

export default EmailForm;