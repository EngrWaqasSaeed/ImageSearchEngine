const searchForm=document.getElementById('search-form')
const searchBox=document.getElementById('search-box')
const searchResult=document.getElementById('search-result')
const searchMoreBtn=document.getElementById('search-more-btn')

G90W2EwHCpqerepz4eiSx6Z-uaA49lWWanJF3rqQj04

let keyword="";
let page=1;

async function serachImage(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}$client_id=${accessKey}`;
}