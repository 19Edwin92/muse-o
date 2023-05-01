import { useState } from "react";

export const useOpenModal = () => {
  const [modalState, setModalState] = useState(false)
  const openModalhandle = () => {
    setModalState(pre => !pre)
  }
  return { modalState, openModalhandle }
}