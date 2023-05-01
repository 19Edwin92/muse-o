import { useState } from "react";

export const useFormInput = () => {
  const [formState, setFormState] = useState({});
  const handleInputChange = (event) => {
    event.persist();
    setFormState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return [formState, setFormState, handleInputChange];
};
