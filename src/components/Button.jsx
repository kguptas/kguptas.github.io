import React from 'react'

const Button = ({name, isBeam=false, containerClass}) => {
    return (
        <button className={`btn hover:brightness-110 transition ${containerClass}`}> {/*template string stuff, look up later. btn is a custom utility class defined in css file*/}
            {isBeam && (
                <span className='relative flex h-3 w-3>'>
                    <span className='btn-ping'/>
                    <span className='btn-ping_dot'/>
                </span>
            )}
            {name}
        </button>
    )
}
export default Button
