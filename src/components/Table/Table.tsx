import {FC, PropsWithChildren} from 'react';
import {css} from "@emotion/css";

const Table: FC<PropsWithChildren> = ({children}) => {
    return (
        <table className={css`
            background-color: transparent;
            border: none;
            padding: 8px;
            border-spacing: 0;
        `}>
            {children}
        </table>
    );
};

export default Table;