/**
 * @param {any} data - Data to be resolved.
 * @param {number} ms - Milisecons to wait.
 * @param {boolean} error - Is shoudl throw and error.
 * @returns {Promise<any>} Data.
 */
export async function makePromise<T>(
  data: T,
  ms: number,
  error = false,
): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(new Error('somthing happend.'));
      }
      resolve(data);
    }, ms);
  });
}
