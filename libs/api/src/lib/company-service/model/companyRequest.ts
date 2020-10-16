/**
 * CompanyService
 * CompanyService is an API that intended to work with positions, companies and departments. -
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface CompanyRequest { 
    /**
     * Company global unique identifier.
     */
    companyId?: string;
    /**
     * Company name.
     */
    name?: string;
    /**
     * Does the company work?
     */
    isActive?: boolean;
}