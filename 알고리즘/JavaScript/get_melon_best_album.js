const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
const plays = [500, 600, 150, 800, 2500];

function get_melon_best_album(genres, plays) {
  let result = [];
  let songs = genres.map((genre, index) => {
    return {
      no: index,
      genre: genre,
      play: plays[index],
    };
  });
  console.log(songs);

  let genrePlayCnt = [];
  songs.forEach((song) => {
    let thisGenre = genrePlayCnt.find((genrePlay) => genrePlay.genre === song.genre);
    if (!thisGenre) {
      genrePlayCnt.push({
        genre: song.genre,
        play: song.play,
      });
    } else {
      thisGenre.play += song.play;
    }
  });
  genrePlayCnt.sort((a, b) => b.play - a.play);

  genrePlayCnt.forEach((genrePlay) => {
    let thisGenreSongs = songs.filter((song) => song.genre === genrePlay.genre);
    thisGenreSongs.sort((a, b) => b.play - a.play);
    result.push(thisGenreSongs[0].no);
    if (thisGenreSongs.length > 1) {
      result.push(thisGenreSongs[1].no);
    }
  });
  return result;
}

console.log(get_melon_best_album(genres, plays));
