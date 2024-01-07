import React from 'react';
import { FaReact } from 'react-icons/fa';

const CustomCheckbox = ({ isChecked, onChange, label, icon, disabled }) => {
    return (
        <div className="pl-3 pt-[17px]">
            <label className={`gap-[10px] custom-checkbox flex items-center ${disabled ? 'opacity-[0.4]' : ''}`}>
                <div>
                    <input type="checkbox" checked={isChecked} onChange={() => onChange} disabled={disabled} />
                    <span className="checkmark"></span>
                </div>
                <div className="flex items-center gap-2">
                    {icon && React.cloneElement(icon, {
                        className: `text-2xl -translate-y-[2px] ${disabled ? 'opacity-[0.4]' : 'text-[#607B96]'}`
                    })}
                    <h2 className={`fira-code-regular text-[18px] text-[#607B96] ${disabled ? 'opacity-[0.4]' : ''}`}>{label}</h2>
                </div>
            </label>
        </div>
    );
};

export default CustomCheckbox;
