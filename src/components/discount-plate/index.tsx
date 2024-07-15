import { FC } from "react";
import { StyledPlate } from "./styled";

type Props = {
  description?: string;
};

const DiscountPlate: FC<Props> = ({ description }) => {
  return (
    <StyledPlate>
      <p>{description}</p>
    </StyledPlate>
  );
}

export default DiscountPlate;