import { http } from '@renderer/utils/http'

export const apiCommon = {
  todos: () => http.get('https://jsonplaceholder.typicode.com/todos')
}
