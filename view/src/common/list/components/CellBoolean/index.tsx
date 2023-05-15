export type CellBooleanProps = {
  value: boolean;
  positive?: string;
  negative?: string;
}

export const CellBoolean = ({ value, positive = 'Да', negative = 'Нет' }: CellBooleanProps) => {
  return <span>{value ? positive : negative}</span>;
}
