'use client';

import { styled } from 'styled-components';
import { TypographySize } from '@/types/common';
import { sizeValues } from '@/constants/sizes';

export type FontWeight = 'regular' | 'bold';

type Props = {
  $size: TypographySize;
  $wieght?: FontWeight;
};

export const StyledTypography = styled.p<Props>`
  color: #4c4c4b;
  font-weight: ${({ $wieght }) => ($wieght === 'bold' ? '700' : '400')};

  ${({ $size }) =>
    $size &&
    `
        font-size: ${sizeValues[$size].fontSize};
        line-height: ${sizeValues[$size].lineHeight};
    `};
`;
