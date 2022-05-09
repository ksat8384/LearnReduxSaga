import React, { FC } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { archiveStory } from "../redux/ArchiveSlice";

export type IStoryProps = {
  title: string;
  url: string;
  author: string;
  num_comments: number;
  points: number;
  objectID: number;
};

const Story: FC<IStoryProps> = ({
  title,
  url,
  author,
  num_comments,
  points,
  objectID,
}) => {
  console.log("title>>", title);
  const dispatch = useDispatch();

  const onArchive = (objectID: number) => {
    console.log("onArchive() >> objectID>>", objectID);
    dispatch(archiveStory({ objectID }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{url}</Text>
      <Text style={styles.text}>{author}</Text>
      <Text style={styles.text}>{num_comments}</Text>
      <Text style={styles.text}>{points}</Text>
      <Button
        title="archive"
        onPress={() => {
          onArchive(objectID);
        }}
      />
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
    padding: 20,
    backgroundColor: "orange",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20,
  },
});
