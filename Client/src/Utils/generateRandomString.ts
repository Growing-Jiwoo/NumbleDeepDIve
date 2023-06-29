export function generateRandomString() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength: number = characters.length;
  const randomStringArray: string[] | undefined = [];

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    randomStringArray.push(characters[randomIndex]);
  }

  return randomStringArray.join("");
}
