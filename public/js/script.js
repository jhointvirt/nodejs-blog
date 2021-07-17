console.log('sdo');
if(window.location.pathname === '/new-post'){
  document.forms['newPost'].onsubmit = function (e){
    e.preventDefault();
    const formValues = document.forms['newPost'].elements;
    const data = {
      title: formValues['title'].value,
      description: formValues['description'].value,
      content: formValues['content'].value
    }
    
    fetch('/api/posts', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(data)
    }).then((res) => res.json())
    .then((res) => {
      if(res && res.payload && res.payload.statusCode === 400){
        alert(res.payload.message);
      }
      
      if(res && res._id){
        window.location.replace('/posts');
      }
    }).catch((err) => {
      alert(err);
    })
  }
}