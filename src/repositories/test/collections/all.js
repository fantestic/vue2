export default [
  {
    id: 'KioskSettings',
    scenarios: [
        {
          id: 'KioskSettings/PageLoads',
          steps: {
            0: { action: 'amOnPage', params: { $page: {value: '/', dataSource: 'text' }}},
            1: { action: 'see', params: { $text: {value: 'Home', dataSource: 'text' }}},
          }
        },
        {
          id: 'KioskSettings/CanSaveSettings',
          steps: {
            0: { action: 'amOnPage', params: { $page: {value: '/', dataSource: 'text' }}},
            1: { action: 'see', params: { $text: {value: 'Home', dataSource: 'text' }}},
          }
        },
        {
          id: 'KioskSettings/PreviewsChanges',
          steps: {
            0: { action: 'amOnPage', params: { $page: {value: '/', dataSource: 'text' }}},
            1: { action: 'see', params: { $text: {value: 'Home', dataSource: 'text' }}},
          }
        },
    ]
  },
  {
    id: 'ServiceProviderOrganizationManagement',
    scenarios: [
        {id: 'ServiceProviderOrganizationManagement/PageLoads', steps: {}},
        {id: 'ServiceProviderOrganizationManagement/CanListOrganizations', steps: {}},
        {id: 'ServiceProviderOrganizationManagement/CanSaveOrganization', steps: {}},
    ]
  },
  {
    id: 'ServiceProviderMemberManagement',
    scenarios: [
        {id: 'ServiceProviderMemberManagement/PageLoads', steps: {}},
        {id: 'ServiceProviderMemberManagement/CanCreateMember', steps: {}},
        {id: 'ServiceProviderMemberManagement/CanUpdateMember', steps: {}},
        {id: 'ServiceProviderMemberManagement/CanDeleteMember', steps: {}},
        {id: 'CServiceProviderMemberManagement/anInviteActiveMember', steps: {}},
        {id: 'ServiceProviderMemberManagement/CantInviteInactiveMember', steps: {}},
    ]
  },
  {
    id: 'ServiceProviderOrganizationCategoriesAndGroups',
    scenarios: [
      {id: 'ServiceProviderOrganizationCategoriesAndGroups/PageLoads', steps: {}},
      {id: 'ServiceProviderOrganizationCategoriesAndGroups/CanCreateCategory', steps: {}},
      {id: 'ServiceProviderOrganizationCategoriesAndGroups/CanUpdateCategory', steps: {}},
      {id: 'ServiceProviderOrganizationCategoriesAndGroups/CanDeleteCategory', steps: {}},
      {id: 'ServiceProviderOrganizationCategoriesAndGroups/CannotSaveDuplicateCategories', steps: {}},
    ]
  },
  {
    id: 'SIOM',
    scenarios: [
      {id: 'SIOM/CanSignInSpMember', steps: {}},
      {id: 'SIOM/CanSignInStaff', steps: {}},
      {id: 'SIOM/CanSignInGuest', steps: {}},
      {id: 'SIOM/CanSignOutGuest', steps: {}},
    ]
  }
]