export default function play(path) {
  const audioPlayer = new Audio(path);
  audioPlayer.play();
}

export const getValueFromLocalStorage = (key, defaultValue) => {
  const parsedValue = JSON.parse(localStorage.getItem(key));
  return parsedValue || defaultValue;
};

export const setValueInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
