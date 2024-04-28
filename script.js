const commandInput = document.getElementById('command');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
  const command = commandInput.value.toLowerCase();

  if (command === 'open google') {
    window.open('https://www.google.com/', '_blank');
  } else if (command === 'open youtube') {
    window.open('https://www.youtube.com/', '_blank');
  } else if (command === 'open twitter') {
    window.open('https://twitter.com/', '_blank');
  } else if (command === 'open instagram') {
    window.open('https://www.instagram.com/', '_blank');
  } else if (command === 'open whatsapp') {
    window.open('https://web.whatsapp.com/', '_blank');
  } else if(command==='open github'){
    window.open('https://github.com/','blank');
  }else if(command==='open tiktok'){
    window.open('https://www.tiktok.com/en/','blank');
  }else if(command==='open chatgpt'){
    window.open('https://chat.openai.com/','blank')
  }else if(command==='open linkdin'){
    window.open('https://pk.linkedin.com/','blank')
  }else if(command==='open snapchat'){
    window.open('https://web.snapchat.com/','blank')
  }else if(command==='open facebook'){
    window.open('https://www.facebook.com/login/','blank')
  }
  else {
    alert('Invalid command');
  }
});