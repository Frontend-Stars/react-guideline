import { ComponentSize, ComponentSizeList } from '@common/base/types';
import { COMPONENT_DEFAULT_SIZE } from '@common/base/constants';

export const validateSizeValue = (size: string): boolean => {
  return size in ComponentSizeList
}

export const getLastSizeByPrefix = (prefix: string, sizes: string[]): ComponentSize => {
  let lastFoundSize = sizes.filter((size) => size.includes(prefix)).pop();

  if (!lastFoundSize) {
    lastFoundSize = sizes.filter((size) => validateSizeValue(size)).pop();
  }

  if (lastFoundSize && !validateSizeValue(lastFoundSize)) {
    const size = lastFoundSize.replace(prefix, '').toLowerCase() as ComponentSize

    if (validateSizeValue(size)) {
      return size;
    }
  }

  return COMPONENT_DEFAULT_SIZE;
}

export const getSizesByPrefixes = <T extends string>(prefixes: T[], sizes: string): Record<T, ComponentSize> => {
  const parsedSizes = sizes.split(' ');
  const results: Record<T, ComponentSize> = {} as Record<T, ComponentSize>;

  prefixes.forEach((prefix) => {
    results[prefix] = getLastSizeByPrefix(prefix, parsedSizes);
  });

  return results;
}
