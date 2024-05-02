export const api = {
  url: 'http://localhost:5000',

  async get(endpoint) {
    console.log('GET', endpoint);
    const res = await fetch(`${this.url}/${endpoint}`);
    const data = await res.json();

    return data;
  },
};
