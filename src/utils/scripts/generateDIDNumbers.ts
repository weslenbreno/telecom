export const generateNumbers= () => {
  const randomNumber = String(Math.floor(Math.random() * 130000000000)).padEnd(13, '0');
  let match = randomNumber.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);
  return match ? `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`: randomNumber;
};

export default generateNumbers;