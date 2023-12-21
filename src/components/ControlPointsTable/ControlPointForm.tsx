import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "../Input";
import {FC} from "react";
import {TableRow} from "../Table";
import {IconButton} from "../Button";
import checkIcon from '../../assets/checkIcon.svg'
import {css} from "@emotion/css";

const formSchema = z.object({
    point_name: z.string(),
    lat: z.number(),
    lng: z.number(),
    radius: z.number()
})

interface CarFormProps {
    handleCreatePoint: (data: z.infer<typeof formSchema>) => Promise<void>
}

const ControlPointForm: FC<CarFormProps> = ({handleCreatePoint}) => {
    const {handleSubmit, register, formState: {errors}} = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    return (
        <TableRow leftActionSlot={<IconButton onClick={handleSubmit(handleCreatePoint)}><img
            src={checkIcon}/></IconButton>} withoutDivider>
            <td>
                <Input {...register('point_name')} errorMessage={errors.point_name?.message} placeholder={'Название'}/>
            </td>
            <td>
                <div className={css`
                     display: flex;
                    gap: 4px;
                `}>
                    <Input {...register('lat', {valueAsNumber: true})} errorMessage={errors.lat?.message} placeholder={'lat'}/>
                    <Input {...register('lng', {valueAsNumber: true})} errorMessage={errors.lng?.message} placeholder={'lng'}/>
                </div>
            </td>
            <td>
                <Input {...register('radius', {valueAsNumber: true})} errorMessage={errors.radius?.message}
                       placeholder={'radius'}/>
            </td>
        </TableRow>
    );
};

export default ControlPointForm;