function domainName(url){
    if (url.indexOf("http://") >= 0) {
        url = url.slice(url.indexOf("http://") + 7)
    }
    if (url.indexOf("https://") >= 0) {
        url = url.slice(url.indexOf("http://") + 9)
    }
    if (url.indexOf("www.") >= 0) {
        url = url.slice(url.indexOf("http://") + 5)
    }
    return url.slice(0, url.indexOf("."))
}

domainName("www.xakep.rub")
domainName("http://www.vswy4f4.us/")
