import { useState } from "react";


export default function Form({submitUser}) {

  const [input, setInput] = useState('')

  const handlChange = (event)=>{
    setInput(event.target.value);
  }

  function handleSubmit(event)
  {
    event.preventDefault();
    submitUser(input);
    setInput('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name</label>
        <input
          name="username"
          value={input}
          onChange={handlChange}
          type="text"
          className="form-control"
          placeholder="User Name"
        />
      </div>
    </form>
  );
}
