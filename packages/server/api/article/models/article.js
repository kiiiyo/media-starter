"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const index = "article";

module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      strapi.services.algolia.saveObject(result, index);
    },
    async afterUpdate(result, params, data) {
      strapi.services.algolia.saveObject(result, index);
    },
    async afterDelete(result, params) {
      strapi.services.algolia.deleteObject(result.id, index);
    },
  },
};
