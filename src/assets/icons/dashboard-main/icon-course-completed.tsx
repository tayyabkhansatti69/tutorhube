import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

function IconCourseCompleted(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 0C17.9437 0 0 17.9437 0 40C0 62.0563 17.9437 80 40 80C62.0563 80 80 62.0563 80 40C80 17.9437 62.0563 0 40 0Z" fill="url(#paint0_linear_689_48969)" />
                <defs>
                    <linearGradient id="paint0_linear_689_48969" x1="11.73" y1="68.2712" x2="68.2713" y2="11.7287" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#7055C2" />
                        <stop offset="1" stop-color="#D055C2" />
                    </linearGradient>
                </defs>
            </svg>


        </SvgIcon>
    );
}

export default IconCourseCompleted;
