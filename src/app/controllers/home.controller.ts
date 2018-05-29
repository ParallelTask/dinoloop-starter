import { ApiController, Controller, HttpGet } from 'dinoloop';

@Controller('/home')
export class HomeController extends ApiController {

    @HttpGet('/get')
    get(): string {
        return 'Hello World!';
    }
}