const config = {
  green: {
    "--computer-bg": "#f39e21",
    "--computer-fg": "#14a26c",
    "--computer-stand": "#13bd79",
    "--cpu-start-bg": "#13bd79",
    "--cpu-start-fg": "#297F87",
    "--cpu-sticker": "#33db92"
  },
  purple: {
      "--computer-bg": "#13bd78",
      "--computer-fg": "#8e00af",
      "--computer-stand": "#13a26b",
      "--cpu-start-bg": "#c62ceb",
      "--cpu-start-fg": "#33da93",
      "--cpu-sticker": "#aa0dd2"
  }
}

function setTheme(theme) {
  const root = document.querySelector(':root');
  for(let key in config[theme]) {
root.style.setProperty(key,  config[theme][key]);
      
  }
}

const purpleButton = document.getElementById('purple');

const greenButton = document.getElementById('green');

purpleButton.addEventListener('click', ()=>{
  setTheme('purple');
});

greenButton.addEventListener('click', ()=>{
  setTheme('green');
});