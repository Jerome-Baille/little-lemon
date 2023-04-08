import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogOverlay,
  } from "@chakra-ui/react";
  import { useAlertContext } from "../context/alertContext";
  import { useRef } from "react";
  
  /**
   * This is a global component that uses context to display a global alert message.
   */
  function Alert() {
    const { isOpen, type, title, message, onClose } = useAlertContext();
    const cancelRef = useRef();
    const isSuccess = type === "success"
  
    return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader 
              fontSize="3xl" 
              fontWeight="bold" 
              backgroundColor={isSuccess ? 'var(--color-primary)' : 'var(--color-error)'}   // isSuccess ? olive green : american red
              color={isSuccess ? 'var(--color-secondary)' : 'white'}  // isSuccess ? lemon yellow : white
              textAlign="center"
            >
              {title}
            </AlertDialogHeader>
            <AlertDialogBody
              fontSize="xl"
              textAlign={isSuccess ? 'left' : 'center'}
              p={isSuccess ? '0' : '4'}
            >
              {message}
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  }
  
  export default Alert;
  