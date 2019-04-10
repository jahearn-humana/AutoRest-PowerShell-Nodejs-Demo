/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a Pathslocationsgetresponses200contentapplicationJsonschema.
 */
class Pathslocationsgetresponses200contentapplicationJsonschema {
  /**
   * Create a Pathslocationsgetresponses200contentapplicationJsonschema.
   * @property {object} [meta]
   * @property {number} [meta.total] Total query result count
   * @property {object} [meta.parameters] Query parameters supplied
   * @property {object} [meta.index]
   * @property {string} [meta.index.name] name of index used to retrieve data
   * @property {date} [meta.index.createTimestamp] date/time index was created
   * @property {array} [data]
   */
  constructor() {
  }

  /**
   * Defines the metadata of Pathslocationsgetresponses200contentapplicationJsonschema
   *
   * @returns {object} metadata of Pathslocationsgetresponses200contentapplicationJsonschema
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'paths·locations·get·responses·200·content·application-json·schema',
      type: {
        name: 'Composite',
        className: 'Pathslocationsgetresponses200contentapplicationJsonschema',
        modelProperties: {
          meta: {
            required: false,
            serializedName: 'meta',
            type: {
              name: 'Composite',
              className: 'Metadata'
            }
          },
          data: {
            required: false,
            serializedName: 'data',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LocationElementType',
                  type: {
                    name: 'Composite',
                    className: 'Location'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Pathslocationsgetresponses200contentapplicationJsonschema;