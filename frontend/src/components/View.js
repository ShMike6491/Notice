import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const View = props => {
  const [note, setNote] = useState({});

  useEffect(() => {
    axios
      .get('https://flowery-knot.glitch.me/' + props.match.params.id)
      .then(res => {
        setNote(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>{note.title}</h2>
      <div>
        <p>{note.description}</p>
      </div>
      <Link to={'/edit/' + props.match.params.id} className='button'>
        Edit
      </Link>{' '}
      |
      <a
        href='#'
        className='delete-btn'
        onClick={() => {
          axios
            .delete('https://flowery-knot.glitch.me/' + props.match.params.id)
            .then(res => console.log(res.data));

          window.location = '/';
        }}
      >
        Delete
      </a>
    </div>
  );
};

export default View;
