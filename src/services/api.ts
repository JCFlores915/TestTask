

const url = 'https://6172cfe5110a740017222e2b.mockapi.io/elements';

// Get all elements
export const getElementsUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};