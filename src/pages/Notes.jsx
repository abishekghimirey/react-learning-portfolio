import {
  useState,
  useEffect
} from "react";

function Notes() {

  const [note, setNote] =
    useState("");

  const [notes, setNotes] =
    useState([]);

  useEffect(() => {

    const savedNotes =
      JSON.parse(
        localStorage.getItem("notes")
      );

    if (savedNotes) {
      setNotes(savedNotes);
    }

  }, []);

  const saveNote = () => {

    if (note.trim() === "") return;

    const updatedNotes =
      [...notes, note];

    setNotes(updatedNotes);

    localStorage.setItem(
      "notes",
      JSON.stringify(updatedNotes)
    );

    setNote("");

  };

  const deleteNote = (index) => {

    const updatedNotes =
      notes.filter(
        (_, i) => i !== index
      );

    setNotes(updatedNotes);

    localStorage.setItem(
      "notes",
      JSON.stringify(updatedNotes)
    );

  };

  return (

    <div>

      <h1> Projects Notes</h1>

      <textarea
  placeholder="Write your project notes here..."
  value={note}
  onChange={(e) =>
    setNote(e.target.value)
  }
></textarea>

      <br />

      <button onClick={saveNote}>
        Save Note
      </button>

      <ul>

        {notes.map((n, index) => (

          <li key={index}>

            {n}

            <button
              onClick={() =>
                deleteNote(index)
              }
            >
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>

  );
}

export default Notes;