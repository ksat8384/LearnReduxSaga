import React, {FC} from 'react';
import {FlatList} from 'react-native';
import Story from './Story';
import {IStoryProps} from './Story';

export type IStoriesProps = {
  stories: Array<IStoryProps>;
};

const Stories: FC<IStoriesProps> = ({stories}) => {
  console.log('stories >>', stories);

  const renderItem = ({item}: any) => {
    const story = item as IStoryProps;
    return <Story {...story} />;
  };
  ``;
  return (
    <FlatList
      data={stories}
      renderItem={renderItem}
      keyExtractor={item => `${item.objectID}`}
    />
  );
};

export default Stories;
