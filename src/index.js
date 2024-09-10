import { Musics } from "../data.js"

let music = document.querySelector("audio")

const btnPlay = document.querySelector(".btn-play")
const btnPause = document.querySelector(".btn-pause")
let finalTime = document.querySelector(".final-time")
let cover = document.querySelector(".banner")
let NameMusic = document.querySelector(".description h2")

let artist = document.querySelector(".artist")
let indexMusic = 0
finalTime.textContent = secondsOfMinutes(Math.floor(music.duration))

const arrowBefore = document.querySelector(".arrowBefore")
arrowBefore.addEventListener("click", () => {
  if (indexMusic < 0) {
    indexMusic = 2
  } else {
    indexMusic--
  }

  renderMusic(indexMusic)
})
const arrowAfter = document.querySelector(".arrowAfter")
arrowAfter.addEventListener("click", () => {
  if (indexMusic > 2) {
    indexMusic = 0
  } else {
    indexMusic++
  }

  renderMusic(indexMusic)
})

function renderMusic(index) {
  music.setAttribute("src", Musics[index].file)
  cover.src = Musics[index].cover
  console.log((cover.src = Musics[index].cover))
  music.addEventListener("loadeddata", () => {
    cover.src = Musics[index].cover
    console.log((cover.src = Musics[index].cover))
    NameMusic.textContent = Musics[index].tilte
    artist.textContent = Musics[index].artist
    finalTime.textContent = secondsOfMinutes(Math.floor(music.duration))
  })
  playMusic()
}

const playMusic = () => {
  music.play()
  console.log(music)
  btnPlay.style.display = "none"
  btnPause.style.display = "block"
}
const pause = () => {
  music.pause()
  btnPause.style.display = "none"
  btnPlay.style.display = "block"
}

const attProgessBar = () => {
  let progressBar = document.querySelector("#progessBar")

  const timeMusic = music.currentTime

  const durationMusic = music.duration
  const progressValue = timeMusic / durationMusic
  if (durationMusic > 0) {
    progressBar.style.width = `${progressValue * 100}%`
    // console.log(`Progresso atual: ${progressValue.toFixed(2) * 100}`)
  }
  //time music
  let initialTime = document.querySelector(".initial-time")
  initialTime.textContent = secondsOfMinutes(Math.floor(timeMusic))
}
function secondsOfMinutes(seconds) {
  let campMinutes = Math.floor(seconds / 60)
  let campSeconds = seconds % 60

  if (campSeconds < 10) {
    campSeconds = "0" + campSeconds
  }
  return `${campMinutes}:${campSeconds}`
}
music.addEventListener("timeupdate", attProgessBar)

btnPlay.addEventListener("click", playMusic)
btnPause.addEventListener("click", pause)
