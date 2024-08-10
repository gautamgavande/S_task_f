import React, { useState, useEffect } from 'react';
import leadService from '../../services/leadService';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateLead = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLead = async () => {
      try {
        const response = await leadService.getLead(id);
        const lead = response.data;
        setTitle(lead.title);
        setDescription(lead.description);
        setStatus(lead.status);
      } catch (error) {
        console.error('Error fetching lead:', error);
      }
    };
    fetchLead();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await leadService.updateLead(id, { title, description, status });
      navigate('/leads');
    } catch (error) {
      console.error('Update lead error:', error);
    }
  };

  return (
    <div>
      <h2>Update Lead</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} required />
        <button type="submit">Update Lead</button>
      </form>
    </div>
  );
};

export default UpdateLead;
