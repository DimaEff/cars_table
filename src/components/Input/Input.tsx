import React, {FC, forwardRef} from 'react';
import Typography from "../Typography/Typography.tsx";

interface InputProps {
    errorMessage?: string
}

const Input: FC<React.InputHTMLAttributes<HTMLInputElement> & InputProps> = forwardRef(({errorMessage, ...props}, ref) => {
    return (
        <div>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-expect-error */}
            <input {...props} ref={ref}/>
            {errorMessage !== undefined && <Typography fontVariant={'sm'} color={'error'}>{errorMessage}</Typography>}
        </div>
    );
});

export default Input;