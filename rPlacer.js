colour = 2 //eg. 1=red, 2=orange, 3=yellow
function place() {
    try {
        containerParent = document.querySelector("body > garlic-bread-app > faceplate-alert-reporter > garlic-bread-embed")
        if (containerParent == null) {console.error('To fix this error, go to the Elements tab. Ctrl+F, type "main-text" and hit enter (this step makes the shadow dom accessible to JS)'); return}
        container = containerParent.shadowRoot.querySelector("div > garlic-bread-share-container")

        placeButton = container.querySelector("div.bottom-controls > garlic-bread-status-pill").shadowRoot.querySelector("button")
        if (placeButton.querySelector("div > div.main-text").innerHTML != ' Place! ') {console.log("waiting"); return}
        placeButton.click()

        colourPickerMenu = container.querySelector("garlic-bread-color-picker").shadowRoot
        orangeButton = colourPickerMenu.querySelector(`div > div > div.palette > div:nth-child(${colour}) > button`)
        orangeButton.click()

        confirmButton = colourPickerMenu.querySelector("div > div > div.actions > button.confirm.disable-default-select")
        confirmButton.click()
    } catch (err) {}
}
// start the script
autoPlacer = setInterval(place, 1000)

/* 
to stop the script: 
clearInterval(autoPlacer) 
*/
