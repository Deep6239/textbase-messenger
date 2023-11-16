import { fetchRedis } from "./redis"

export const getFriendByUserId = async (userId: string) => {
    // retrive friends for current user
    const friendIds = (await fetchRedis(
        'smembers',
        `user:${userId}:friends`
    )) as string[]

    const friends = await Promise.all(
        friendIds.map(async (friendId) => {
            const friend = await fetchRedis('get', `user:${friendId}`) as string
            const parsedFriend = JSON.parse(friend) as User
            return parsedFriend
        })
    )

    return friends
}