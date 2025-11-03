export const phoneInputValid = (value) => {
 let cleanedValue = value.replace(/^\+0+/, "+3730");
 cleanedValue = cleanedValue.replace(/^\+3730/, "+373");
 return cleanedValue;
};