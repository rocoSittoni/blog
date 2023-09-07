import React from 'react'

const Projects = () => {
    return (
        <div className="Home__Projects">
            <h1 className="Home__Projects--Title">Projects</h1>
            <div className="Home__Projects--Content">
                {
                    [1,2,3,4,5,6].map(i => {
                        return (
                            <div className="Home__Projects--Card">
                                Hello there
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects