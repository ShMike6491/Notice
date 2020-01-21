import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Note from './Note';

const Main = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get('https://flowery-knot.glitch.me/')
      .then(res => {
        setNotes(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const deleteNote = id => {
    axios
      .delete('https://flowery-knot.glitch.me/' + id)
      .then(res => console.log(res.data));
    setNotes(notes.filter(el => el._id !== id));
  };

  const noteList = () => {
    return notes.map(note => {
      return <Note note={note} delete={deleteNote} key={note._id} />;
    });
  };

  return (
    <div>
      <h3>Logged Notes</h3>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{noteList()}</tbody>
      </table>
    </div>
  );
};

export default Main;
