const form= document.querySelector("#headerForm")
const formInput=document.querySelector("#searchInput")
const temizle=document.querySelector(".Temizle")
const searchedClear=document.querySelector("#searchedUserClearButton")

runEventListeners();

const github=new GitHub();
const addUI=new UI();

function runEventListeners(){
    form.addEventListener("submit",search)
    temizle.addEventListener("click",clearContent)
    searchedClear.addEventListener("click",clearSearched)
    document.addEventListener("DOMContentLoaded",addSearchedUsersFromLocalToUI)
}

function addSearchedUsersFromLocalToUI(){
    addUI.addSearchedUsersFromLocalToUI();
}

function clearSearched(){
    Storagex.clearLocalStorage()
    addUI.clearSearched()
}
function clearContent(){
    addUI.clearContentDiv()
}

function search(e){

const username=formInput.value.trim();
if(username===null || username == ""){
    alert("Lütfen geçerli bir kullanıcı adı giriniz")
}
else{
github.getGithubDatas(username)
.then((res)=>{
    addUI.addSearchedUserToUI(username)
    Storagex.setSearchedUsersToLocalStorage(username)
    addUI.addUserToUI(res.user)
    document.querySelector("#showRepos").addEventListener("click",()=>addUI.showRepo(res.repo))
})
.catch((err)=>console.log(err))

}



    e.preventDefault()
}