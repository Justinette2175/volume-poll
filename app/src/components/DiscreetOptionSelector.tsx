import React from "react";
import clsx from "clsx";

import { Button } from "./Button";

type DiscreetOptionSelectorProps = {
  onClick: (v: string) => void;
  value: string;
  active: boolean;
};

export const DiscreetOptionSelector: React.FC<DiscreetOptionSelectorProps> = ({
  onClick,
  value,
  active,
}) => {
  return (
    <Button
      className={clsx(active && "bg-red-600")}
      onClick={() => onClick(value)}
    >
      {value}
    </Button>
  );
};
