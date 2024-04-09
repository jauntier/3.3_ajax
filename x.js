// function fetchAndDisplay(urls) {
//     urls.forEach(url => {
//       fetch(url)
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return response.json();
//         })
//         .then(data => {
//           // Displaying content using AJAX calls
//           const xhr = new XMLHttpRequest();
//           xhr.onreadystatechange = function() {
//             if (xhr.readyState === XMLHttpRequest.DONE) {
//               if (xhr.status === 200) {
//                 console.log(xhr.responseText);
//               } else {
//                 console.error('Error:', xhr.status);
//               }
//             }
//           };
//           xhr.open('GET', url);
//           xhr.send();
//         })
//         .catch(error => {
//           console.error('Error fetching URL:', error.message);
//         });
//     });
//   }
  
//   // Example usage:
//   const urls = [
//     'https://www.google.com/',
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/users'
//   ];
  
//   fetchAndDisplay(urls);
  
function fetchAndDisplay(urls) {
    urls.forEach(url => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Error fetching URL:', error.message);
        });
    });
  }
  
  // Example usage:
  const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
  ];
  
  fetchAndDisplay(urls);
  