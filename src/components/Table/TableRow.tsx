import React, {FC, PropsWithChildren} from 'react';
import {css} from "@emotion/css";

interface TableRowProps {
    leftActionSlot?: React.ReactNode
}

const TableRow: FC<PropsWithChildren<TableRowProps>> = ({children, leftActionSlot}) => {
    return (
        <tr className={css`
            position: relative;
            
            & td:nth-child(2) {
                padding-left: 16px;
            }
        `}>
            <div className={css`
                position: absolute;
                left: -30px;
            `}>
                {leftActionSlot}
            </div>
            {children}
        </tr>
    );
};

export default TableRow;