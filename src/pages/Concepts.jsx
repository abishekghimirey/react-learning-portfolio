import {
  useState,
  useEffect
} from "react";

function Concepts() {

  const [count, setCount] =
    useState(0);

  const [users, setUsers] =
    useState([]);

  useEffect(() => {

    const sampleUsers = [

      {
        name: "John",
        email: "john@gmail.com",
        phone: "010-1111-1111"
      },

      {
        name: "Emma",
        email: "emma@gmail.com",
        phone: "010-2222-2222"
      },

      {
        name: "David",
        email: "david@gmail.com",
        phone: "010-3333-3333"
      },

      {
        name: "Sophia",
        email: "sophia@gmail.com",
        phone: "010-4444-4444"
      },

      {
        name: "Chris",
        email: "chris@gmail.com",
        phone: "010-5555-5555"
      }

    ];

    setUsers(sampleUsers);

  }, []);

  return (

    <div>

      <h1>React Concepts Demo</h1>

      <h2>
        useState Counter
      </h2>

      <h2>{count}</h2>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increase
      </button>

      <button
        onClick={() =>
          setCount(count - 1)
        }
      >
        Decrease
      </button>

      <button
        onClick={() =>
          setCount(0)
        }
      >
        Reset
      </button>

      <br />
      <br />

      <h2>
        useEffect + List Rendering
      </h2>

      <div className="project-container">

        {users.map((user, index) => (

          <div
            className="project-card"
            key={index}
          >

            <h2>{user.name}</h2>

            <p>{user.email}</p>

            <p>{user.phone}</p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Concepts;