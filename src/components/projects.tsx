import React from 'react'
import { projectsList } from '../data/projectsList'

const ProjectsList = () => {
    return (
        <div className="Home__Projects">
            <div className="Home__Projects--Content">
                {
                    projectsList.map(project => {
                        return (
                            <div className="Home__Projects--Card">
                                <div className='Home__Projects--Card--Title'>
                                <div className='Home__Projects--Card--Year'>
                                    {project.date}
                                </div>
                                {project.name}
                                </div>
                                <div className='Home__Projects--Card-Description'>
                                    {project.tagline}
                                </div>
                                <div className='Home__Projects--Card-Actions'>
                                    <button>somtn</button>
                                    <button>somtn</button>
                                    <button>somtn</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProjectsList