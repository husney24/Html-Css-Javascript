function changeTab(tabIndex) {
    // Get all tab elements and tab content elements
    const tabs = document.getElementsByClassName('tab');
    const tabContents = document.getElementsByClassName('tab-content');
  
    // Remove 'active' class from all tabs and tab contents
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
      tabContents[i].classList.remove('active');
    }
  
    // Add 'active' class to the clicked tab and corresponding tab content
    tabs[tabIndex - 1].classList.add('active');
    tabContents[tabIndex - 1].classList.add('active');
  }
  