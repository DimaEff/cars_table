import {FC} from 'react';
import Select, {StylesConfig} from "react-select";
import {css} from "@emotion/css";

export interface Option {
    value: string,
    label: string
}

const customSelectStyles: StylesConfig = {
    control: (provided, state) => ({
        ...provided,
        border: 'none',
        borderBottom: '1px solid #ccc',
        borderRadius: 0,
        boxShadow: state.isFocused ? '0 0 0 2px rgba(0, 123, 255, 0.6)' : 'none',
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        border: 'none',
    }),
};

interface TableSelectCellProps {
    value: Option | null
    options: Option[]
    handleChangeValue: (o: Option) => void
}

const TableSelectCell: FC<TableSelectCellProps> = ({value, options, handleChangeValue}) => {
    return (
        <td className={css`
            padding-bottom: 12px;
        `}>
            {/* @ts-ignore */}
            <Select value={value} options={options} onChange={handleChangeValue} styles={{
                // @ts-ignore
                control: (provided, state) => ({
                    ...provided,
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                    borderRadius: 0,
                    boxShadow: state.isFocused ? '0 0 0 2px rgba(0, 123, 255, 0.6)' : 'none',
                    padding: 0
                }),
                // @ts-ignore
                dropdownIndicator: (provided) => ({
                    ...provided,
                    border: 'none',
                }),
            }} />
        </td>
    );
};

export default TableSelectCell;