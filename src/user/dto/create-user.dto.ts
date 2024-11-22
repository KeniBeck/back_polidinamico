import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    /**
     * @example "John"
     */
    @IsString()
    name: string;

    /**
     * @example "Smith"
     */
    @IsString()
    lastname: string;

    /**
     * @example "000-000-000"
     */
    @IsString()
    dni: string;

    /**
     * @example "example@email.com"
     */
    @IsEmail()
    email: string;

    /**
     * @example "password"
     */
    @IsString()
    password: string;

}
