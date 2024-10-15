import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CricketData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const url = 'https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/41881/comm';
  const options = {
    headers: {
      'x-rapidapi-key': '6188d2ffa4msh2227d11c4195b6ap17191ejsn814430cee4f0',
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, options);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Cricket Commentary</h2>

      {Array.isArray(data.commentaryList) && data.commentaryList.length > 0 ? (
        data.commentaryList.map((comment, index) => (
          <div key={index} style={styles.commentBox}>
            <p style={styles.timestamp}>
              Timestamp: {new Date(comment.timestamp).toLocaleString()}
            </p>
            <p style={styles.ballNbr}>Ball Number: {comment.ballNbr || 'N/A'}</p>
            <p style={styles.batTeamName}>Batting Team: {comment.batTeamName || 'N/A'}</p>
            <p style={styles.commentText}>Commentary: {comment.commText || 'N/A'}</p>
            {comment.commentaryFormats && comment.commentaryFormats.bold && (
              <p style={styles.bold}>
                <strong>{comment.commentaryFormats.formatValue?.[0] || ''}: </strong>
                {comment.commText}
              </p>
            )}
            <p style={styles.event}>Event: {comment.event || 'N/A'}</p>
            <p style={styles.innings}>Innings ID: {comment.inningsId || 'N/A'}</p>
          </div>
        ))
      ) : (
        <p>No commentary available</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  heading: {
    textAlign: 'center',
    color: '#007bff',
    fontSize: '24px',
    marginBottom: '20px',
  },
  commentBox: {
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  timestamp: {
    fontSize: '12px',
    color: '#888',
    marginBottom: '5px',
  },
  ballNbr: {
    fontSize: '14px',
    color: '#333',
  },
  batTeamName: {
    fontSize: '14px',
    color: '#007bff',
  },
  commentText: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '5px',
  },
  bold: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '5px',
  },
  event: {
    fontSize: '14px',
    color: '#888',
  },
  innings: {
    fontSize: '14px',
    color: '#888',
  },
};

export default CricketData;
