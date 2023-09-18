<template>
  <div id="appHome2">
    <div id="start" class="fullscreen_view">
      <div class="title_text">
        <h1><b>AR</b>lebnispfade</h1>
        <h2>Oberbergischer Kreis</h2>
      </div>
      <video id="background-video" autoplay loop>
        <source src="assets/intro-video.mp4" type="video/mp4">
      </video>
      <a href="#menu-1" class="continue_bottom">
        <img src="assets/icons/arrow_back.svg">
      </a>
    </div>
    <div id="menu-1" class="fullscreen_view">
      <div class="buttons">
        <router-link :to="'/browse'" class="button" style="background: black;">
          <p>Ich will nur ein bisschen</p>
          <p><b>stöbern</b></p>
        </router-link>
        <router-link :to="'/menu'" class="button" style="background: #EB6A0A;">
          <p>Ich will die ARlebnisse</p>
          <p><b>nutzen</b></p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
    }
  },
  mounted() {
    this.playPauseVideo()
  },
  methods: {
    playPauseVideo() {
      let videos = document.querySelectorAll("video");
      videos.forEach((video) => {
        // We can only control playback without insteraction if video is mute
        video.muted = true;
        // Play is a promise so we need to check we have it
        let playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            let observer = new IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (
                        entry.intersectionRatio !== 1 &&
                        !video.paused
                    ) {
                      video.pause();
                    } else if (video.paused) {
                      video.play();
                    }
                  });
                },
                { threshold: 0.2 }
            );
            observer.observe(video);
          });
        }
        video.muted = false;
      });
    }

  }
}
</script>

<style scoped>

#appHome2 {
  scroll-snap-type: y mandatory;
  max-width: 100vw;
  max-height: 100vh;
  height: 100vh;
  overflow: auto;
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
}

.fullscreen_view {
  height: 100%;
  width: 100%;
  scroll-snap-align: start;
  position: relative;
}

.title_text {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-family: var(--font-family);
}

.title_text h1 {
  font-weight: 600;
}

.title_text h2 {
  font-weight: 100;
}

.title_text b {
  color: #eb6a0a;
}

#background-video {
  margin-top: 2rem;
  width: 100vw;
}

.continue_bottom {
  position: absolute;
  bottom: 0;
  height: 40vh;
  width: 100vw;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 60%,
    rgba(0, 212, 255, 0) 100%
  );
  display: flex;
  justify-content: center;
}

.continue_bottom img {
  margin-top: 150px;
  filter: invert(100%);
  transform: rotate(-90deg);
  width: 50px;
}

#menu-1 {
  background: linear-gradient(0deg, rgba(10, 50, 10, 1), rgba(10, 100, 10, 0.5)),
    url("./assets/aggertalsperre.jpg");
  background-size: cover;
}

#menu-1 .buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  height: 100%;
  width: 100%;
}

#menu-1 .buttons .button {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: var(--font-family);
  padding: 10px;
}

#menu-1 .buttons .button b {
  font-size: 2rem;
}
