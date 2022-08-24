import React, { useEffect, useState } from "react";
import FormInput from "./Components/FormInput";
import Navigasi from "./Components/Navigasi";
import NoteActive from "./Components/NoteActive";
import NoteArsip from "./Components/NoteArsip";
import { getInitialData } from "./utils/index";

function App() {
  const note = getInitialData();
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setData(note);
  }, []);

  function searching(e) {
    setKeyword(() => e.toLowerCase());
  }

  function addNote(judul, deskripsi) {
    setData((prev) => [
      ...prev,
      {
        id: +new Date(),
        title: judul,
        body: deskripsi,
        createdAt: new Date(),
        archived: false,
      },
    ]);
  }

  function putToArsip(id) {
    let data2 = [...data];
    const index = data.findIndex((note) => note.id === id);

    if (data2[index].archived === true) {
      data2[index].archived = false;
    } else {
      data2[index].archived = true;
    }

    setData(data2);
  }

  function deleteNote(id) {
    const data2 = data.filter((dt) => dt.id !== id);
    setData(data2);
  }

  // console.log(aktif);
  let note2 = data.filter((dt) => dt.title.toLowerCase().includes(keyword));
  let aktif = note2.filter((dt) => dt.archived === false);
  let arsip = note2.filter((dt) => dt.archived === true);
  // console.log(keyword);
  return (
    <div className="App">
      <Navigasi title="Julpins Note" onSearch={searching} />
      <FormInput onAdd={addNote} />
      <div className="container">
        {keyword ? <h5>Hasil pencarian keyword "{keyword}"</h5> : ""}
        <NoteActive
          title="Catatan Aktif"
          notes={aktif}
          onArsip={putToArsip}
          onDelete={deleteNote}
          btnText="Arsipkan"
        />
        <NoteArsip
          title="Arsip"
          notes={arsip}
          onArsip={putToArsip}
          onDelete={deleteNote}
          btnText="Pindahkan"
        />
      </div>
    </div>
  );
}

export default App;
