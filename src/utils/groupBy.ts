export default function groupBy<T>(
  items: T[],
  keySelector: (item: T) => string
) {
  return items.reduce<{ [k: string]: T[] }>((dictionary, item) => {
    const itemKey = keySelector(item);
    dictionary[itemKey] = (dictionary[itemKey] ?? []).concat(item);
    return dictionary;
  }, {});
}
