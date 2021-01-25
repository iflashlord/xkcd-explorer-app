import { API_SERVER } from "./server";

// Solution one
// export const API_DETAIL = (id:number) => `${API_SERVER}/${id}/info.0.json`;

// Solution two
export const API_DETAIL = (id:number) => `${API_SERVER}/?comic=${id}`;