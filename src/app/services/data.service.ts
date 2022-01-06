export class DataService {
  list = ['a', 'b', 'c'];

  onAddList = (item: string) => {
    this.list.push(item);
  };
}
