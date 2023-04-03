let datas = [];
const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault()
    const title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    let image = document.getElementById('image').files;
    
    let checkboxes = document.getElementsByName('checkbox');

    let checkboxesArray = [];
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkboxesArray.push(checkbox.value);
        } else {
            checkboxesArray.push('');
        }
    })

    image = URL.createObjectURL(image[0]);
    
    let data = {
        title,
        description,
        startDate,
        endDate,
        image,
        nodejs : checkboxesArray[0],
        reactjs : checkboxesArray[1],
        golang: checkboxesArray[2],
        python: checkboxesArray[3] 
    }
    
    datas.push(data);
    renderBlog();
    console.log(image)
});



function renderBlog() {
    document.querySelector('.card-wrapping').innerHTML = '';
    for( let i = 0; i < datas.length; i++){
        document.querySelector('.card-wrapping').innerHTML += `
            <div class="card">
                <img src="${datas[i].image}" alt="">
                <h3>${datas[i].title}</h3>
                <p>Duration : 3 Month</p>
                <p>${datas[i].description.substring(0, 155)}<a href="blog-detail.html">...</a></p>
                <div class="teknologi">
                    <div>
                        <i class="fa-brands ${datas[i].nodejs}"></i>
                    </div>
                    <div>
                        <i class="fa-brands ${datas[i].reactjs}"></i>
                    </div>
                    <div>
                        <i class="fa-brands ${datas[i].golang}"></i>
                    </div>
                    <div>
                        <i class="fa-brands ${datas[i].python}"></i>
                    </div>
                </div>               
                <div class="btn-2">
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>`
    } 
    alert('SUKSES MENAMBAHKAN PROJECT')
}
