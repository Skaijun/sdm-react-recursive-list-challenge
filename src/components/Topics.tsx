import { TopicType } from "../types/topic"
import TopicItem from "./TopicItem"

function Topics({ topics }: { topics: TopicType[] }) {
    return (
        <>
            <h2>Available Topics:</h2>
            {topics && topics.length > 0 && topics.map(topic => <TopicItem key={Math.random()} topic={topic} isShown isMainTopic />)}
        </>
    )
}

export default Topics
