import React, {FC, forwardRef} from 'react';
import Typography from "../Typography/Typography.tsx";
import {css} from "@emotion/css";

interface InputProps {
    errorMessage?: string
}

const Input: FC<React.InputHTMLAttributes<HTMLInputElement> & InputProps> = forwardRef(({errorMessage, ...props}, ref) => {
    return (
        <div>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-expect-error */}
            <input {...props} ref={ref} className={css`
                width: 100%;
                padding: 8px;
                font-size: 16px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
            `}/>
            {errorMessage !== undefined && <Typography fontVariant={'sm'} color={'error'}>{errorMessage}</Typography>}
        </div>
    );
});

export default Input;