import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { changeObgDate } from "../components/helpers/helpersFunc";
import { IDate, TableBodyProps, RowState, RejectPayload } from "../types";

const initialState: RowState = {
  rows: [],
  status: "idle",
  error: null,
};

const https = "https://api.skilla.ru/mango/getList";

export const fetchRows = createAsyncThunk<
  { results: TableBodyProps[] },
  IDate,
  { rejectValue: RejectPayload }
>("rows/fetchRows", async (objDate: IDate, { rejectWithValue }) => {
  try {
    const objDateNow = changeObgDate(new Date());
    const dateStart = `date_start=${objDate.year}-${objDate.month}-${objDate.day}`;
    const dateEnd = `date_end=${objDateNow.year}-${objDateNow.month}-${objDateNow.day}`;
    const response = await fetch(`${https}?${dateStart}&${dateEnd}&limit=75`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer testtoken",
      },
    });

    if (!response.ok) {
      throw new Error("Server Error!");
    }

    const data = await response.json();

    return { results: data.results };
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue({ rows: null, error: error.message });
    } else {
      return rejectWithValue({ rows: null, error: "Unknown error occurred." });
    }
  }
});

const rowSlice = createSlice({
  name: "rows",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRows.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchRows.fulfilled,
        (state, action: PayloadAction<{ results: TableBodyProps[] }>) => {
          state.rows = action.payload.results;
          state.error = null;
          state.status = "resolved";
        }
      )
      .addCase(fetchRows.rejected, (state, action) => {
        if (action.payload && typeof action.payload === "object") {
          state.error = action.payload.error ?? "Error!";
        } else {
          state.error = action.payload ?? "Error!";
        }
        state.status = "FETCH_FAILED";
      });
  },
});

export default rowSlice.reducer;
