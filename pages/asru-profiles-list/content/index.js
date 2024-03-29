const { merge } = require('lodash');
const baseContent = require('../../common/content');

module.exports = merge({}, baseContent, {
  page: {
    title: 'Staff directory',
    subtitle: 'Animals in Science Regulation Unit'
  },
  tabs: {
    current: 'Current staff',
    former: 'Former staff'
  },
  search: 'Search by name or email',
  filters: {
    admin: 'Admin',
    support: 'Business Support',
    rops: 'Returns analyst',
    licensing: 'Licensing Officer',
    inspector: 'Inspector'
  },
  fields: {
    name: {
      label: 'Name'
    },
    email: {
      label: 'Email'
    },
    telephone: {
      label: 'Phone'
    },
    assignedRoles: {
      label: 'Assigned roles'
    },
    removedAt: {
      label: 'Removed'
    }
  }
});
