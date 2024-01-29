import React from 'react'
import { projectsList } from '../data/projectsList'
import { Link, PageProps } from 'gatsby'
import ViewAllButton from './ViewAllButton'
import ProjectCardButton from './ProjectCardButton';

interface HomeProps {
    viewAll: boolean;
}

const ProjectsList: React.FC<HomeProps> = ({viewAll}) => {
    return (
        <div className="Home__Projects">
            {
                viewAll
                ? <div className='Home__Projects--Header'>
                        <h1 className="Home__Projects--Title">Projects</h1>
                        <Link to="/projects">
                            <ViewAllButton />
                        </Link>
                  </div>
                : ''
            }
            <div className="Home__Projects--Content">
                {
                    projectsList.map(project => {
                        return (
                            <div className="Home__Projects--Card">
                                <div className='Home__Projects--Card--Year'>
                                    {project.date}
                                </div>
                                <div className='Home__Projects--Card--Title'>
                                    {project.name}
                                </div>
                                <div className='Home__Projects--Card-Description'>
                                    {project.tagline}
                                </div>
                                <div className='Home__Projects--Card-Actions'>
                                    <ProjectCardButton text='Article'/>
                                    <ProjectCardButton text='Demo'/>
                                    <ProjectCardButton text='Source'/>
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