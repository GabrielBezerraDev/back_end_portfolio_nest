import { Get, Res, Controller } from "@nestjs/common";
import { UserService } from "./user.service";
import { Response } from "express";

@Controller("api/user")

export class UserController{

    constructor(
        private userService: UserService
    ){

    }

    @Get()
    getUser(@Res() res: Response):Response<string>{
        return res.json(this.userService.getUser());
    }
}