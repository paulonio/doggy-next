import { FC, ReactNode } from 'react';
import { FontWeight, StyledTypography } from './styled';
import { TypographySize } from '@/types/common';

type Props = {
  size: TypographySize;
  children: ReactNode;
  weight?: FontWeight;
};

const Typography: FC<Props> = ({ size, weight, children }) => {
  return (
    <StyledTypography $size={size} $wieght={weight}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
