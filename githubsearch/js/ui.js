class UI {
    constructor() {
        this.profileContentDiv = document.querySelector("#profileContentDiv")
        this.formInput = document.querySelector("#searchInput")
        this.contentDiv = document.querySelector("#contentDiv")
        this.tableContent = document.querySelector("#tableContent")
        this.repoButton = true;
        this.searchedUserList = document.querySelector("#searchedUserList")
    }




    addSearchedUsersFromLocalToUI() {
        const users = Storagex.getSearchedUsersFromLocalStorage();
        if (users != null && users.length > 0) {
            users.forEach((user) => {

                const li = document.createElement("li")
                li.className = "list-group-item"
                li.textContent = user
                this.searchedUserList.append(li)
            })
        }
    }





    addSearchedUserToUI(username) {
        Storagex.checkUser(username)

        const li = document.createElement("li")
        li.className = "list-group-item"
        li.textContent = username
        this.searchedUserList.append(li)


    }

    clearSearched() {
        this.searchedUserList.innerHTML = "";
    }

    addUserToUI(user) {
        this.profileContentDiv.innerHTML = `
 <div class="col-sm-12 col-md-4 col-lg-4">
<div id="profileDiv">
    <img id="profileImg" src="${user.avatar_url}" alt="">
    <span style="color: white;">${user.name === null ? "" : user.name}</span>
    <hr style="border: 1px gray solid; width: 100px;">
    <span style="color: white;"></span>
</div>
</div>


<div id="rightSide" class="col-sm-12 col-md-8 col-md-8">
<div id="badgeDiv" class="mt-3">
    <button style="font-family: monospace;" type="button" class="btn btn-light">
    ${user.followers} <span class="badge badge-light">4</span>
    </button>
    <button style="font-family: monospace;" type="button" class="btn btn-light">
    ${user.following} <span class="badge badge-light">4</span>
    </button>
    <button style="font-family: monospace;" type="button" class="btn btn-light">
    ${user.public_repos} <span class="badge badge-light">4</span>
    </button>
</div>


<div class="infoDiv">
    <div class="info">
        <img style="width: 50px;" src="imagess/person.png" alt="">
        <span style="color: #fff; font-family: monospace;">${user.company === null ? "" : user.company}</span>
    </div>
    <div class="info">
        <img style="width: 50px;" src="imagess/local.png" alt="">
        <span style="color: #fff; font-family: monospace;">${user.location === null ? "" : user.location}</span>
    </div>
    <div class="info">
        <img style="width: 50px;" src="imagess/email.png" alt="">
        <span style="color: #fff; font-family: monospace;">${user.email === null ? "" : user.email}</span>
    </div>
    <div class="info">
        <a id=showRepos style="font-family: monospace; font-family: monospace;
        color: #fff;
        text-decoration: none;" href="#">Repoları göster</a>
    </div>
</div>
</div> 
`
    }

    changeShowRepoButton() {
        const showRepo = document.querySelector("#showRepos")
        if (this.repoButton) {
            showRepo.textContent = "Repoları göster"
        }
        else {
            showRepo.textContent = "Repoları kapat"
        }
    }



    showRepo(repos) {
        if (this.repoButton) {
            if (repos != null && repos.length > 0) {
                let sayac = 1;
                repos.forEach((repo) => {
                    this.tableContent.innerHTML += `  
                    <th scope="row">${sayac}</th>
                    <td>${repo.name}</td>
                    <td>${repo.created_at}</td>
    
                </tr> `
                    sayac++;
                })
            }
            this.repoButton = false;
            this.changeShowRepoButton()
        }

        else {
            this.repoButton = true
            this.changeShowRepoButton()
            this.tableContent.innerHTML = "";
        }


    }



    clearContentDiv() {
        this.formInput.value = ""
        this.profileContentDiv.innerHTML = "";
        this.tableContent.innerHTML = "";


    }




}


