import classNames from "classnames";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
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
}: {
  children?: React.ReactNode;
  open?: boolean;
  title?: string;
  showConfirmButton?: boolean;
  showDenyButton?: boolean;
  confirmButtonText?: string;
  denyButtonText?: string;
  onClose: () => void;
}) {
  const ModalClass = classNames(
    "min-w-[35vw] max-w-[75vw] !shadow-none transition-all",
    open === false && "pointer-events-none opacity-0"
  );
  const ModalWrapperClass = classNames(
    "fixed z-30 transition-all w-full h-full left-0 top-0 flex justify-center items-center bg-black/25 backdrop-blur-sm",
    open === false &&
      "pointer-events-none bg-transparent opacity-0 duration-150 delay-[100ms]"
  );

  React.useEffect(() => {
    function handleModalClose(e: KeyboardEvent) {
      if (open === false) return;

      if (e.key !== "Escape") return;

      if (onClose) onClose();
    }

    document.addEventListener("keydown", handleModalClose, { passive: true });

    return () => {
      document.removeEventListener("keydown", handleModalClose);
    };
  }, [open, onClose]);

  return (
    <div className={ModalWrapperClass}>
      <Card className={ModalClass}>
        {title && (
          <div className="text-center mb-4">
            <Text as="p" variant="h3">
              {title}
            </Text>
          </div>
        )}

        <div>{children}</div>

        <div className="flex gap-x-2">
          {showConfirmButton && (
            <Button color="green">
              <FiThumbsUp />
              <span>{confirmButtonText}</span>
            </Button>
          )}
          {showDenyButton && (
            <Button color="red">
              <FiThumbsUp />
              <span>{denyButtonText}</span>
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
