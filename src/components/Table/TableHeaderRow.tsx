import {FC, PropsWithChildren} from 'react';
import {css} from "@emotion/css";
import Typography from "../Typography/Typography.tsx";

interface TableHeaderRowProps {
    tableName: string
}

const TableHeaderRow: FC<PropsWithChildren<TableHeaderRowProps>> = ({children, tableName}) => {
    return (
        <thead>
            <tr className={css`
                position: relative;

                & > th {
                    background-color: rgb(7, 140, 117);
                    padding-top: 16px;
                }

                & th:nth-child(2) {
                    padding-left: 16px;

                    border-top-left-radius: 8px;
                    border-bottom-left-radius: 8px;
                }

                & th:last-child {
                    padding-right: 16px;

                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                }
            `}>
                <div className={css`
                    position: absolute;
                    top: -4px;
                    left: 16px;
                `}>
                    <Typography color={'white'}>{tableName}</Typography>
                </div>
                {children}
            </tr>
        </thead>
    );
};

export default TableHeaderRow;