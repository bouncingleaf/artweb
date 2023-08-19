import PhotoAlbum from "react-photo-album";

const sketch1 = [
    { src: "/src/assets/sketchbook/book1-s1134032-0001.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book1-s1134032-0002.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book1-s1134032-0003.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book1-s1134032-0004.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book1-s1134032-0005.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book1-s1134032-0006.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book1-s1134032-0007.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book1-s1134032-0008.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book1-s1134032-0009.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book1-s1134032-0010.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book1-s1134032-0011.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book1-s1134032-0012.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book1-s1134032-0013.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book1-s1134032-0014.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book1-s1134032-0015.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book1-s1134032-0016.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book1-s1134032-0017.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book1-s1134032-0018.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book1-s1134032-0019.jpeg", width: 4800, height: 3600 },
];

const sketch2 = [
    { src: "/src/assets/sketchbook/book2-S6664862_01.jpg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book2-S6664862_02.jpg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book2-S6664862_03.jpg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book2-S6664862_04.jpg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book2-S6664862_05.jpg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book2-S6664862_06.jpg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book2-S6664862_07.jpg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book2-S6664862_08.jpg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book2-S6664862_09.jpg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book2-S6664862_10.jpg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book2-S6664862_11.jpg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book2-S6664862_12.jpg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book2-S6664862_13.jpg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book2-S6664862_14.jpg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book2-S6664862_15.jpg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book2-S6664862_16.jpg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book2-S6664862_17.jpg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book2-S6664862_18.jpg", width: 4800, height: 3600 },
    { src: "/src/assets/sketchbook/book2-S6664862_19.jpg", width: 4800, height: 3600 },
];

const artomat = [
    { src: "/src/assets/artomat/IMG_6224.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/artomat/IMG_6225.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/artomat/IMG_6235.jpeg", width: 3600, height: 3600 },
];

const creatures = [
    { src: "/src/assets/artomat/creatures/IMG_6176.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/artomat/creatures/IMG_6178.jpeg", width: 4800, height: 3600 },
    { src: "/src/assets/artomat/creatures/IMG_6179.jpeg", width: 3600, height: 3600 },
    { src: "/src/assets/artomat/creatures/IMG_6180.jpeg", width: 3600, height: 3600 },
];


const Artomat = () => {
    return <PhotoAlbum
        layout="rows"
        targetRowHeight={500}
        photos={artomat} />;
}

const Creatures = () => {
    return <PhotoAlbum
        layout="rows"
        targetRowHeight={500}
        photos={creatures} />;
}

const Sketch1 = () => {
    return <PhotoAlbum
        layout="rows"
        targetRowHeight={500}
        photos={sketch1} />;
}


const Sketch2 = () => {
    return <PhotoAlbum
        layout="rows"
        targetRowHeight={500}
        photos={sketch2} />;
}

const Gallery = { Artomat, Creatures, Sketch1, Sketch2 }

export default Gallery