import {FC, PropsWithChildren} from "react";
import {css} from "@emotion/css";
import {TypographyColors} from "./types.ts";
import {typographyColors} from "./constants.ts";

interface TypographyProps {
    color?: TypographyColors
}

const Typography: FC<PropsWithChildren<TypographyProps>> = ({children, color}) => {
    const _color = typographyColors[color ?? 'main']
    return (
        <p className={css`
            font-size: 16px;
            font-weight: bold;
            color: ${_color};
            text-align: left;
        `}>
            {children}
        </p>
    );
};

export default Typography;