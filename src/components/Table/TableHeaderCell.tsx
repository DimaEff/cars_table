import {FC, PropsWithChildren} from 'react';
import {css} from "@emotion/css";
import Typography from "../Typography/Typography.tsx";

const TableHeaderCell: FC<PropsWithChildren> = ({children}) => {
    return (
        <th className={css`
            border-collapse: separate;
            overflow: hidden;
        `}>
            <Typography color={'white'}>
                {children}
            </Typography>
        </th>
    );
};

export default TableHeaderCell;