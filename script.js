document.body.onload = () => {
  // https://stackoverflow.com/a/8960307
  const resizer = document.getElementById('flexbox-example');

  const initDrag = (event) => {
    startX = event.clientX;
    startY = event.clientY;

    const computedStyle = document.defaultView.getComputedStyle(resizer);
    startWidth = parseInt(computedStyle.width, 10);
    startHeight = parseInt(computedStyle.height, 10);

    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false); 
  };

  const doDrag = (event) => {
    resizer.style.width = (startWidth + event.clientX - startX) + 'px';
  };

  const stopDrag = (event) => {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
  };

  resizer.addEventListener('mousedown', initDrag, false);
};