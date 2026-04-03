/**
 * Validates whether the provided string is a valid email format.
 */
export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

/**
 * Sanitizes a string by trimming whitespace and removing potential HTML tags.
 */
export const sanitizeString = (str: string): string => {
  return str.trim().replace(/[<>]/g, '');
};
/**
 * Validates if the provided string is a valid 24-character hexadecimal MongoDB ObjectId.
 */
export const validateObjectId = (id: string): boolean => {
  return /^[0-9a-fA-F]{24}$/.test(id);
};
