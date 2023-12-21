import * as z from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "../Input";
import {FC, useCallback} from "react";
import {TableRow} from "../Table";
import {IconButton} from "../Button";
import checkIcon from '../../assets/checkIcon.svg'
import Select from "react-select";

const formSchema = z.object({
    user_email: z.string(),
    user_role: z.string(),
})

interface CarFormProps {
    handleCreateUser: (data: z.infer<typeof formSchema>) => Promise<void>
}

const UserForm: FC<CarFormProps> = ({handleCreateUser}) => {
    const {handleSubmit, register, control, formState: {errors}} = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const rolesOptions = [{value: "admin", label: "Администратор"}, {value: "user", label: "Пользователь"}]
    const getRoleValueOption = useCallback((user_role: string | null) => rolesOptions.find(r => r.value === user_role) ?? null, [rolesOptions])

    return (
        <TableRow leftActionSlot={<IconButton onClick={handleSubmit(handleCreateUser)}><img
            src={checkIcon}/></IconButton>} withoutDivider>
            <td>
                <Input {...register('user_email')} errorMessage={errors.user_email?.message} placeholder={'E-mail'}/>
            </td>
            <td>
                <Controller
                    control={control}
                    name={'user_role'}
                    render={
                        ({field}) => <Select placeholder={'Полномочия'} value={getRoleValueOption(field.value) ?? null}
                                             onChange={o => field.onChange(o?.value)}
                                             options={rolesOptions}/>
                    }
                />
            </td>
        </TableRow>
    );
};

export default UserForm;