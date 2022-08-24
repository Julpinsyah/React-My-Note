import React, { useState } from "react";
import NoteItem from "./NoteItem";
import { showFormattedDate } from "../utils/index";

function NoteActive({ title, notes, onArsip, onDelete, btnText }) {
  return (
    <div className="container">
      <div className="row my-5">
        <h3 className="mb-3">{title}</h3>
        {notes.length !== 0 ? (
          notes.map((note, i) => {
            return (
              <NoteItem
                key={i}
                title={note.title}
                id={note.id}
                btnText={btnText}
                body={note.body}
                tgl={showFormattedDate(note.createdAt)}
                onArsip={onArsip}
                onDelete={onDelete}
              />
            );
          })
        ) : (
          <div className="text-center">
            <h5>Tidak ada catatan</h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default NoteActive;
