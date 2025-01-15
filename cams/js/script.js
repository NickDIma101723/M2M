function showTab(tabId, button){
   
    const allTabs = document.querySelectorAll('.tab-content-item');
    for (let tab of allTabs){
        tab.style.display = "none";
    }

    document.getElementById(tabId).style.display = "block";

    const allTabsBtn = document.querySelectorAll('.tabs button');
    for (let tabBtn of allTabsBtn){
        tabBtn.classList.remove('active');
       
    }

button.classList.add('active');

}

showTab("cam1");

