image_index = 0

var symphony_strips = {
    image: "carousel-images/carousel-photo-1.jpg",
    caption: `Shad Carleton Design Group Two's Prototype "Symphony Strips"`
}

var moutain_biking = {
    image: "carousel-images/carousel-photo-2.jpg",
    caption: `Mountain biking with friends at the "hydrocut"`
}

var pink_donut = {
    image: "carousel-images/carousel-photo-3.jpg",
    caption: `3D modeled pink donut made using blender`
}

var cooking_burgers = {
    image: "carousel-images/carousel-photo-4.jpg",
    caption: `Cooking hamburgers over the camp fire at Killbear Provincial Park`
}

var full_send = {
    image: "carousel-images/carousel-photo-5.jpg",
    caption: `Full sending it off a mountain biking jump with friends`
}

index_list = [symphony_strips, moutain_biking, pink_donut, cooking_burgers, full_send]

function carousel_slider(direction) {
    if (direction == "left") {
        image_index -= 1;
    }
    if (direction == "right") {
        image_index += 1;
    }
    if (image_index < 0) {
        image_index = index_list.length - 1;
    }
    console.log(index_list.length - 1)
    if (image_index > index_list.length - 1) {
        image_index = 0;
    }

    document.getElementById("carousel-picture").src = index_list[image_index].image;
    document.getElementById("carousel-writing").innerHTML = index_list[image_index].caption;
    document.getElementById("carousel-number").innerHTML = (image_index + 1) + "/5";
}