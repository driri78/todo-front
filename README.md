# useEffect(getTodos, [])로 초기값을 줄 경우

```javascript
const [todo, setTodo] = useState([]);

function getTodos() {
  const todos = JSON.parse(localStorage.getItem("todos"));
  if (!todos) return;
  // 하루 지난지 확인
  const filterTodos = todos.filter((todo) => {
    const [year, month, date] = todo.date.split("-"); // ex) 2024-06-26
    if (new Date().getFullYear() > +year) {
      return false;
    }
    if (new Date().getMonth() > +month) {
      return false;
    }
    if (new Date().getDate() > +date) {
      return false;
    }
    return true;
  });
  return setTodo(filterTodos);
}

useEffect(getTodos, []);

// 두번 실행됨 (useState 초기값(안정했을때 포함)을 선언할때 todo값이 바꼈다고 인식한거같음)
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todo));
  console.log("todo 바뀜");
}, [todo]);
```

# 해결 useState 초기값을 함수 리턴값으로 줄 경우

```javascript
// 초기값을 줄때 함수 리턴값으로 준다
const [todo, setTodo] = useState(getTodos); // 바뀐점

function getTodos() {
  const todos = JSON.parse(localStorage.getItem("todos"));
  if (!todos) return []; // 바뀐점

  // 하루 지난지 확인
  const filterTodos = todos.filter((todo) => {
    const [year, month, date] = todo.date.split("-");
    if (new Date().getFullYear() > +year) {
      return false;
    }
    if (new Date().getMonth() > +month) {
      return false;
    }
    if (new Date().getDate() > +date) {
      return false;
    }
    return true;
  });
  return filterTodos;
}
//useEffect(() => getTodos(), []); 바뀐점
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todo));
  console.log("todo 바뀜");
}, [todo]);
```
