import { useLocalStorage } from './useLocalStorage';
import listTodo from '../components/data/list'

export function useList() {
  const [ listOfLocal, setListOnLocal ] = useLocalStorage('list', JSON.stringify(listTodo));
  let list = JSON.parse(listOfLocal);

  const setList = (newList) =>
  setListOnLocal(JSON.stringify(newList));

  return [list, setList];
}