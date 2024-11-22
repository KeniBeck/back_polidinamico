import { IsString } from "class-validator";

export class CreateLoginDto {
    /**
     * The username of the user
     * @example 'johndoe@emiail.com'
     */
    @IsString()
    email: string;

    /**
     * The password of the user
     * @example 'password'
     */

    @IsString()
    password: string;
}
