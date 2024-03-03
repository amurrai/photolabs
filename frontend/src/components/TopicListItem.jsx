import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({topic, onLoadTopic}) => {
  const handleClick = () => {
    onLoadTopic(topic.id)
  };

  return (
    <div className="topic-list__item">
      <h2 onClick={handleClick}>{topic.title} </h2>
    </div>
  );
};

export default TopicListItem;
