import React, { FC } from "react";
import { FlatList } from "react-native";
import Story from "./Story";
import { IStoryProps } from "./Story";
import { useSelector, Provider } from "react-redux";
import { getReadableStories } from "../redux/selectors/Story";

export type IStoriesProps = {
  stories: Array<IStoryProps>;
};

const Stories: FC = () => {
  const stories = useSelector((state) => {
    console.log("state -->>>", state);
    return getReadableStories(state.stories, state.archive);
  });
  console.log("stories >>", stories);

  const renderItem = ({ item }: any) => {
    const story = item as IStoryProps;
    return <Story {...story} />;
  };
  ``;
  return (
    <FlatList
      data={stories}
      renderItem={renderItem}
      keyExtractor={(item) => `${item.objectID}`}
    />
  );
};

export default Stories;
