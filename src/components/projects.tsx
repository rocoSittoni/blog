import React from 'react'
import { projectsList } from '../data/projectsList'

const Projects = () => {
    return (
        <div className="Home__Projects">
            <h1 className="Home__Projects--Title">Projects</h1>
            <div className="Home__Projects--Content">
                {
                    projectsList.map(project => {
                        return (
                            <div className="Home__Projects--Card">
                                {project.name}
                                {project.highlight}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects