// TODO: write your code here
function clickPop() {
  const btn = document.querySelector('.btn');
  const popover = document.querySelector('.popover');
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    popover.classList.toggle('disactive');
    btn.offsetParent.appendChild(popover);
    popover.style.left = `${btn.offsetLeft - popover.offsetWidth / 8}px`;
    popover.style.top = `${btn.offsetTop - popover.offsetHeight - btn.offsetHeight / 4}px`;
  });
}

clickPop();
