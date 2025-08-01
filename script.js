fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('intern-name').innerText = data.name;
    document.getElementById('referral-code').innerText = data.referralCode;
    document.getElementById('donations').innerText = data.donations;
  })
  .catch(error => console.error('Error fetching data:', error));
