import ErrorRepository from '../ErrorRepository';

test('test ErrorRepository translate  ', () => {
  const error = new ErrorRepository();
  expect(error.translate(2)).toBe('Ошибка записи');
});
test('test ErrorRepository translate there is no data ', () => {
  const error = new ErrorRepository();
  expect(error.translate(100)).toBe('Unknown error');
});
