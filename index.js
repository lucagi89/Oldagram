let posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const postContent = document.getElementById("post-content")


function render(){
    let renderedPosts = ""
    for (let i = 0; i<posts.length; i++){
        let userName =  posts[i].name
        let userUsername = posts[i].username
        let userLocation = posts[i].location
        let userAvatar = posts[i].avatar
        let userPost = posts[i].post
        let userComment = posts[i].comment
        let userLikes = posts[i].likes
        let pageHtml = `<section class="post-owner">
                            <img class="post-avatar" src=${userAvatar} alt="vangogh avatar">
                            <div>
                                <p><bold class="black">${userName}</bold><br>${userLocation}</p>
                            </div>
                        </section>
                        
                        <img class="post" src=${userPost} id="post-image-${i}" alt="van gogh's post">
                        
                        <div class="icons">
                            <img src="images/icon-heart.png" alt="heart icon" class="icon" id="heart-${i}">
                            <img src="images/icon-comment.png" alt="comment icon" class="icon">
                            <img src="images/icon-dm.png" alt="dm icon" class="icon">
                        </div>
                        
                         <div class="footer">
                             <p class="black"><span id="likes-${i}">${userLikes}</span> likes</p>
                             <p><span class="black">${userUsername} </span> ${userComment}</p>
                         </div>`
        renderedPosts += pageHtml
        
}
        postContent.innerHTML = renderedPosts
}
render()

const postImage0 = document.getElementById("post-image-0")
const postImage1 = document.getElementById("post-image-1")
const postImage2 = document.getElementById("post-image-2")
const likesPar0 =  document.getElementById("likes-0")
const likesPar1 =  document.getElementById("likes-1")
const likesPar2 =  document.getElementById("likes-2")
const heart0 = document.getElementById("heart-0")
const heart1 = document.getElementById("heart-1")
const heart2 = document.getElementById("heart-2")
let likes0 = parseInt(likesPar0.textContent.replace(/,/g, ''))
let likes1 = parseInt(likesPar1.textContent.replace(/,/g, ''))
let likes2 = parseInt(likesPar2.textContent.replace(/,/g, ''))

postImage0.addEventListener("dblclick", function(){
    let add = likes0 += 1
    let commaNum = add.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    likesPar0.textContent = commaNum 
})
postImage1.addEventListener("dblclick", function(){
    let add = likes1 += 1
    let commaNum = add.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    likesPar1.textContent = commaNum 
})
postImage2.addEventListener("dblclick", function(){
    let add = likes2 += 1
    let commaNum = add.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    likesPar2.textContent = commaNum 
})

heart0.addEventListener("click", function(){
    let add = likes0 += 1
    let commaNum = add.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    likesPar0.textContent = commaNum 
})
heart1.addEventListener("click", function(){
    let add = likes1 += 1
    let commaNum = add.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    likesPar1.textContent = commaNum 
})
heart2.addEventListener("click", function(){
    let add = likes2 += 1
    let commaNum = add.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    likesPar2.textContent = commaNum 
})