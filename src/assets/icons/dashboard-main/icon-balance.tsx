import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

function IconBalance(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="60" height="60" rx="30" fill="#D0E0FF" />
                <path d="M42 21H18C17.4477 21 17 21.4477 17 22V38C17 38.5523 17.4477 39 18 39H42C42.5523 39 43 38.5523 43 38V22C43 21.4477 42.5523 21 42 21Z" stroke="#3269D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M35 35H39" stroke="#3269D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M29 35H31" stroke="#3269D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17 26.1094H43" stroke="#3269D3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </SvgIcon>
    );
}

export default IconBalance;
