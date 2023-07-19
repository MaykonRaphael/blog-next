import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://kgwqjmmvgqgdkortppow.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtnd3FqbW12Z3FnZGtvcnRwcG93Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4OTEwNzI2NywiZXhwIjoyMDA0NjgzMjY3fQ.mYpH2cDcItJM3QcMA3yNsl5uYYcmE_sKG4NoOPpX-BM",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtnd3FqbW12Z3FnZGtvcnRwcG93Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4OTEwNzI2NywiZXhwIjoyMDA0NjgzMjY3fQ.mYpH2cDcItJM3QcMA3yNsl5uYYcmE_sKG4NoOPpX-BM"
    }
})