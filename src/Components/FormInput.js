import React, { useState } from "react";

function FormInput(props) {
  const maxText = 50;
  const [judul, setJudul] = useState("");
  const [deskrip, setDeskrip] = useState("");
  const [limit, setLimit] = useState(maxText);

  const getNote = (event) => {
    event.preventDefault();
    props.onAdd(judul, deskrip);
    setJudul("");
    setDeskrip("");
    setLimit(maxText);
  };

  const onTitleChange = (e) => {
    let charLength = e.target.value.length;

    if (charLength <= maxText) {
      setJudul(e.target.value);
      setLimit(maxText - charLength);
    } else {
      setJudul(e.target.value.slice(0, maxText));
      setLimit(maxText - charLength + 1);
      return;
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow col-md-6">
        <div className="card-body">
          <form onSubmit={getNote}>
            <div className="mb-3">
              <div className="d-flex justify-content-end">
                <label>Sisa Karakter : {limit}</label>
              </div>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Judul Catatan"
                value={judul}
                onChange={onTitleChange}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows={5}
                value={deskrip}
                onChange={(e) => {
                  setDeskrip(e.target.value);
                }}
              >
                {deskrip}
              </textarea>
            </div>
            <div>
              <button className="btn btn-primary">Tambah Catatan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormInput;
