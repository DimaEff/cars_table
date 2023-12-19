import refreshIcon from '../../assets/refreshIcon.svg'
import {css, keyframes} from "@emotion/css";

const Loader = () => {
    const rotateKeyframes = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

    // Применение стилей с использованием библиотеки @emotion/css
    const rotateStyle = css`
    animation: ${rotateKeyframes} 2s linear infinite;
  `;
    return (
        <img src={refreshIcon} className={css`
            animation: ${rotateStyle} 2s linear infinite;
        `}/>
    );
};

export default Loader;