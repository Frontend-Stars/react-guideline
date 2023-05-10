export type CellTextProps = {
  value: string;
}

export const CellText = ({ value }: CellTextProps) => {
  return <span>{value}</span>;
}
