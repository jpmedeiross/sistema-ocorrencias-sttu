function changeTab(tabName) {
    const tabs = ['agentes', 'ocorrencias', 'observacoes'];
    
    tabs.forEach(tab => {
      const content = document.getElementById(tab);
      if (tab === tabName) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  }