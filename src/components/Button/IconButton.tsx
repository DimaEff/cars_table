import React, {FC, PropsWithChildren} from "react";
import {css} from "@emotion/css";
import {Loading} from "./types.ts";
import Loader from "./Loader.tsx";

type IconButtonProps =
    Loading
    & React.ButtonHTMLAttributes<HTMLButtonElement>

const IconButton: FC<PropsWithChildren<IconButtonProps>> = ({children, loading, ...props}) => {
    return (
        <button
            className={css`
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: transparent;
                outline: none;
                border: none;
                padding: 4px;
                cursor: pointer;
            `}
            {...props}
        >
            {loading ? <Loader/> : children}
            {}
        </button>
    );
};

export default IconButton;