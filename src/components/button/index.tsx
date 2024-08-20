import { ButtonHTMLAttributes, FC } from 'react';
import { LinkProps } from 'next/link';
import { Background, StyledButton, StyledLink } from './styled';

type Props = { background?: Background } & ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<LinkProps>;

const Button: FC<Props> = ({ href, children, background = 'primary' }, props) => {
  if (href) {
    return (
      <StyledLink href={href} $background={background} {...props}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton $background={background} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
