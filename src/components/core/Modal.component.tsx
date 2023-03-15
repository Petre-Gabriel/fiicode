import classNames from "classnames";
import React from "react";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import Button from "./Button.component";
import Card from "./Card.component";
import Text from "./Text.component";

export default function Modal({
  children,
  open = false,
  title,
  showConfirmButton = true,
  confirmButtonText = "Ok",
  showDenyButton,
  denyButtonText = "Cancel",
  onClose,
  onConfirm,
}: {
  children?: React.ReactNode;
  open?: boolean;
  title?: string;
  showConfirmButton?: boolean;
  showDenyButton?: boolean;
  confirmButtonText?: string;
  denyButtonText?: string;
  onClose: () => void;
  onConfirm?: () => void;
}) {
  const ModalClass = classNames(
    "relative min-w-[35vw] max-w-[75vw] max-h-[80vh] overflow-y-scroll !shadow-none transition-all text-center",
    open === false && "pointer-events-none opacity-0"
  );

  const ModalWrapperClass = classNames(
    "fixed z-30 transition-all w-full h-full left-0 top-0 flex justify-center items-center bg-black/25 backdrop-blur-sm",
    open === false &&
      "pointer-events-none bg-transparent opacity-0 duration-150 delay-[100ms]"
  );

  /*
    Callback for the deny button, close button, or ESC key down event
  */
  const closeModal = React.useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  /*
    This callback is called when the confirm button is clicked
    */
  const confirmModalAction = React.useCallback(() => {
    if (onConfirm) onConfirm();
  }, [onConfirm]);

  /*
    We add an eventListener for the ESC button to close the modal
  */
  React.useEffect(() => {
    function handleModalClose(e: KeyboardEvent) {
      if (open === false) return;

      if (e.key !== "Escape") return;

      closeModal();
    }

    document.addEventListener("keydown", handleModalClose, { passive: true });

    return () => {
      document.removeEventListener("keydown", handleModalClose);
    };
  }, [open, closeModal]);

  React.useEffect(() => {
    if (open === true) document.body.style.overflow = "hidden";
    if (open === false) document.body.style.overflow = "auto";
  }, [open]);

  return (
    <div className={ModalWrapperClass}>
      <Card className={ModalClass} contentClass="flex flex-col gap-y-6">
        <div className="text-right mb-2">
          <button
            className="ml-auto w-fit text-xl cursor-pointer"
            onClick={closeModal}
          >
            &#x2715;
          </button>
        </div>
        {title && (
          <div>
            <Text as="p" variant="h3">
              {title}
            </Text>
          </div>
        )}

        <div>{children}</div>

        <div className="flex justify-center gap-x-2">
          {showConfirmButton && (
            <Button color="green" onClick={confirmModalAction}>
              <FiThumbsUp />
              <span>{confirmButtonText}</span>
            </Button>
          )}
          {showDenyButton && (
            <Button color="red" onClick={closeModal}>
              <FiThumbsDown />
              <span>{denyButtonText}</span>
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
