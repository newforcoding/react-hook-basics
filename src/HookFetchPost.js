import React from 'react'
import useFetch from './use-fetch.effect'
import HookFetchCard from './HookFetchCard'

function HookFetchPost({postId}) {
        const post = useFetch(
            `https://jsonplaceholder.typicode.com/posts?id=${postId}`
            )
    return (
        <div>
            <HookFetchCard>
                {post ? (
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ):(
                    <p>No Post Found</p>
                )}
            </HookFetchCard>
        </div>
    )
}

export default HookFetchPost
