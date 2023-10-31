document.addEventListener('mouseup', function(event) {
  var selectedText = window.getSelection().toString();
  var menu = document.getElementById('menu-suspenso');

  if (selectedText !== '') {
    console.log('chegou aqui');
    // Define a posição do menu suspenso com base na posição do cursor do mouse
    menu.style.left = (event.clientX + window.scrollX) + 'px';
    menu.style.top = (event.clientY + window.scrollY) + 'px';

    // Injete o HTML do menu suspenso
    menu.innerHTML = '<ul>' +
                    '<li><a href="#">Opção 1</a></li>' +
                    '<li><a href="#">Opção 2</a></li>' +
                    '<li><a href="#">Opção 3</a></li>' +
                    '</ul>';

    // Exiba o menu suspenso
    menu.style.display = 'block';
  } else {
    // Oculte o menu suspenso se nenhum texto estiver selecionado
    menu.style.display = 'none';
  }
});
