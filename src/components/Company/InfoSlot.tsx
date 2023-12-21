import React, {FC, PropsWithChildren} from 'react';
import {css} from "@emotion/css";
import {MAIN_COLOR} from "../../constants.ts";
import Typography from "../Typography/Typography.tsx";

interface InfoSlotProps {
    description: string
    descriptionRightPosition?: boolean
    rightIconSlot?: React.ReactNode
    descriptionIconSlot?: React.ReactNode
}

const InfoSlot: FC<PropsWithChildren<InfoSlotProps>> = ({
                                                            children,
                                                            description,
                                                            descriptionRightPosition,
                                                            rightIconSlot,
                                                            descriptionIconSlot
                                                        }) => {
    return (
        <div
            className={css`
                display: flex;
                align-items: start;
                gap: 2px;
            `}
        >
            <div
                className={css`
                    display: flex;
                    flex-direction: ${descriptionRightPosition ? 'row' : 'column'};
                    gap: 2px;
                `}
            >
                <div
                    className={css`
                        padding: 4px;
                        border-radius: 4px;
                        background-color: ${MAIN_COLOR};
                        height: 25px;
                        &>* {
                            margin: 0;
                        }
                    `}
                >
                    {children}
                </div>
                <div className={css`display: flex;
                    justify-content: space-between;
                    gap: 2px; &>* {
                        margin: 0;
                    }`}>
                    <Typography>
                        {description}
                    </Typography>
                    {descriptionIconSlot}
                </div>
            </div>
            {rightIconSlot}
        </div>
    );
};

export default InfoSlot;