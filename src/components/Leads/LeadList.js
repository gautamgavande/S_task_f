import React, { useState, useEffect } from 'react';
import leadService from '../../services/leadService';

const LeadList = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await leadService.getLeads();
        setLeads(response.data);
      } catch (error) {
        console.error('Error fetching leads:', error);
      }
    };
    fetchLeads();
  }, []);

  return (
    <div>
      <h2>Lead List</h2>
      <ul>
        {leads.map((lead) => (
          <li key={lead.id}>
            {lead.title} - {lead.description} - {lead.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadList;

