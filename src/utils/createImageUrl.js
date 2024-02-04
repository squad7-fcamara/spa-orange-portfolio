export const base64ToUrl = (contentType, fileContents) => {
  return `data:${contentType};base64,${fileContents}`;
};
