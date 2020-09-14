/**
 * ProjectService
 * This specification describes which endpoints this service has, which models it uses.  This service, ProjectService, is intended to work with the projects -- create them, assign people to them, update info.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { FilesIds } from './filesIds';

export interface ProjectFileRequest { 
    /**
     * The project's ID.
     */
    id?: string;
    filesIds?: FilesIds;
}