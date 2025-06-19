import * as React from "react"

export interface ReactComponentProps {
    children: React.ReactNode
}

export interface ImageData {
    id: string;
    url: string;
    prompt: string;
    createdAt: Date;
}

export interface ApiResponse {
    success: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
    error?: string;
}