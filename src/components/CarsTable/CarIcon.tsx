import {FC} from 'react';
import {css} from "@emotion/css";

interface CarIconProps {
    iconUrl: string
}

const CarIcon: FC<CarIconProps> = ({iconUrl}) => {
    return (
        <img className={css`
            transform: rotate(90deg);
            width: 35px;
        `} src={iconUrl}/>
    );
};

export default CarIcon;