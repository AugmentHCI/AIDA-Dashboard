import React from "react";
import Button from "../button/Button";
import Icon from "../displays/Icon";
import H4 from "../typography/H4";

export interface ModalProps {
  children: React.ReactNode;
  state?: "normal" | "warning" | "error";
  title?: string;
  show: boolean;
  dismissText?: string;
  confirmText?: string;
  onDismiss?: () => void;
  onConfirm: () => void;
}

export default function Modal({
  children,
  title,
  show,
  dismissText,
  confirmText: confirmText = "Confirm",
  onDismiss,
  onConfirm,
}: ModalProps) {
  function renderButtons() {
    return (
      <div className="flex flex-row justify-end gap-4 px-4 py-3 border-t bg-slate-100 sm:px-6 dark:bg-slate-800 dark:border-slate-500">
        {dismissText && (
          <Button onClick={() => onDismiss && onDismiss()} style="secondary">
            {dismissText}
          </Button>
        )}
        <Button onClick={() => onConfirm()}>{confirmText}</Button>
      </div>
    );
  }

  if (show)
    return (
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 transition-opacity bg-opacity-80 bg-slate-700 dark:bg-slate-900 dark:bg-opacity-90" />
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div className="relative w-full max-w-lg my-8 overflow-hidden text-left transition-all transform bg-white shadow-2xl rounded-2xl dark:border-2 dark:border-slate-700">
              <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4 dark:bg-slate-700">
                <div className="sm:flex sm:items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-blue-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                    <Icon icon="warning-triangle" size={24} outline />
                  </div>
                  <div className="flex flex-col w-full mt-6 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <H4 className="text-lg leading-6">{title}</H4>
                    <div className="mt-2">
                      <div className="flex w-full text-sm">{children}</div>
                    </div>
                  </div>
                </div>
              </div>
              {renderButtons()}
            </div>
          </div>
        </div>
      </div>
    );

  return <></>;
}
