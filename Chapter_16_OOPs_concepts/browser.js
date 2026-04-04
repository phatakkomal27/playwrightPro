class browser
{    constructor(name, version)
    {
        this.name = name;
        this.version = version;
    }
    startBrowser()
    {
        console.log("Starting " + this.name + " version " + this.version);
    }
    stopBrowser()
    {   
        console.log("Stopping " + this.name);
    }
}

let chrome = new browser("Google Chrome", "89.0");
chrome.startBrowser();
chrome.stopBrowser();

