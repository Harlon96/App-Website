function speak() {
    var voice = new SpeechSynthesisUtterance();
    voice.text = "App website is a website that can be used with most mobile devices.";
    speechSynthesis.speak(voice);
}