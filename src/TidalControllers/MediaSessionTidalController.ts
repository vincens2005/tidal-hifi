import { MediaStatus } from "../models/mediaStatus";
import { RepeatState } from "../models/repeatState";
import { DomTidalController } from "./DomTidalController";
import { TidalController } from "./TidalController";

export class MediaSessionTidalController implements TidalController {
  public domMediaController: TidalController;

  constructor() {
    this.domMediaController = new DomTidalController();
  }
  // example of using the original domMediaController as a fallback
  goToHome(): void {
    this.domMediaController.goToHome();
  }

  setPlayStatus(status: MediaStatus): void {
    // globalThis.alert("Method not implemented: " + status);
    //throw new Error("Method not implemented.");
  }
  getDuration(): string {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    return "";
  }
  getAlbumName(): string {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    // globalThis.alert(globalThis.navigator.mediaSession.metadata.album) // this works
    return globalThis.navigator.mediaSession.metadata.album;
  }
  getTitle(): string {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    return globalThis.navigator.mediaSession.metadata.title;
  }
  getArtists(): string[] {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    return [globalThis.navigator.mediaSession.metadata.artist];
  }
  getArtistsString(): string {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    return globalThis.navigator.mediaSession.metadata.artist;
  }
  getPlayingFrom(): string {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    return this.domMediaController.getPlayingFrom();
  }
  isFavorite(): boolean {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    return this.domMediaController.isFavorite();
  }
  getSongIcon(): string {
    // globalThis.alert("Method not implemented");
    return (globalThis.navigator.mediaSession.metadata.artwork.at(-1)).src;
    // //throw new Error("Method not implemented.");
  }
  getCurrentTime(): string {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    return this.domMediaController.getCurrentTime();
  }
  getCurrentPosition(): string {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    return this.domMediaController.getCurrentPosition();
  }
  getCurrentPositionInSeconds(): number {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    return this.domMediaController.getCurrentPositionInSeconds();
  }
  getTrackId(): string {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    return this.domMediaController.getTrackId();
  }
  play(): void {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    this.domMediaController.play();
  }
  pause(): void {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    this.domMediaController.pause();
  }
  stop(): void {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    this.domMediaController.stop();
  }
  getCurrentShuffleState(): boolean {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    return this.domMediaController.getCurrentShuffleState();
  }
  getCurrentRepeatState(): RepeatState {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    return this.domMediaController.getCurrentRepeatState();
  }
  getCurrentlyPlayingStatus(): MediaStatus {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    
    if (globalThis.navigator.mediaSession.playbackState == "playing")
      return MediaStatus.playing;  

    return MediaStatus.paused;
  }
  back(): void {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    this.domMediaController.back();
  }
  forward(): void {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    this.domMediaController.forward();
  }
  repeat(): void {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    this.domMediaController.repeat();
  }
  next(): void {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    this.domMediaController.next();
  }
  previous(): void {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    this.domMediaController.previous();
  }
  toggleShuffle(): void {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    this.domMediaController.toggleShuffle();
  }
  openSettings(): void {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    this.domMediaController.openSettings();
  }
  toggleFavorite(): void {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    this.domMediaController.toggleFavorite();
  }
  playPause(): void {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
    this.domMediaController.playPause();
  }
  hookup(): void {
    // globalThis.alert("Method not implemented");
    //throw new Error("Method not implemented.");
  }
}
