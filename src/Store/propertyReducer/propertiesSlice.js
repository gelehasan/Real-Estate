import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import {db} from "../../Firebase/firebase";

export const fetchProperties = createAsyncThunk('properties/fetchProperties', async () => {
  const propertiesCollection = collection(db, 'Properties');
  const propertiesSnapshot = await getDocs(propertiesCollection);
  const propertiesList = propertiesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return propertiesList;
});

// Async thunk to delete a property
export const deleteProperty = createAsyncThunk('properties/deleteProperty', async (propertyId) => {
  await deleteDoc(doc(db, 'Properties', propertyId));
  return propertyId;
});


export const fetchPropertyById = createAsyncThunk('properties/fetchPropertyById', async (propertyId) => {
  const docRef = doc(db, 'Properties', propertyId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error('Property not found');
  }
}); 
const propertyInitalstate= {
    properties: [],
    status: 'idle',
    error: null,
}
const propertiesSlice = createSlice({
  name: 'properties',
  initialState: propertyInitalstate,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.properties = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteProperty.fulfilled, (state, action) => {
        state.properties = state.properties.filter(property => property.id !== action.payload);
      });
  },
});

export const propertyReducer= propertiesSlice.reducer;
