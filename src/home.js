function loadHome(){
    const homepage = document.createElement("div");
    homepage.id = "homepage";

    const review = document.createElement("div");
    review.innerText = '"It\'s a restaurant with food. 10/10." - Restaurant Reviewer';
    review.id = "review";

    homepage.appendChild(review);
    return homepage;
}

export default loadHome;