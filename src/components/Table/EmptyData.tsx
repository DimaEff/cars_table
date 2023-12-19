import {css} from "@emotion/css";
import Typography from "../Typography/Typography.tsx";

const EmptyData = () => {
    return (
        <div className={css`
            width: 100%;
            display: flex;
            justify-content: center;
        `}>
            <Typography>Нет записей</Typography>
        </div>
    );
};

export default EmptyData;