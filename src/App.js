import { Navbar, TodoHeader, TodoList } from 'components';

function App() {
  return (
    <section className='app'>
      <Navbar />
      <div className='app__container'>
        <TodoHeader type="add" />
        <TodoList />
      </div>
    </section>
  );
}

export default App;
