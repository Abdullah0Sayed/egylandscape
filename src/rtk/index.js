// Import Configration Store to Initialaize Store For App State Mangagement
import { configureStore } from "@reduxjs/toolkit";

// Import Reducers 
import languageSlicer from "./slicers/languageSlicer";


const store = configureStore({
    reducer: {
        webLanguage: languageSlicer
    }
});



// Export Store
export default store;