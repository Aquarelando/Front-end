function OpenBar(): void {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
  
    if (sidebar) {
      sidebar.classList.toggle('left-[300px]');
    }
  }
  
  export default OpenBar;