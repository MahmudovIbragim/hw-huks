import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { InitalState, newDataPostRequest } from "../../types";

const initialState: InitalState = {
  data: [],
  loading: false,
  error: false,
};

const apiLink =
  "https://api.elchocrud.pro/api/v1/3687a02d338347358a77ed7549627044/todoMusic";

export const postMusics = createAsyncThunk(
  "music/postMusic",
  async (newData: newDataPostRequest) => {
    try {
      const responst = (await axios.post(apiLink, newData)).data;
      return responst;
    } catch (e) {
      console.error(e);
    }
  }
);

export const getMusics = createAsyncThunk("music/getMusic", async () => {
  try {
    const response = (await axios.get(apiLink)).data;
    return response;
  } catch (e) {
    console.error(e);
  }
});

export const deleteItemMusic = createAsyncThunk(
  "music/MusicDelete",
  async (id:number) => {
    try {
      const response = (await axios.delete(`${apiLink}/${id}`)).data
      return response
    } catch (e) {
      console.error(e);
    }
  }
);

const musicalSlice = createSlice({
  name: "music",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postMusics.pending, (state) => {
        state.loading = true;
      })
      .addCase(postMusics.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(postMusics.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getMusics.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMusics.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getMusics.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteItemMusic.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteItemMusic.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(deleteItemMusic.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const musicReducer = musicalSlice.reducer;
