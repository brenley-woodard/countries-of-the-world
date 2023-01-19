import { checkError, client } from './client.js';

export async function fetchCountries() {
  const resp = await client.from('countriess').select('*');
  console.log(resp, 'resp');
  return checkError(resp);
}