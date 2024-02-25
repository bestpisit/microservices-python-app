import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [fid, setFid] = useState('');
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_GATEWAY_API}/login`, {}, {
        auth: {
          username: email, // Ensure these are set from your form
          password: password,
        }
      });
      // Handle the successful response here (e.g., storing JWT, navigating)
      alert("Login Successfully")
      console.log(response.data);
      setToken(response.data);
    } catch (err) {
      // Handle error (e.g., displaying a message to the user)
      alert("Login Error")
    }
  };
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_GATEWAY_API}/signup`, {}, {
        auth: {
          username: email, // Ensure these are set from your form
          password: password,
        }
      });
      // Handle the successful response here (e.g., storing JWT, navigating)
      alert("Register Successfully")
      console.log(response.data);
      setToken(response.data);
    } catch (err) {
      // Handle error (e.g., displaying a message to the user)
      alert("Register Error")
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    try {
      await axios.post(`${import.meta.env.VITE_GATEWAY_API}/upload`, formData, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      alert("Upload Successfully");
    } catch (error) {
      console.error('Upload failed', error);
      alert("Upload Failure");
    }
  };

  const handleDownload = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_GATEWAY_API}/download?fid=${fid}`, {
        headers: { 'Authorization': `Bearer ${token}` },
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'video.mp3');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Download failed', error);
      alert("Download Failure");
    }
  };

  return (
    <div className="container">
      <div className="serverInfo">
        Server: {import.meta.env.VITE_GATEWAY_API || "Not Specified"}<br/>
        Token : {token}
      </div>
      <div className="authSection">
        <input
          type="email"
          placeholder="Email"
          className="inputField"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="inputField"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={handleLogin}>Login</button>
        <button className="button" onClick={handleRegister}>Register</button>
      </div>
      <div className="fileSection">
        <input
          type="file"
          className="fileInput"
          onChange={(e) => {
            setFile(e.target.files ? e.target.files[0] : null);
          }}
        />
        <button className="button" onClick={handleUpload}>Upload</button>
      </div>
      <div className="downloadSection">
        File ID:
        <input
          type="text"
          className="inputField"
          value={fid}
          onChange={(e) => setFid(e.target.value)}
        />
        <button className="button" onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
  
};

export default App;