import { StyledLink } from '@/components/footer/styled';
import Typography from '@/components/typography';

import { PolicyItem, Wrapper } from './styled';

const Policy = () => {
  return (
    <Wrapper>
      <PolicyItem>
        <StyledLink href="/" $size="s">
          Cookie Policy
        </StyledLink>
        <StyledLink href="/" $size="s">
          Cookies Settings
        </StyledLink>
      </PolicyItem>
      <Typography size="m" weight="regular">
        Copyright 2021 Luxe Animal Spa, LLC. All rights reserved.
      </Typography>
      <PolicyItem>
        <StyledLink href="/" $size="s">
          Terms
        </StyledLink>
        <StyledLink href="/" $size="s">
          Privacy
        </StyledLink>
        <StyledLink href="/" $size="s">
          Security
        </StyledLink>
      </PolicyItem>
    </Wrapper>
  );
};

export default Policy;
