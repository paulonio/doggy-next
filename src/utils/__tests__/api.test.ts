import emailjs from '@emailjs/browser';

import { Dog, getDogs, parseResponse, sendEmail } from '@/utils/api';

const SUCCESS_RESPONSE_MOCK: Dog[] = [
  {
    name: 'Affenpinscher',
    image_link: 'link',
    energy: '0',
    barking: '1',
    protectiveness: '3',
    max_life_expectancy: '12',
  },
  {
    name: 'Afghan Hound',
    image_link: 'link',
    energy: '4',
    barking: '3',
    protectiveness: '3',
    max_life_expectancy: '18',
  },
  {
    name: 'Airedale Terrier',
    image_link: 'link',
    energy: '3',
    barking: '3',
    protectiveness: '5',
    max_life_expectancy: '14',
  },
  {
    name: 'Akita',
    image_link: 'link',
    energy: '4',
    barking: '2',
    protectiveness: '5',
    max_life_expectancy: '14',
  },
  {
    name: 'Klee Kai',
    image_link: 'link',
    energy: '4',
    barking: '0',
    protectiveness: '0',
    max_life_expectancy: '16',
  },
  {
    name: 'Alaskan Malamute',
    image_link: 'link',
    energy: '4',
    barking: '3',
    protectiveness: '4',
    max_life_expectancy: '14',
  },
  {
    name: 'American Bulldog',
    image_link: 'link',
    energy: '0',
    barking: '1',
    protectiveness: '0',
    max_life_expectancy: '12',
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(SUCCESS_RESPONSE_MOCK),
  })
) as jest.Mock;

const mockedReset = jest.fn();

emailjs.send = jest.fn(() =>
  Promise.resolve({
    then: () => Promise.resolve(() => mockedReset()),
  })
);

describe(getDogs.name, () => {
  it('should return correct data', async () => {
    const RETURNED_DATA = await getDogs();

    expect(RETURNED_DATA).toEqual(SUCCESS_RESPONSE_MOCK);
  });
});

describe(parseResponse.name, () => {
  it('should parse data correctly', async () => {
    const EXPECTED_RESULT = {
      spaPackage: SUCCESS_RESPONSE_MOCK[0],
      collars: [SUCCESS_RESPONSE_MOCK[1], SUCCESS_RESPONSE_MOCK[2], SUCCESS_RESPONSE_MOCK[3]],
      carryOns: [SUCCESS_RESPONSE_MOCK[4], SUCCESS_RESPONSE_MOCK[5], SUCCESS_RESPONSE_MOCK[6]],
    };

    const RETURNED_DATA = await parseResponse();

    expect(RETURNED_DATA).toEqual(EXPECTED_RESULT);
  });
});

describe(sendEmail.name, () => {
  it('should send email with correct data', () => {
    const MOCKED_DATA = { email: 'address@email.com' };

    sendEmail(MOCKED_DATA, mockedReset);

    expect(emailjs.send).toHaveBeenCalledWith('SERVICE_ID', 'TEMPLATE_ID', MOCKED_DATA, {
      publicKey: 'USER_ID',
    });
  });
});
