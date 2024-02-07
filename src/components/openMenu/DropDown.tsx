function dropDown(): void {
    const submenu = document.querySelector('#submenu') as HTMLElement;
    const arrow = document.querySelector('#arrow') as HTMLElement;
    if (submenu && arrow) {
      submenu.classList.toggle('hidden');
      arrow.classList.toggle('rotate-0');
    }
  } 
  
  export default dropDown;