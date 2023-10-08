async function getElements(){
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const responseTxt = await response.json();
    populateTable(responseTxt);
  }catch(error){
    console.log(error);
  }
}

function populateTable(elements){
  const $content_table = document.getElementById('content');
  $content_table.innerHTML = '';

  for(let i = 0; i < elements.length/10; i++){
    const row = $content_table.insertRow();
    row.innerHTML = `
      <td>${elements[i].title}</td>
      <td>${elements[i].body}</td>
      <td>${elements[i].id}</td>
      <td>${elements[i].userId}</td>
    `
  }
}

getElements();

const btn = document.getElementById('changeBtn');

function changeUrl(){
  const img = document.getElementById('img');

  let imgUrl = `https://picsum.photos/${Math.round(Math.random() * 300)}/${Math.round(Math.random() * 300)}`;
  img.src = imgUrl; 
}


btn.addEventListener("click", () => {
  changeUrl();
});

changeUrl();


