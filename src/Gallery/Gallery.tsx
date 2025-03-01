import PhotoAlbum from "react-photo-album";
import * as myGallery from "./GalleryImports"

// const album = (photos: Array<{ src: string, width: number, height: number }>) => {
const album = (photoArray: Array<string>, width: number, height: number) => {
    const mapped = photoArray.map((each) => {
        return { src: each, width, height }
    });
    return <PhotoAlbum
        layout="rows"
        targetRowHeight={500}
        photos={mapped} />;
};

const dftWidth = 4800;
const dftHeight = 3600

const dftCreatureWidth = 4469;
const dftCreatureHeight = 3352;

const width01 = 3321;
const height01 = 2978;

const width02 = 3105;
const height02 = 4140;

const width05 = 3100;
const height05 = 4140;

const Gallery = {
    Circles: album(myGallery.circles, dftWidth, dftHeight),
    Creatures01: album(myGallery.creatures01, width01, height01),
    Creatures02: album(myGallery.creatures02, width02, height02),
    Creatures03: album(myGallery.creatures03, dftCreatureWidth, dftCreatureHeight),
    Creatures04: album(myGallery.creatures04, dftCreatureWidth, dftCreatureHeight),
    Creatures05: album(myGallery.creatures05, width05, height05),
    Creatures06: album(myGallery.creatures06, dftCreatureWidth, dftCreatureHeight),
    Creatures07: album(myGallery.creatures07, dftCreatureWidth, dftCreatureHeight),
    Creatures08: album(myGallery.creatures08, dftCreatureWidth, dftCreatureHeight),
    Artomat: album(myGallery.artomat, dftWidth, dftHeight),
    CreaturesDemo: album(myGallery.creaturesDemo, dftWidth, dftHeight),
    Sketch1: album(myGallery.sketch1, dftWidth, dftHeight),
    Sketch2: album(myGallery.sketch2, dftWidth, dftHeight),
};

const Emblems = myGallery.emblems;

export { Gallery, Emblems }