import noticationSound from '../../../../assets/sounds/notification.wav';

class ChatAudio {
  audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio(noticationSound);
  }

  public play() {
    this.audio.currentTime = 0;
    this.audio.play();
  }
}

export const chatAudio = new ChatAudio();
