
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { local, server } from '../../constants/Config';


const adminLogin = createAsyncThunk(
  "admin/Login",
  async (secretKey) => {
    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-type": "application/json"
        }
      }

      const { data } = await axios.post(`${server}/api/v1/admin/varify`, { secretKey }, config);
      return data.message;
    } catch (error) {
      throw error.response.data.message;
    }

  }
);

const getAdmin = createAsyncThunk(
  "admin/getAdmin",
  async () => {
    try {
      const { data } = await axios.get(`${local}/api/v1/admin/`, { withCredentials: true });
      return data.admin;
    } catch (error) {
      throw error.response.data.message;
    }

  }
);

const adminLogout = createAsyncThunk(
  "admin/logout",
  async () => {
    try {
      const { data } = await axios.get(`${local}/api/v1/admin/logout`, { withCredentials: true });
      return data.message;
    } catch (error) {
      throw error.response.data.message;
    }

  }
);


export { adminLogin, adminLogout, getAdmin };
