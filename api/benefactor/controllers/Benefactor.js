'use strict';

/**
 * Benefactor.js controller
 *
 * @description: A set of functions called "actions" for managing `Benefactor`.
 */

module.exports = {

  /**
   * Retrieve benefactor records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.benefactor.fetchAll(ctx.query);
  },

  /**
   * Retrieve a benefactor record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.benefactor.fetch(ctx.params);
  },

  /**
   * Create a/an benefactor record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.benefactor.add(ctx.request.body);
  },

  /**
   * Update a/an benefactor record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.benefactor.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an benefactor record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.benefactor.remove(ctx.params);
  }
};
