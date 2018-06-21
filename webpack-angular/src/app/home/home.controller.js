export default class HomeController {
    constructor(homeService) {
        this.homeService = homeService;
        this.name = 'World';
    }

    changeName() {
        this.name = 'angular-tips';
    }

    randomName() {
        this.name = this.homeService.getName();
    }
}