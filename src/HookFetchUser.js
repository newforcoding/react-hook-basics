import React from 'react'
import HookFetchCard from './HookFetchCard'
import useFetch from './use-fetch.effect'


function HookFetchUser({userId}) {
        const user = useFetch(
            `https://jsonplaceholder.typicode.com/users?id=${userId}`
            )
            console.log(user)
    return (
        <div>
            <HookFetchCard>
              {user ? ( 
                  <div>
                      <h2>{user.username}</h2>
                      <p>{user.name}</p>
                  </div>
              ):(
                  <p>User Not Found</p>
              )}
            </HookFetchCard>
        </div>
    )
}

export default HookFetchUser
