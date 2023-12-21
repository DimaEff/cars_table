import {FC} from 'react';
import {css} from "@emotion/css";

interface CarIconProps {
    iconUrl: string
    size?: number
}

const CarIcon: FC<CarIconProps> = ({iconUrl, size}) => {
    return (
        <img className={css`
            transform: rotate(90deg);
            max-width: ${size ?? 30}px;
        `} src={iconUrl}/>
    );
};

export default CarIcon;