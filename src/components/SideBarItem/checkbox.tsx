// Core
import React, { FC } from "react";
import { Checkbox as Check } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

// Models
import { addCheckboxValue } from "../../models/filter";

// Types
export type CheckboxValueTypes = "Готов" | "Закрыт" | "В работе";

type CheckboxPropsTypes = {
  title: string;
  value: CheckboxValueTypes;
};

const Checkbox: FC<CheckboxPropsTypes> = (props: CheckboxPropsTypes) => {
  const { title, value } = props;

  const onChange = (event: CheckboxChangeEvent) => {
    addCheckboxValue([value]);
  };

  return (
    <Check
      className="checkbox"
      onChange={onChange}
      style={{ color: "rgba(255, 255, 255, .85)" }}
    >
      {title}
    </Check>
  );
};

export { Checkbox };
