import React, {FC, PropsWithChildren} from 'react';
import {css} from "@emotion/css";
import {MAIN_COLOR} from "../../constants.ts";

interface TableRowProps {
    leftActionSlot?: React.ReactNode
    withoutDivider?: boolean
}

const TableRow: FC<PropsWithChildren<TableRowProps>> = ({children, leftActionSlot, withoutDivider}) => {
    return (
        <>
            <tr className={css`
                position: relative;

                & td:nth-child(2) {
                    padding-left: 16px;
                }
            `}>
                <div className={css`
                    position: absolute;
                    left: -25px;
                    top: 50%;
                    transform: translate(0, -50%);

                    & img {
                        width: 24px
                    }
                `}>
                    {leftActionSlot}
                </div>
                {!withoutDivider && <div className={css`
                    position: absolute;
                    bottom: 4px;
                    height: 12px;
                    width: 100%;
                    border-radius: 4px;
                    background-color: ${MAIN_COLOR};
                `}/>}
                {children}
            </tr>
        </>
    );
};

export default TableRow;