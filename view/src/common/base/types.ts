export enum ComponentSizeList {
  xxl = 'xxl',
  xl = 'xl',
  l = 'l',
  m = 'm',
  s = 's',
  xs = 'xs'
}

export type ComponentSize = `${ComponentSizeList}`;

export type ComponentSizeUpper = Uppercase<ComponentSize>;

export type GenerateSizeCompilation<
  Prefix extends string,
  Sizes extends string
> = `${`${Prefix}${Sizes}` | `${Prefix}${Sizes} ${Prefix}${Sizes}`}`;
