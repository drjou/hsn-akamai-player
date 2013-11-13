var Video = Class.extend({
    //config override and element
    init: function(config, el){
        this.config = config;
        this.el = el;
        this.videoElement = document.getElementById(el);
        this.hsnAmp =  new AMP(el, config);
        this.hsnAmp.addEventListener("canplay", this.logEvent);
        this.hsnAmp.addEventListener("canplaythrough", this.logEvent);
        this.hsnAmp.addEventListener("loadedmetadata", this.logEvent);
        this.hsnAmp.addEventListener("loadstart", this.logEvent);
        this.hsnAmp.addEventListener("playing", this.logEvent);
        //this.hsnAmp.addEventListener("ended", this.onComplete);
        this.hsnAmp.addEventListener("pause", this.onPause);
        this.hsnAmp.addEventListener("waiting", this.logEvent);
        this.hsnAmp.addEventListener("durationchange", durationChangeHandler);
        this.hsnAmp.addEventListener("volumechange", this.logEvent);
        this.hsnAmp.addEventListener("timeupdate", this.onTimeUpdate);
        this.hsnAmp.addEventListener("seeking", this.logEvent);
        this.hsnAmp.addEventListener("seeked", this.logEvent);
    },

    play: function(){
      this.hsnAmp.play();
    },

    pause: function(){
      this.hsnAmp.pause();
    },

    isPaused: function(){
        return this.hsnAmp.paused;
    },

    stop: function(){
        this.hsnAmp.end();
    },

    setCurrentTime: function(time)
    {
        this.hsnAmp.setCurrentTime(time)
    },

    getCurrentTime: function()
    {
        return this.hsnAmp.getCurrentTime();
    },

    setSrc: function(src)
    {
        this.hsnAmp.setSrc(src);
    },

    getSrc: function()
    {
        return this.hsnAmp.getSrc();
    },

    getMedia: function()
    {
        return this.hsnAmp.getMedia();
    },

    setMedia: function(config)
    {
        this.hsnAmp.setMedia(config);
    },

    getSource: function(){
        return this.hsnAmp.getSource();
    },

    setSource: function(source){
        this.hsnAmp.setSource(source);
    },

    getDuration: function()
    {
        return this.hsnAmp.getDuration();
    },

    onTimeUpdate: function(){
        return Math.round(this.getCurrentTime());
    },

    getSeeking: function()
    {
        return this.hsnAmp.getSeeking();
    },

    getMuted: function(){
        return this.hsnAmp.getMuted();
    },

    setVolume: function(volume){
        this.hsnAmp.setVolume(volume);
    },

    getVolume: function(){
        return this.hsnAmp.getVolume();
    },

    logEvent: function(event){
        log(event.type);
    },

    onComplete: function(event){
        //log(event.type);
        console.log("on complete!")
    },

    getEnded: function(){
        return this.hsnAmp.getEnded();
    },

    resize: function(w, h){
        this.videoElement.style.width = w + "px";
	    this.videoElement.style.height = h + "px";
    },

    getConfig: function(){
        return this.config;
    },

    getPlayer: function(){
        return this.hsnAmp;
    },

    getVersion: function(){
        return this.hsnAmp.getVersion();
    }
});