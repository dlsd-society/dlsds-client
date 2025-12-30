import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BASE_URL from '../config/config';
import { useAdminAuth } from '../context/AdminAuthContext';

const ManageInternshipsPage = () => {
  const { adminToken } = useAdminAuth();
  const [internships, setInternships] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 15;

  useEffect(() => {
    fetchInternships(page);
  }, [page]);

  const fetchInternships = async (pageNumber) => {
    const res = await axios.get(
      `${BASE_URL}/admin/internships/paginated?page=${pageNumber}`,
      {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      }
    );

    setInternships(res.data.data);
    setTotalPages(res.data.pagination.totalPages);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Internship Registrations</h2>

      <div style={{ overflowX: 'auto' }}>
        <table border="1" cellPadding="8" cellSpacing="0" width="100%">
          <thead>
            <tr>
              {internships[0] &&
                Object.keys(internships[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {internships.map((intern) => (
              <tr key={intern.id}>
                {Object.values(intern).map((value, index) => (
                  <td key={index}>
                    {Array.isArray(value)
                      ? value.join(', ')
                      : typeof value === 'boolean'
                      ? value ? 'Yes' : 'No'
                      : value?.toString()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div style={{ marginTop: 20 }}>
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            style={{
              margin: '0 5px',
              fontWeight: page === i + 1 ? 'bold' : 'normal',
            }}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageInternshipsPage;