export const formatToDIDNumber = (strDID: string) => {
  let match = strDID.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);
  return match ? `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}` : strDID;
}

export const removeDIDFormat = (strDID: string) => {
    return strDID.replace(/[()-\s]/g, '');
}
