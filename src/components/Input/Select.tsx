import React, {FC, PropsWithChildren} from 'react';
import Typography from "../Typography/Typography.tsx";

export interface Option {
    label?: string
    value: string
}

interface SelectProps {
    errorMessage?: string
}

const Select: FC<PropsWithChildren<React.SelectHTMLAttributes<HTMLSelectElement> & SelectProps>> = ({
                                                                                                        children,
                                                                                                        errorMessage,
                                                                                                        ...props
                                                                                                    }) => {
    return (
        <div>
            <select {...props}>
                <option/>
                {children}
            </select>
            {errorMessage !== undefined && <Typography fontVariant={'sm'} color={'error'}>{errorMessage}</Typography>}
        </div>
    );
};

export default Select;