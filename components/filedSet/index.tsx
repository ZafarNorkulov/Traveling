import React, { ReactNode } from "react";

type FieldType = {
  title: string;
  children: ReactNode;
  className?: string
};

const FieldSetComponent = ({ title, children,className }:FieldType) => {
  return (
    <fieldset className={`field_set_box ${className ? className : ""}`}>
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
};

export default FieldSetComponent;
