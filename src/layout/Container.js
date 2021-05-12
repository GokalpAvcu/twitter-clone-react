import React from 'react'

const Container = ({children}) => {
    return (
        <div className="flex min-h-screen max-w-7x1 mx-auto border">
            {children}
        </div>
    )
}

export default Container
