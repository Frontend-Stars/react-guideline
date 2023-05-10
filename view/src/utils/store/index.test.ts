import { BaseCollection } from './';

it('sums numbers', () => {
  const test = new BaseCollection<{ label: string; }>();
  const selectMock = jest.fn((data: any) => {});
  const selectByIdMock = jest.fn((data: any) => {});

  test.select().subscribe((data) => {
    selectMock(data);
  });

  test.selectById('1').subscribe((item) => {
    selectByIdMock(item);
  });

  expect(selectByIdMock).toBeCalledWith(undefined);

  test.set({'1': {label: 'kekw1'}, '2': {label: 'kekw2'}});

  expect(selectMock).toBeCalledWith({'1': {label: 'kekw1'}, '2': {label: 'kekw2'}});
  expect(selectByIdMock).toBeCalledWith({label: 'kekw1'});

  test.update('1', { label: 'test 2' });

  expect(selectByIdMock).toBeCalledWith({label: 'test 2'});
});