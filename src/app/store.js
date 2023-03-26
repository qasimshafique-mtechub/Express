import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import ContactSlice from "../features/Contact/ContactSlice";

import { userAuthApi } from "../services/AuthApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import profileSlice from "../features/Contact/ProfileSlice";
import resumecontactSlice from "../features/Resume2/Contact";
import resumeexperienceSlice from "../features/Resume2/Experience";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import objectiveSlice from "../features/Contact/ObjectiveSlice";
import educationSlice from "../features/Contact/EducationSlice";
import skillSlice from "../features/Contact/SkillSlice";
import fontSlice from "../features/Contact/FontSlice";
import intrestSlice from "../features/Contact/IntrestSlice";
import resumeobjectiveSlice from "../features/Resume2/Objective";
import resumeskillSlice from "../features/Resume2/Skill";
import resumeeducationSlice from "../features/Resume2/Education";
import resumeLanguageSlice from "../features/Resume2/Language";
import { Provider, useDispatch, useSelector } from "react-redux";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistConfigs = {
  key: "token_key",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, resumecontactSlice);
const persistedReducers = persistReducer(persistConfigs, profileSlice);
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    contact: persistedReducer,
    profile: persistedReducers,
    objective: objectiveSlice,
    education: educationSlice,
    skill: skillSlice,
    font: fontSlice,
    intrest: intrestSlice,
    // resume 2
    resumecontact: persistedReducer,
    resumeobjective: resumeobjectiveSlice,
    resumeexperience: resumeexperienceSlice,
    resumeskill: resumeskillSlice,
    resumeeducation: resumeeducationSlice,
    resumelanguage: resumeLanguageSlice,

    [userAuthApi.reducerPath]: userAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userAuthApi.middleware),
});
