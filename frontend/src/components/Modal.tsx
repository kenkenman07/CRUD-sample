import { useEffect, useRef, type ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // isOpen の変化に合わせて、dialog を開閉する
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal(); // モーダルとして開く（背景は操作不可）
    } else {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        // 背景（dialog自身）のクリックで閉じる
        if (e.target === dialogRef.current) onClose();
      }}
      className="fixed inset-0 m-auto rounded-xl p-0 shadow-2xl backdrop:bg-black/50
                 dark:bg-gray-800 dark:text-gray-100"
    >
      <div className="w-100 p-6">
        <h2 className="mb-3 text-lg font-bold">{title}</h2>
        <div className="mb-5">{children}</div>
        <button
          onClick={onClose}
          className="text-sm rounded-lg bg-blue-600 px-2 py-1 text-white
                     hover:bg-blue-700"
        >
          閉じる
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
