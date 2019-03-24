// Item array removal
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomNumber = parseInt(Math.random() * 11);
for (let i = 0; i < numbersArray.length; i++){
    if (numbersArray[i] === randomNumber){
          numbersArray.splice(i, 1)
    }
    console.log(numbersArray);
}
 // Series duration of my life
 const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,  
    },
    {
      title: 'Sopranos',
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: 'The Wire',
      days: 2,
      hours: 12,
      minutes: 0,
    }
  ]

// My favorite songs

  const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

const myPlaylist = [];

function addSongToDatabase (song){
    songDatabase.push(song);

};


addSongToDatabase({ songId: 1, title: "gone", artist: "Jin" });

addSongToDatabase({ songId: 2, title: "Wolf", artist: "EXO" });

addSongToDatabase({ songId: 3, title: "song for you", artist: "EXO" });
console.log(songDatabase);

function getSongByTitle (title){
    for (let i = 0; i < songDatabase.length; i++) {

        if (songDatabase[i].title === title) 
        return(songDatabase[i]);
    
    }

};
const searchedSong = getSongByTitle('When is enough too little?');
console.log(searchedSong);


function addSongToMyPlaylist (title){

    myPlaylist.push(getSongByTitle(title))

}

addSongToMyPlaylist('3 nails in wood');

console.log(myPlaylist);

// Note

var notes = [];
function  addNote(content, id){

notes.push(content, id);

};
addNote("kajima", 1);
addNote("chebal",2);
addNote("mewo",3);

console.log(notes);

function getNoteFromId(id){
    for (let i=0; i < notes.length; i++)
    if (notes[i].id === id){
        return (notes[i])
    }
    else if (notes[i].id !== "number"){
        return "error"
    }
};
 console.log(getNoteFromId[1]);


function logOutNotesFormatted (){
for (let i = 0; i < notes.length; i++)

console.log("The note with id" + notes[i].id + " has the following note text"  + notes[i].content);
}



