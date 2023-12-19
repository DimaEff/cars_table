import {FC, PropsWithChildren} from 'react';
import Typography from "../Typography/Typography.tsx";

const TableCell: FC<PropsWithChildren> = ({children}) => {
    return (
        <td>
            <Typography>
                {children ?? '–'}
            </Typography>
        </td>
    );
};

export default TableCell;