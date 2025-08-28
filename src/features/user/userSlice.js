import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    try {
      // 1) We get the user's geolocation position
      const positionObj = await getPosition();
      const position = {
        latitude: positionObj.coords.latitude,
        longitude: positionObj.coords.longitude,
      };

      // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
      const addressObj = await getAddress(position);
      const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

      // 3) Then we return an object with the data that we are interested in
      return { position, address };
    } catch (error) {
      // Provide more user-friendly error messages
      if (error.code === 1) {
        throw new Error(
          "Location access denied. Please enable location services.",
        );
      } else if (error.code === 2) {
        throw new Error("Location unavailable. Please check your connection.");
      } else if (error.code === 3) {
        throw new Error("Location request timed out. Please try again.");
      } else {
        throw new Error(
          "Failed to get your location. Please enter address manually.",
        );
      }
    }
  },
);

export const initialState = {
  userName: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.userName = action.payload;
    },
    clearError(state) {
      state.error = "";
      state.status = "idle";
    },
    clearAddress(state) {
      state.address = "";
      state.position = {};
      state.status = "idle";
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
        state.error = ""; // Clear previous errors
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.address = action.payload.address;
        state.position = action.payload.position;
        state.status = "idle";
        state.error = ""; // Clear any previous errors
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message || "Failed to fetch address";
        // Keep previous position/address if they exist
      }),
});

export const { updateName, clearError, clearAddress } = userSlice.actions;

export default userSlice.reducer;
