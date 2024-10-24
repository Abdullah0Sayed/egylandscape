// Import Create Slice To Create Slice That Are Used in Store
import { createSlice } from "@reduxjs/toolkit";
// Import Needed Lib
import i18n from "../../i18n";

export const languageSlice = createSlice({
    name: 'langSlice',
    initialState: i18n.language || 'en',
    reducers: {
        setWebLanguage: (state , action)=> {
            const webLang = action.payload;
            i18n.changeLanguage(webLang);
            console.log(webLang)
            return webLang;
        },

        getWebLanguage: (state)=> {
            return state;
        }
    }
});


// Export Action & Reducers
export const {setWebLanguage , getWebLanguage} = languageSlice.actions;

export default languageSlice.reducer;