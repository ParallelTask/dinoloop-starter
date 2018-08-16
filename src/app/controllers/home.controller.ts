import { ApiController, Controller, HttpGet, BindNumber } from 'dinoloop';

@Controller('/home')
export class HomeController extends ApiController {

    @HttpGet('/get')
    get(): string {
        return 'Hello World!';
    }

    @HttpGet('/user/:id')
    user(@BindNumber() id: number): number {
        return id;
    }
}