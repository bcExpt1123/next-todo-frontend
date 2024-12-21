'use client'
import {createContext, ReactNode, useContext, useState} from "react";
import {Modal} from "@/components/utils/modal";

export interface ConfirmationContextType {
  openModal: (title: string, description: string) => Promise<boolean>;
}

export const confirmationContext = createContext<ConfirmationContextType | null>(null);

export const ConfirmationProvider: React.FC<{ children: ReactNode }> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [resolveCallback, setResolveCallback] = useState<(value: boolean) => void>();

  const openModal = (title: string, description: string): Promise<boolean> => {
    setModalTitle(title);
    setModalDescription(description);
    setIsOpen(true);

    return new Promise((resolve) => {
      setResolveCallback(() => resolve);
    });
  };

  const closeModal = () => {
    setIsOpen(false);
    if (resolveCallback) resolveCallback(false); // User canceled
  };

  const confirmModal = () => {
    setIsOpen(false);
    if (resolveCallback) resolveCallback(true); // User confirmed
  };

  return (
    <confirmationContext.Provider value={{openModal}}>
      {children}
      {
        isOpen
          ? <Modal
            title={modalTitle}
            description={modalDescription}
            onPass={confirmModal}
            onClose={closeModal}
          />
          : <></>
      }
    </confirmationContext.Provider>
  );
}

export const useModal = (): ConfirmationContextType => {
  const context = useContext(confirmationContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};