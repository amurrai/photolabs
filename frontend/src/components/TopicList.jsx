import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics, onLoadTopic}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} onLoadTopic={onLoadTopic}/>
       ))} 
    </div>
  );
};

export default TopicList;
