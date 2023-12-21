import refreshIcon from '../../assets/refreshIcon.svg'
import {css, keyframes} from "@emotion/css";

const rotateKeyframes = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Loader = () => {
    return (
        <img src={refreshIcon} className={css`
            animation: ${rotateKeyframes} 2s linear infinite;
        `}/>
    );
};

export default Loader;