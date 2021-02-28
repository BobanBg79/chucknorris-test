export const textTruncate = (text, maxChars, suffix) => {
  if (text.length <= maxChars) return text;
  const truncatedText = text.substring(0, maxChars);
  const lastCharIsSpace = !truncatedText
    .substring(truncatedText.length - 1)
    .trim();

  return lastCharIsSpace ? truncatedText : `${truncatedText}${suffix}`;
};

export const getUniqueValuesFromArray = (arr) =>
  arr.filter((item, index, arr) => arr.indexOf(item) === index);
