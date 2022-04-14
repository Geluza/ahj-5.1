// TODO: write your code here
function clickPop() {
  const container = document.querySelector('.popover-btn-click');
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (container.contains(document.querySelector('.popover'))) {
      document.querySelector('.popover').remove();
    } else {
      const popover = document.createElement('div');
      popover.className = 'popover';
      popover.innerHTML += `<h3 class="pop-title">${btn.dataset.title}</h3><span class="pop-text">${btn.dataset.text}</span>`;
      btn.offsetParent.appendChild(popover);
      popover.style.left = `${btn.offsetLeft - (popover.offsetWidth - btn.offsetWidth) / 2}px`;
      popover.style.top = `${btn.offsetTop - popover.offsetHeight - (btn.offsetHeight / 2)}px`;
    }
  });
}

clickPop();
