import emailjs from '@emailjs/browser';

import { FormType } from '@/components/email-form';

export type Dog = {
  name?: string;
  image_link: string;
  minHeight?: string;
  maxHeight?: string;
  minWeight?: string;
  maxWeight?: string;
  minLifeExpectancy?: string;
  max_life_expectancy?: string;
  shedding?: string;
  barking?: string;
  energy?: string;
  protectiveness?: string;
  trainability?: string;
};

const API_KEY = process.env.API_KEY;
const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const EMAIL_USER_ID = process.env.NEXT_PUBLIC_USER_ID;

export const getDogs = async () => {
  const response = await fetch(`https://api.api-ninjas.com/v1/dogs?min_height=1`, {
    headers: {
      'X-Api-Key': API_KEY as string,
    },
  });

  return response.json();
};

export const parseResponse = async () => {
  const data = await getDogs();

  const [spaPackage] = data.splice(0, 1);
  const collars = data.splice(0, 3);
  const carryOns = data.splice(0, 3);

  return { spaPackage, collars, carryOns };
};

export const sendEmail = (data: FormType, reset: () => void) => {
  emailjs
    .send(
      EMAIL_SERVICE_ID as string,
      EMAIL_TEMPLATE_ID as string,
      { ...data },
      { publicKey: EMAIL_USER_ID }
    )
    .then(
      () => reset(),
      (error) => console.log(error)
    );
};
