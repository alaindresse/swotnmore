//@flow

import React from "react";

type ArticleListItemProps = { article: Article };

const ArticleListItem = ({ article }: ArticleListItemProps) => {
  return (
    <div>
      <p>
        {article.title}
      </p>
      <p>
        {article.description}
      </p>
    </div>
  );
};

export default ArticleListItem;
