export default {
    beforeMount(el) {
      // Initial state
      let toggle = false;
      
      // Colors to toggle between
      const color1 = 'red';
      const color2 = 'blue';
      
      // Set initial color
      el.style.backgroundColor = color1;
  
      // Event listener to handle the click
      el.addEventListener('click', () => {
        toggle = !toggle;
        el.style.backgroundColor = toggle ? color2 : color1;
      });
    }
  };  