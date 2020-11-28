var data = require('./helper');  // I get the data from helper.js file, it is where i wrote the songs attributes and exported it


/**
 *  Coder: Eveguel Arocha
 *  Hi, You might be reading my code, I use nodejs to execute the file, 
 *  No npm used in this code
 *  Happy coding :)
 */
//===============================Constructor=============================//
function SongConstructor(Singer, Title, Year, Genre,SingerIsMale){
    this.Singer = Singer;
    this.Title = Title;
    this.Year = Year;
    this.Genre = Genre;
    this.SingerIsMale = SingerIsMale;

    //======== I created a simple condition to check if the song is written in 2020 =========//
    this.Is2020Song = function(){
        if(this.Year > 2019){
            console.log("The song is written in Pandemic Year "+ this.Year)
        }
        if(this.Year <= 2019){
            console.log("The song is NOT written in Pandemic Year");
        }
    }
}

//===============================Instantiation=============================//
var Song_1 = new SongConstructor (data.Song1.Singer, data.Song1.Title, data.Song1.Year, data.Song1.Genre, data.Song1.SingerIsMale);
var Song_2 = new SongConstructor (data.Song2.Singer, data.Song2.Title, data.Song2.Year, data.Song2.Genre, data.Song2.SingerIsMale);
var Song_3 = new SongConstructor (data.Song3.Singer, data.Song3.Title, data.Song3.Year, data.Song3.Genre, data.Song3.SingerIsMale);
var Song_4 = new SongConstructor (data.Song4.Singer, data.Song4.Title, data.Song4.Year, data.Song4.Genre, data.Song4.SingerIsMale);
var Song_5 = new SongConstructor (data.Song5.Singer, data.Song5.Title, data.Song5.Year, data.Song5.Genre, data.Song5.SingerIsMale);

var AllSongs = [];
AllSongs.push(Song_1, Song_2, Song_3, Song_4, Song_5);


for (var i in AllSongs){
    console.log(AllSongs[i]); 
}
/**
 * Created an array so i can output all datas in shorter way
 * console.log(AllSongs) to view all datas in array of object form
 * 
 * ===========INSIDE THE FOR LOOP=============
 * console.log(AllSongs[i]) To view the data in object form
 * console.log(AllSongs[i].Singer) To View the singer
 * console.log(AllSongs[i].Title) To View the title
 * console.log(AllSongs[i].Year) To View the year
 * console.log(AllSongs[i].Genre) To View the genre
 * console.log(AllSongs[i].SingerIsMale) To View if the singer is male
 * console.log(AllSongs[i].Is2020Song()) To view if the song is written in 2020
 */
