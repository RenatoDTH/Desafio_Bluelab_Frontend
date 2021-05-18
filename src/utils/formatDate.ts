export const formatDate = (value: string): string => {
  return new Date(value)
    .toISOString()
    .replace(/T.*/, '')
    .split('-')
    .reverse()
    .join('/');
};
