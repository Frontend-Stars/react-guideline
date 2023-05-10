import moment from 'moment';

export type CellDateProps = {
  value: string;
  format?: string;
}

export const CellDate = ({ value, format = 'Y-m-d' }: CellDateProps) => {
  const date = moment(value).format(format);

  return <span>{date}</span>;
}
