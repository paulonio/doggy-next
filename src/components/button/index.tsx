import { LinkProps } from 'next/link';
import { ButtonHTMLAttributes, FC } from 'react';

import { Background, StyledButton, StyledLink } from './styled';

type Props = {
  background?: Background;
  dataTestId?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<LinkProps>;

const Button: FC<Props> = ({ href, children, background = 'primary', dataTestId }, props) => {
  if (href) {
    return (
      <StyledLink href={href} $background={background} data-testid={dataTestId} {...props}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton $background={background} data-testid={dataTestId} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
