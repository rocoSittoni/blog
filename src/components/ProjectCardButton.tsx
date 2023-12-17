import React from 'react'

interface CardButtonProps {
    text: string
}

const ProjectCardButton: React.FC<CardButtonProps> = ({text}) => {
  return (
    <div className='Home__Projects--Button'>{text}</div>
  )
}

export default ProjectCardButton