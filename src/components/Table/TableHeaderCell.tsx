import {FC, PropsWithChildren} from 'react';
import {css} from "@emotion/css";

const TableHeaderCell: FC<PropsWithChildren> = ({children}) => {
    return (
        <th className={css`
            border-collapse: separate;
            overflow: hidden;
        `}>
            {children}
        </th>
    );
};

export default TableHeaderCell;