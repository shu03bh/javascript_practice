const requestUrl = 'https://api.github.com/users/shu03bh'
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if (xhr.readyState ===4){
        console.log(this.readyState);
        const data = JSON.parse(this.readyState)
        console.log(typeof data);
        console.log(data); 
        console.log(data.followers)   
    }
}
xhr.send();
console.log("Here");

