import {SettingsDto} from "../../api/models/SettingsDto.ts";
import {FC, useState} from "react";
import {EmptyData, Table, TableHeaderCell, TableHeaderRow} from "../Table";
import {IconButton} from "../Button";
import addIcon from "../../assets/addIcon.svg";
import {css} from "@emotion/css";
import {useQuery} from "react-query";
import {QUERIES_KEYS} from "../../queriesKeys.ts";
import UserRow from "./UserRow.tsx";
import UserForm from "./UserForm.tsx";
import {createUser} from "../../api/adminApi.ts";

const tableColumns = ['e-mail', 'полномочия']

interface UsersTableProps {
    users: SettingsDto['users']
}

const UsersTable: FC<UsersTableProps> = ({users}) => {
    const [creatingMode, setCreatingMode] = useState(false)

    const {refetch} = useQuery(QUERIES_KEYS.GET_SETTINGS, {
        refetchOnWindowFocus: false,
        enabled: false,
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleCreateUser = async (data: any) => {
        setCreatingMode(false)
        await createUser(data)
        await refetch();
    }

    return (
        <div>
            <Table>
                <TableHeaderRow tableName={'АВТОМОБИЛИ'}>
                    {tableColumns.map(n => <TableHeaderCell key={n}>{n.toLocaleUpperCase()}</TableHeaderCell>)}
                </TableHeaderRow>
                <tbody>
                {users === 0 && <EmptyData/>}
                {users !== 0 && users.map(u => <UserRow key={u.user_id} user={u}/>)}
                {creatingMode && <UserForm handleCreateUser={handleCreateUser}/>}
                </tbody>
            </Table>
            <IconButton onClick={() => setCreatingMode(true)}><img src={addIcon} className={css`
                width: 32px;
            `}/></IconButton>
        </div>
    );
};

export default UsersTable;