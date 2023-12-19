import {useQuery} from "react-query";
import {QUERIES_KEYS} from "./queriesKeys.ts";
import {getSettings} from "./api/adminApi.ts";
import {css} from "@emotion/css";
import {Table, TableHeaderCell, TableHeaderRow, TableRow} from "./components/Table";
import Typography from "./components/Typography/Typography.tsx";
import {IconButton} from "./components/Button";


function App() {
    const {data} = useQuery(QUERIES_KEYS.GET_SETTINGS, getSettings)

    return (
        <div className={css`
            display: flex;
            flex-direction: column;
            gap: 8px;
        `}>
            <Table>
                <TableHeaderRow tableName={'Автомобили'}>
                    <TableHeaderCell>
                        <Typography color={'white'}>
                            asdasd
                        </Typography>
                    </TableHeaderCell>
                    <TableHeaderCell>
                        <Typography color={'white'}>
                            asdasd
                        </Typography>
                    </TableHeaderCell>
                    <TableHeaderCell>
                        <Typography color={'white'}>
                            asdasd
                        </Typography>
                    </TableHeaderCell>
                </TableHeaderRow>
                <tbody>
                <TableRow leftActionSlot={<IconButton>123</IconButton>}>
                    <td>
                        <Typography>1-123</Typography>
                    </td>
                    <td>
                        <Typography>1-123</Typography>
                    </td>
                    <td>
                        <Typography>1-123</Typography>
                    </td>
                </TableRow>
                </tbody>
            </Table>
        </div>
    )
}

export default App
