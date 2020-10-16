/**
 * UserService
 * UserService is an API that intended to work with users, user credentials and achievements. 
 *
 * OpenAPI spec version: 1.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface Achievement { 
    /**
     * Achievement global unique identifier.
     */
    id?: string;
    /**
     * Achievement message.
     */
    message?: string;
    /**
     * File global unique identifier.
     */
    pictureFieId?: string;
}