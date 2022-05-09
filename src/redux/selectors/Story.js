const getReadableStories = (stories, archiveIds) => {
  return stories.filter(isNotArchived(archiveIds));
};

const isNotArchived = (archiveIds) => (story) =>
  archiveIds.indexOf(story.objectID) === -1;

export { getReadableStories };
