export const textSlice = (text, length) => {
  if (text.length <= length || text.length - 3 <= length) return text.trim();

  const size = length - 3;

  return `${text.slice(0, size).trim()}...`;
};
