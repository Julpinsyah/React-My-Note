import React from "react";

function NoteItem(props) {
  return (
    <div className="col col-md-3 mb-3">
      <div className="card shadow h-100">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p
            style={{
              color: "grey",
              fontSize: 11,
            }}
          >
            {props.tgl}
          </p>
          <p className="card-text">{props.body}</p>
        </div>
        <div className="d-flex justify-content-end card-footer bg-transparent">
          <button
            className="btn btn-outline-danger me-2"
            onClick={() => props.onDelete(props.id)}
          >
            Hapus
          </button>
          <button
            className="btn btn-primary"
            onClick={() => props.onArsip(props.id)}
          >
            {props.btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
