import ErrorRepository from '../ErrorRepository';

test('test ErrorRepository translate  ', () => {
  const error = new ErrorRepository();
  expect(error.translate(1)).toBe('Ошибка записи');
});
test('test ErrorRepository translate there is no data ', () => {
  const error = new ErrorRepository();
  expect(error.translate(100)).toBe('Unknown error');
});

test('test ErrorRepository add watch', () => {
  const error = new ErrorRepository();
  error.add(3, 'Ошибка данных');
  expect(error.translate(3)).toBe('Ошибка данных');
});
test('test ErrorRepository wrong data', () => {
  const error = new ErrorRepository();
  expect(() => error.add('3', 'Ошибка данных')).toThrow('Неверные данные');
});
test('test ErrorRepository the error already exists', () => {
  const error = new ErrorRepository();
  error.add(3, 'Ошибка данных');
  expect(() => error.add(3, 'Ошибка данных')).toThrow('Номер уже существует');
});
