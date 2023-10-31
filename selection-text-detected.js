document.addEventListener('mouseup', function(event) {
  var selectedText = window.getSelection().toString();
  var menu = document.getElementById('menu-suspenso');

  if (selectedText !== '') {
    // Define a posição do menu suspenso com base na posição do cursor do mouse
    menu.style.left = (event.clientX + window.scrollX) + 'px';
    menu.style.top = (event.clientY + window.scrollY) + 'px';

    // Exibe o menu suspenso
    menu.style.display = 'block';
  } else {
    // Oculta o menu suspenso se nenhum texto estiver selecionado
    menu.style.display = 'none';
  }
});
