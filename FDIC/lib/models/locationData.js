/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a LocationData.
 */
class LocationData {
  /**
   * Create a LocationData.
   * @property {string} [aDDRESS] Street address at which the branch is
   * physically located.
   * @property {string} [bKCLASS] A classification code assigned by the FDIC
   * based on the institution's charter type (commercial bank or savings
   * institution), charter agent (state or federal), Federal Reserve membership
   * status (Fed member, Fed nonmember) and its primary federal regulator
   * (state chartered institutions are subject to both federal and state
   * supervision). N - Commercial bank, national (federal) charter and Fed
   * member, supervised by the Office of the Comptroller of the Currency (OCC);
   * NM - Commercial bank, state charter and Fed nonmember, supervised by the
   * FDIC; OI - Insured U.S. branch of a foreign chartered institution (IBA);
   * SA - Savings associations, state or federal charter, supervised by the
   * Office of Thrift Supervision (OTS); SB - Savings banks, state charter,
   * supervised by the FDIC; SM - Commercial bank, state charter and Fed
   * member, supervised by the Federal Reserve (FRB). Possible values include:
   * 'N', 'NM', 'OI', 'SA', 'SB', 'SM'
   * @property {string} [cBSA] Name of the Core Based Statistical Area (CBSA)
   * as defined by the US Census Bureau Office of Management and Budget.
   * @property {string} [cBSADIV] Name of the Core Based Statistical Division
   * as defined by the US Census Bureau Office of Management and Budget.
   * @property {string} [cBSADIVFLG] A flag (1=Yes) indicating member of a Core
   * Based Statistical Division as defined by the US Census Bureau Office of
   * Management and Budget. Possible values include: '0', '1'
   * @property {string} [cBSADIVNO] Numeric code of the Core Based Statistical
   * Division as defined by the US Census Bureau Office of Management and
   * Budget.
   * @property {string} [cBSAMETRO] Numeric code of the Metropolitan
   * Statistical Area as defined by the US Census Bureau Office of Management
   * and Budget
   * @property {string} [cBSAMETROFLG] A flag (1=Yes) used to indicate whether
   * an branch is in a Metropolitan Statistical Area as defined by the US
   * Census Bureau Office of Management and Budget
   * @property {string} [cBSAMETRONAME] Name of the Metropolitan Statistical
   * Area as defined by the US Census Bureau Office of Management and Budget
   * @property {string} [cBSAMICROFLG] A flag (1=Yes) used to indicate whether
   * an branch is in a Micropolitan Statistical Area as defined by the US
   * Census Bureau Office of Management and Budget. Possible values include:
   * '0', '1'
   * @property {string} [cBSANO] Numeric code of the Core Based Statistical
   * Area (CBSA) as defined by the US Census Bureau Office of Management and
   * Budget.
   * @property {string} [cERT] A unique number assigned by the FDIC used to
   * identify institutions and for the issuance of insurance certificates.
   * @property {string} [cITY] City in which branch is physically located.
   * @property {string} [cOUNTY] County where the branch is physically located.
   * @property {string} [cSA] Name of the Combined Statistical Area (CSA) as
   * defined by the US Census Bureau Office of Management and Budget
   * @property {string} [cSAFLG] Flag (1=Yes) indicating member of a Combined
   * Statistical Area (CSA) as defined by the US Census Bureau Office of
   * Management and Budget. Possible values include: '0', '1'
   * @property {string} [cSANO] Numeric code of the Combined Statistical Area
   * (CSA) as defined by the US Census Bureau Office of Management and Budget
   * @property {date} [eSTYMD] The date on which the branch began operations.
   * @property {string} [fiUNINUM] This is the FDIC UNINUM of the institution
   * that owns the branch.  A UNINUM is a unique sequentially number added to
   * the FDIC database for both banks and  branches.  There is no pattern
   * imbedded within the number.  The FI_UNINUM is updated with every merger or
   * purchase of branches to reflect the most current owner.
   * @property {number} [mAINOFF] Main Office. Flag (1=Yes) indicating this
   * location is the main office for the institution.
   * @property {string} [nAME] Legal name of the FDIC Insured Institution
   * @property {string} [oFFNAME] Name of the branch.
   * @property {string} [oFFNUM] The branch's corresponding office number.
   * @property {date} [rUNDATE] The day the institution information was
   * updated.
   * @property {number} [sERVTYPE] Service Type Code. Define the various types
   * of offices of FDIC-insured institutions. 11 - Full Service Brick and
   * Mortar Office; 12 - Full Service Retail Office; 13 - Full Service Cyber
   * Office; 14 - Full Service Mobile Office; 15 - Full Service Home/Phone
   * Banking; 16 - Full Service Seasonal Office; 21 - Limited Service
   * Administrative Office; 22 - Limited Service Military Facility; 23 -
   * Limited Service Facility Office; 24 - Limited Service Loan Production
   * Office; 25 - Limited Service Consumer Credit Office; 26 - Limited Service
   * Contractual Office; 27 - Limited Service Messenger Office; 28 - Limited
   * Service Retail Office; 29 - Limited Service Mobile Office; 30 - Limited
   * Service Trust Office;
   * @property {string} [sTALP] State abbreviation in which the branch is
   * physically located. The FDIC Act defines state as any State of the United
   * States, the District of Columbia, and any territory of the United States,
   * Puerto Rico, Guam, American Samoa, the Trust Territory of the Pacific
   * Islands, the Virgin Island, and the Northern Mariana Islands.
   * @property {string} [sTCNTY] A five digit number representing the state and
   * county in which the institution is physically located.  The first two
   * digits represent the FIPS state numeric code and the last three digits
   * represent the FIPS county numeric code.
   * @property {string} [sTNAME] State in which the  branch is physically
   * located. The FDIC Act defines state as any State of the United States, the
   * District of Columbia, and any territory of the United States, Puerto Rico,
   * Guam, American Samoa, the Trust Territory of the Pacific Islands, the
   * Virgin Island, and the Northern Mariana Islands.
   * @property {string} [uNINUM] Unique Identification Number for a Branch
   * Office as assigned by the FDIC
   * @property {string} [zIP] The first five digits of the full postal zip code
   * representing physical location of the branch.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LocationData
   *
   * @returns {object} metadata of LocationData
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'location-data',
      type: {
        name: 'Composite',
        className: 'LocationData',
        modelProperties: {
          aDDRESS: {
            required: false,
            serializedName: 'ADDRESS',
            type: {
              name: 'String'
            }
          },
          bKCLASS: {
            required: false,
            serializedName: 'BKCLASS',
            type: {
              name: 'String'
            }
          },
          cBSA: {
            required: false,
            serializedName: 'CBSA',
            type: {
              name: 'String'
            }
          },
          cBSADIV: {
            required: false,
            serializedName: 'CBSA_DIV',
            type: {
              name: 'String'
            }
          },
          cBSADIVFLG: {
            required: false,
            serializedName: 'CBSA_DIV_FLG',
            type: {
              name: 'String'
            }
          },
          cBSADIVNO: {
            required: false,
            serializedName: 'CBSA_DIV_NO',
            type: {
              name: 'String'
            }
          },
          cBSAMETRO: {
            required: false,
            serializedName: 'CBSA_METRO',
            type: {
              name: 'String'
            }
          },
          cBSAMETROFLG: {
            required: false,
            serializedName: 'CBSA_METRO_FLG',
            type: {
              name: 'String'
            }
          },
          cBSAMETRONAME: {
            required: false,
            serializedName: 'CBSA_METRO_NAME',
            type: {
              name: 'String'
            }
          },
          cBSAMICROFLG: {
            required: false,
            serializedName: 'CBSA_MICRO_FLG',
            type: {
              name: 'String'
            }
          },
          cBSANO: {
            required: false,
            serializedName: 'CBSA_NO',
            type: {
              name: 'String'
            }
          },
          cERT: {
            required: false,
            serializedName: 'CERT',
            type: {
              name: 'String'
            }
          },
          cITY: {
            required: false,
            serializedName: 'CITY',
            type: {
              name: 'String'
            }
          },
          cOUNTY: {
            required: false,
            serializedName: 'COUNTY',
            type: {
              name: 'String'
            }
          },
          cSA: {
            required: false,
            serializedName: 'CSA',
            type: {
              name: 'String'
            }
          },
          cSAFLG: {
            required: false,
            serializedName: 'CSA_FLG',
            type: {
              name: 'String'
            }
          },
          cSANO: {
            required: false,
            serializedName: 'CSA_NO',
            type: {
              name: 'String'
            }
          },
          eSTYMD: {
            required: false,
            serializedName: 'ESTYMD',
            type: {
              name: 'DateTime'
            }
          },
          fiUNINUM: {
            required: false,
            serializedName: 'FI_UNINUM',
            type: {
              name: 'String'
            }
          },
          mAINOFF: {
            required: false,
            serializedName: 'MAINOFF',
            type: {
              name: 'Number'
            }
          },
          nAME: {
            required: false,
            serializedName: 'NAME',
            type: {
              name: 'String'
            }
          },
          oFFNAME: {
            required: false,
            serializedName: 'OFFNAME',
            type: {
              name: 'String'
            }
          },
          oFFNUM: {
            required: false,
            serializedName: 'OFFNUM',
            type: {
              name: 'String'
            }
          },
          rUNDATE: {
            required: false,
            serializedName: 'RUNDATE',
            type: {
              name: 'DateTime'
            }
          },
          sERVTYPE: {
            required: false,
            serializedName: 'SERVTYPE',
            type: {
              name: 'Number'
            }
          },
          sTALP: {
            required: false,
            serializedName: 'STALP',
            type: {
              name: 'String'
            }
          },
          sTCNTY: {
            required: false,
            serializedName: 'STCNTY',
            type: {
              name: 'String'
            }
          },
          sTNAME: {
            required: false,
            serializedName: 'STNAME',
            type: {
              name: 'String'
            }
          },
          uNINUM: {
            required: false,
            serializedName: 'UNINUM',
            type: {
              name: 'String'
            }
          },
          zIP: {
            required: false,
            serializedName: 'ZIP',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LocationData;