import React from "react";

type PageProps = {};

export const Page: React.FC<PageProps> = ({ children }) => {
  return <div className="max-w-md m-auto mt-8">{children}</div>;
};
