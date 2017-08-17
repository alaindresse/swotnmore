//@flow

import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ArticleListItem from "./article-list-item";

const testArticle: Article = {
  id: "articleId",
  title: "article title",
  description: "description"
};

storiesOf("Article List", module).add("list item", () => <ArticleListItem article={testArticle} />);
