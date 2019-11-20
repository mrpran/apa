export default class Portfolio {
    projectId :string;
    bu : string;
    vertical : string;
    account : string;
    bo : string;
    al : string;
    appName : string;
    asIs : any;
    toBe : any;

    constructor(projectId?, bu?, vertical?, account?, bo?, al?, appName?, asIs?, toBe?) {
        this.projectId = projectId;
        this.bu = bu;
        this.bo = bo;
        this.vertical = vertical;
        this.account = account;
        this.al = al;
        this.asIs = asIs;
        this.toBe = toBe;
        this.appName = appName;
    }
}