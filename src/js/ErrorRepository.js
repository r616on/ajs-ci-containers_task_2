export default class ErrorRepository {
  constructor() {
    this.map = new Map();
    this.map.set(1, 'Ошибка записи');
  }

  add(number, text) {
    if (typeof number === 'number' && typeof text === 'string') {
      if (!this.map.get(number)) {
        this.map.set(number, text);
      } else {
        throw new Error('Номер уже существует');
      }
    } else {
      throw new Error('Неверные данные');
    }
  }

  translate(code) {
    return this.map.get(code) || 'Unknown error';
  }
}
