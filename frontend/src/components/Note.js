import React from 'react';
import { Link } from 'react-router-dom';

const Note = props => (
  <tr>
    <td>{props.note.title}</td>
    <td>{props.note.updatedAt.substring(0, 10)}</td>
    <td>
      <Link to={'/view/' + props.note._id} className='btn'>
        View
      </Link>{' '}
      |{' '}
      <Link to={'/edit/' + props.note._id} className='btn'>
        Edit
      </Link>{' '}
      |{' '}
      <a
        href='#'
        className='delete-btn'
        onClick={() => {
          props.delete(props.note._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default Note;
