import React from 'react'
import { Post } from '../interfaces/post.interface'

const Popular = (sanityData: any) => {

    console.log(sanityData)
    const posts = sanityData.sanityData.filter((post: Partial<Post>) => post.popular = true);

    return (
        <div className="Popular">
            <h1 className="Popular__Title">Popular</h1>
            <div className="Popular__Content">
                {
                    posts.map((post: any) => {
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