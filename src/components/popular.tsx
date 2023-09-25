import React from 'react'

const Popular = (sanityData: any) => {
    return (
        <div className="Popular">
            <h1 className="Popular__Title">Popular</h1>
            <div className="Popular__Content">
                {
                    [1,2,3,4,5,6,7,8,9].map(i => {
                        return (
                            <div className="Popular__Post">
                                Hi! Im a not writen yet post 
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Popular