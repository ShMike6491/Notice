import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Form = props => {
  const [value, setValue] = useState('New Title');
  const [textvalue, setTextvalue] = useState('Description');

  useEffect(() => {
    if (!props.match.params.id) {
      return;
    } else {
      axios
        .get('https://flowery-knot.glitch.me/' + props.match.params.id)
        .then(res => {
          setValue(res.data.title);
          setTextvalue(res.data.description);
        })
        .catch(err => console.log(err));
    }
  }, []);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleTextChange = e => {
    setTextvalue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const note = {
      title: value,
      description: textvalue
    };

    if (!props.match.params.id) {
      axios
        .post('https://flowery-knot.glitch.me/add', note)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    } else {
      axios
        .post(
          'https://flowery-knot.glitch.me/update/' + props.match.params.id,
          note
        )
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }

    window.location = '/';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Title:</label>
        <input
          className='form-control'
          type='text'
          required
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <textarea
          className='form-control'
          value={textvalue}
          onChange={handleTextChange}
        ></textarea>
      </div>
      <div className='form-group'>
        <input type='submit' value='Submit' className='btn btn-primary' />
      </div>
    </form>
  );
};

export default Form;
