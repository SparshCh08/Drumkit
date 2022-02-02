<script>
      function removeTransition(t) {
        if (t.propertyName != "transform") return;
        //transform is a property to avoid if we press a
        // only it will work for a data-key not for all other keys
        // that's why we returned it
        // t.target.classList.remove("playing");
        this.classList.remove("playing");
      }
      function playDrum(t) {
        const audio = document.querySelector(`audio[data-key="${t.keyCode}"]`);
        //`audio[data-key="${t.keyCode}"]`
        // this is saying if there is any audio with [data-key="your entered key"]
        const key = document.querySelector(`div[data-key="${t.keyCode}"]`);
        if (!audio) return; // unappropriate key return immediately

        key.classList.add("playing");
        audio.currentTime = 0; // to replay the audio
        audio.play();
      }
      const keys = Array.from(document.querySelectorAll(".letter"));
      keys.forEach((key) =>
        key.addEventListener("transitionend", removeTransition)
      );
      window.addEventListener("keydown", playDrum);
      //adding an event in window when key is going down or up "keydown/up"
    </script>
