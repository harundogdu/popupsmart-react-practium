function TodoHeader({ type }) {
  return (
    <section className='todo-header'>
      <div className='todo-header__card'>
        <div className='todo-header__card-header'>
          {type === 'add' ? <h1>Add Todo</h1> : <h1>Update Todo</h1>}
        </div>
        <div className='todo-header__card-body'>
          <form action=''>
            <div className='form-group'>
              <input
                type='text'
                placeholder='enter ur todo...'
                required
                min={3}
              />
            </div>
            <div className='button-area'>
              {type === 'add' ? (
                <button className='btnAdd'>Add</button>
              ) : (
                <button className='btnUpdate'>Update</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default TodoHeader;
