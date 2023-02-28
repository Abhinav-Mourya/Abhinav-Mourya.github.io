    GitHubCalendar(".calendar", "Abhinav-Mourya");
  
    // or enable responsive functionality:
    GitHubCalendar(".calendar", "Abhinav-Mourya", { responsive: true });
  
    // Use a proxy
    GitHubCalendar(".calendar", "Abhinav-Mourya", {
       proxy (username) {
         return fetch(`https://your-proxy.com/github?user=${Abhinav-Mourya}`)
       }
    }).then(r => r.text())