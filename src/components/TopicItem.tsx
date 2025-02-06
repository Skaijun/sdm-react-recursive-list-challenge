import './TopicItem.css'

import { TopicType } from "../types/topic";
import { useState } from 'react';

function TopicItem({ topic, isShown, isMainTopic }: { topic: TopicType, isShown: boolean, isMainTopic: boolean }) {
    const [isExpanded, setExpanded] = useState(false);

    if (!isShown && !isMainTopic) return null;

    const { title, enabled, subtopics } = topic;
    return (
        <div className="topics">
            <ul className={enabled ? 'enabled' : ''}>
                <li onClick={() => setExpanded(!isExpanded)}>
                    {enabled && <span>{isExpanded ? '- ' : '+ '}</span>}
                    {title}{" "}
                    <span className='number-of-topics'>
                        {subtopics && subtopics.length ? subtopics.length : ''}
                    </span>
                </li>
                {
                    subtopics &&
                    subtopics.length > 0 &&
                    subtopics.map(
                        subTopic => <TopicItem topic={subTopic} isShown={isExpanded} isMainTopic={false} key={Math.random()} />
                    )
                }
            </ul>
        </div>
    )
}

export default TopicItem
