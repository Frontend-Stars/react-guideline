export type CellLinkProps = {
  value: string;
  url: string;
}

export const CellLink = ({ value, url }: CellLinkProps) => {
  return <a href={url}>{value}</a>;
}
