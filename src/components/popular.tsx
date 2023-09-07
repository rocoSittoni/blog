import React from 'react'

const Popular = () => {
    return (
        <div className="Popular">
            <h1 className="Popular__Title">Popular</h1>
            <div className="Popular__Content">
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12].map(i => {
                        return (
                            <div className="Popular__Post">
                                Hello there
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Popular