import { ReactNode, useEffect } from 'react';

import { X } from 'lucide-react';

import styles from './modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`${styles.modalOverlay} ${isOpen ? styles.open : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={styles.modalContent}>
        {children}
        <button className={styles.closeButton} onClick={onClose} type="button" data-name="Button">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
