import {FC, PropsWithChildren} from 'react';
import Typography from "../Typography/Typography.tsx";
import {css} from "@emotion/css";

const TableCell: FC<PropsWithChildren> = ({children}) => {
    return (
        <td className={css`
            padding-right: 16px;
        `}>
            <Typography>
                {children ?? '–'}
            </Typography>
        </td>
    );
};

export default TableCell;