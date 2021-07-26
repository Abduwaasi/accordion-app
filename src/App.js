import React from "react";
import persons from "./data";
import SingleQuestion from "./Question";

const App = () => {
  // const [persons, setPersons] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>Question and answers about login</h3>
        <div>
          {persons.map((person) => {
            return <SingleQuestion key={person.id} {...person} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default App;
