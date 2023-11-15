class Song {
    id;
    name;
    avatar;
    mp3;

    constructor(id, name, avatar,mp3) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.mp3 = mp3;
    }
    setId(id){
        this.id = id;
    }
    getId(){
        return this.id;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setAvatar(avatar){
        this.avatar = avatar;
    }
    getAvatar(){
        return this.avatar;
    }

}