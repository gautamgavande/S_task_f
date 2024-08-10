import React, { useState } from 'react';
import leadService from '../../services/leadService';
import { useNavigate } from 'react-router-dom';

const CreateLead = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await leadService.createLead({ title, description, status });
      navigate('/leads');
    } catch (error) {
      console.error('Create lead error:', error);
    }
  };

  return (
    <div>
      <h2>Create Lead</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} required />
        <button type="submit">Create Lead</button>
      </form>
    </div>
  );
};

export default CreateLead;

