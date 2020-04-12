import React from 'react'

const defaultTitle = "AWESOME STARTUP EMPLOYEE DIRECTORY";

export default function Header({ title = defaultTitle}) {
    return (
        <div className="header-text-container">
            <h1>{title}</h1>
        </div>
    )
}
