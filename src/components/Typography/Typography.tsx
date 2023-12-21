import {FC, PropsWithChildren} from "react";
import {css} from "@emotion/css";
import {TypographyColors, TypographyFonts} from "./types.ts";
import {fontVariants, typographyColors} from "./constants.ts";

interface TypographyProps {
    color?: TypographyColors
    fontVariant?: TypographyFonts
}

const Typography: FC<PropsWithChildren<TypographyProps>> = ({children, color, fontVariant}) => {
    const _color = typographyColors[color ?? 'main']
    const _fontSize = fontVariants[fontVariant ?? 'main']
    return (
        <p className={css`
            font-size: ${_fontSize};
            font-weight: bold;
            color: ${_color};
            text-align: left;
        `}>
            {children}
        </p>
    );
};

export default Typography;