/**
 * 
 * @param cname cookie名称
 * @param cvalue cookie值
 * @param exdays 过期时间
 * @return void
 */

export function setCookie(cname: string, cvalue: any, exdays: number): void {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}

/**
 * 
 * @param cname Cookie 名称
 * @returns coolie值
 */

export function getCookie(cname: string) {
    const name = cname + "=";
    const ca = document.cookie.split(";");

    for(let i=0;i<ca.length;++i) {
        let c = ca[i];
        while (c.charAt(0) == ' ') 
            c = c.substring(1);
        if(c.indexOf(name) != -1) 
            return c.substring(name.length, c.length);
    }

    return "";
}

/**
 * @param name cookie名称
 */

export function clearCookie(name: string) {
    setCookie(name, "", -1);
}

export function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again" +  user);
    } else {
        user= prompt("Please enter your name:", "") as string;
        if(user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}