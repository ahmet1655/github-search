class GitHub {
    constructor() {
        this.url = "https://api.github.com/users/";
    }




    async getGithubDatas(username) {
        const user = await (await fetch(`${this.url}${username}`)).json()
        const repo = await (await fetch(`${this.url}${username}/repos`)).json()

        return {
            user: user,
            repo: repo
        }


    }

}