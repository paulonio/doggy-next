import { FC, ReactNode } from 'react';

import { TypographySize } from '@/types/common';

import { FontWeight, StyledTypography } from './styled';

type Props = {
  size: TypographySize;
  children: ReactNode;
  weight?: FontWeight;
  dataTestId?: string;
};

const Typography: FC<Props> = ({ size, weight, children, dataTestId }) => {
  return (
    <StyledTypography $size={size} $wieght={weight} data-testId={dataTestId}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
