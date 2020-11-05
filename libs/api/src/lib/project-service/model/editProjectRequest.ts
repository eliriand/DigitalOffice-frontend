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

export interface EditProjectRequest { 
    /**
     * The project's Id.
     */
    id: string;
    /**
     * The project's title.
     */
    name: string;
    /**
     * The project's description.
     */
    description?: string;
    /**
     * Id of the department that funds the project.
     */
    departmentId: string;
    /**
     * Analogue the IsCompleted mark. Allows to search for the completed projects.
     */
    isActive: boolean;
}