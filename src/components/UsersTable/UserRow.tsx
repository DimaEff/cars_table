import {TableCell, TableRow, TableSelectCell} from "../Table";
import closeIcon from "../../assets/closeIcon.svg";
import {IconButton} from "../Button";
import {useQuery} from "react-query";
import {QUERIES_KEYS} from "../../queriesKeys.ts";
import {UserDto} from "../../api/models/UserDto.ts";
import {FC, useMemo} from "react";
import {Option} from "../Input";
import {saveUser} from "../../api/adminApi.ts";
import {RoleDto} from "../../api/models/RoleDto.ts";

interface UserRowProps {
    user: UserDto
    roles: RoleDto[]
}

const UserRow: FC<UserRowProps> = ({user, roles}) => {
    const {isLoading, refetch} = useQuery(QUERIES_KEYS.DELETE_USER(user.user_id), {
        refetchOnWindowFocus: false,
        enabled: false
    })

    const settingsQuery = useQuery(QUERIES_KEYS.GET_SETTINGS, {
        refetchOnWindowFocus: false,
        enabled: false,
    })

    const rolesOptions = useMemo(() => roles.map(r => ({value: r.role, label: r.ru})), [roles])
    const roleValueOption = useMemo(() => rolesOptions.find(r => r.value === user.user_role) ?? null, [rolesOptions, user])

    const handleChangeUserRole = async (o: Option) => {
        await saveUser({...user, user_role: o.value})
        await settingsQuery.refetch()
    }

    return (
        <TableRow leftActionSlot={<IconButton loading={isLoading} onClick={() => refetch()}>
            <img src={closeIcon}/>
        </IconButton>}>
            <TableCell>
                {user.user_email}
            </TableCell>
            <TableSelectCell value={roleValueOption} options={rolesOptions} handleChangeValue={handleChangeUserRole}/>
        </TableRow>
    );
}

export default UserRow;