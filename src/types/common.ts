export type Link = {
  href: string;
  text: string;
};

export type Size = 'xs' | 's' | 'm' | 'l' | 'xl';

export type TypographySize = Extract<Size, 's' | 'm' | 'l'>;
