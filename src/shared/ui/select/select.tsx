'use client';

import { useEffect, useRef, useState } from 'react';

import { ChevronDown } from 'lucide-react';

import styles from './select.module.css';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

interface DropdownRowProps {
  label: string;
  onClick: () => void;
}

function DropdownRow({ label, onClick }: DropdownRowProps) {
  return (
    <div className={styles.row} data-name="Row">
      <div className={styles.masterRow} data-name="Master Row" onClick={onClick}>
        <div className={styles.masterRowInner}>
          <div className={styles.masterRowContent}>
            <div className={styles.textRow} data-name="Text row">
              <div className={styles.rowText}>
                <p>{label}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Select = ({ options, value, onChange, placeholder = 'Select' }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={styles.selectContainer} ref={containerRef}>
      <button
        className={styles.selectButton}
        data-name="Segmented tabs button"
        onClick={handleToggle}
        type="button"
      >
        <div className={styles.selectText}>
          <p>{displayText}</p>
        </div>
        <ChevronDown size={12} />
      </button>
      <div
        className={`${styles.dropdown} ${isOpen ? styles.dropdownOpen : ''}`}
        data-name="Дроп даун"
      >
        {options.map((option) => (
          <DropdownRow
            key={option.value}
            label={option.label}
            onClick={() => handleSelect(option.value)}
          />
        ))}
      </div>
    </div>
  );
};
