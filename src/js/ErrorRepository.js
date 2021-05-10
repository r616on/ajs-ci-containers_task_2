export default class ErrorRepository {
  constructor() {
    this.map = new Map();
    this.map.set(1, 'Ошибка чтения');
    this.map.set(2, 'Ошибка записи');
    this.map.set(3, 'Ошибка типа данных');
  }

  translate(code) {
    return this.map.get(code) || 'Unknown error';
  }
}
